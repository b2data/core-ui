import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Box } from "../Box";
import { Skeleton } from "../Skeleton";
import { useTheme } from "../../theming";
import { TreeViewItemComponent } from "./TreeViewItem";
import { ExternalDropMonitor } from "./ExternalDropMonitor";
import { SxProps, Theme } from "@mui/material";

export type TreeViewItemId = string | number;

export interface TreeViewItem {
  id: TreeViewItemId;
  parentId: TreeViewItemId | null;
  childrenCount: number;
  children?: TreeViewItem[];
  [key: string]: any;
}

export interface TreeViewRef {
  /**
   * Refresh items in the tree view
   * @param parentIds Optional array of parent IDs to refresh. If not provided, refreshes all currently expanded items.
   * @param options Optional configuration for the refresh operation
   * @param options.showLoadingOn Optional array of item IDs that should show loading spinner during refresh (instead of parent items)
   */
  refresh: (
    parentIds?: (TreeViewItemId | null)[],
    options?: { showLoadingOn?: TreeViewItemId[] },
  ) => void;
}

export interface TreeViewAction {
  label: string;
  onClick: (item: TreeViewItem) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  /**
   * If true, displays a divider under this action
   * @default false
   */
  withDivider?: boolean;
  /**
   * Custom styles for the action
   */
  sx?: SxProps<Theme>;
}

export interface TreeViewProps {
  /**
   * Items array (required in controlled mode, optional in API mode)
   */
  items?: TreeViewItem[];
  getItemLabel?: (item: TreeViewItem) => string;
  getItemIcon?: (item: TreeViewItem) => React.ReactNode;
  getItemActions?: (item: TreeViewItem) => TreeViewAction[];
  onItemClick?: (item: TreeViewItem) => void;
  /**
   * Selected item ID (controlled)
   */
  selectedItemId?: TreeViewItemId | null;
  /**
   * Callback when selected item changes
   */
  onSelectedItemChange?: (itemId: TreeViewItemId | null) => void;
  /**
   * Enable drag and drop functionality
   * @default false
   */
  enableDragAndDrop?: boolean;
  /**
   * Callback invoked when items are reordered via drag & drop
   */
  onItemsReorder?: (params: {
    draggedItemId: TreeViewItemId;
    targetItemId: TreeViewItemId | null;
    position: "before" | "after" | "inside";
    newItems: TreeViewItem[];
  }) => void;
  /**
   * Determines if an item can be dragged
   * @default () => true
   */
  canDragItem?: (item: TreeViewItem) => boolean;
  /**
   * Determines if a dragged item can be dropped on a target item
   * @default Automatically prevents dropping on self and descendants
   */
  canDropOnItem?: (
    draggedItem: TreeViewItem,
    targetItem: TreeViewItem | null,
    position: "before" | "after" | "inside",
  ) => boolean;
  /**
   * Custom drag preview element
   */
  getDragPreview?: (item: TreeViewItem) => React.ReactNode;
  /**
   * Initial expanded items IDs (uncontrolled mode only)
   * Used to set initial expanded state when not using controlled mode
   * For controlled mode with localStorage, use expandedItemIds instead
   */
  initialExpandedItems?: TreeViewItemId[];
  /**
   * Controlled expanded item IDs
   */
  expandedItemIds?: TreeViewItemId[];
  /**
   * Callback when expanded item IDs change
   */
  onExpandedItemsChange?: (itemIds: TreeViewItemId[]) => void;
  /**
   * Data source for lazy loading items from API
   * If provided, component will work in uncontrolled mode with API
   */
  dataSource?: {
    /**
     * Function to fetch items from API based on opened parent IDs
     * @param parentIds Array of parent IDs that are currently expanded (null for root level)
     * @returns Promise with array of items to display
     */
    fetchItems: (
      parentIds: (TreeViewItemId | null)[],
    ) => Promise<TreeViewItem[]>;
    /**
     * Debounce delay for fetchItems requests in milliseconds
     * @default 150
     */
    debounceMs?: number;
    /**
     * Callback when items are loaded from API
     */
    onItemsLoaded?: (items: TreeViewItem[]) => void;
    /**
     * Callback when fetchItems fails
     */
    onLoadError?: (error: Error, parentIds: (TreeViewItemId | null)[]) => void;
    /**
     * Loading state indicator
     */
    loading?: boolean;
  };
  /**
   * Component to display when there are no items in the tree
   */
  emptyState?: React.ReactNode;
  /**
   * Enable accepting drops from external sources (e.g., DataGrid using dnd-kit)
   * @default false
   */
  enableExternalDrops?: boolean;
  /**
   * Callback when external item is dropped on tree item
   * @param event Drop event with external data
   * @param targetItem Tree item that received the drop
   * @param position Drop position relative to target item
   */
  onExternalDrop?: (
    event: {
      type: string;
      data: any[];
    },
    targetItem: TreeViewItem,
    position: "before" | "after" | "inside",
  ) => void;
  /**
   * Determines if external drop type can be dropped on item
   * @param dropType The type of the external drop (e.g., "Users", "Documents")
   * @param targetItem The tree item that would receive the drop
   * @returns true if the drop is allowed, false otherwise
   */
  canAcceptExternalDrop?: (
    dropType: string,
    targetItem: TreeViewItem,
  ) => boolean;
}

type DropPosition = "before" | "after" | "inside";

const areSetsEqual = (
  a: Set<TreeViewItemId>,
  b: Set<TreeViewItemId>,
): boolean => {
  if (a.size !== b.size) return false;
  for (const value of a) {
    if (!b.has(value)) {
      return false;
    }
  }
  return true;
};

const findItemInTree = (
  items: TreeViewItem[],
  id: TreeViewItemId,
): TreeViewItem | null => {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.children) {
      const found = findItemInTree(item.children, id);
      if (found) return found;
    }
  }
  return null;
};

const collectDescendants = (
  items: TreeViewItem[],
  parentId: TreeViewItemId,
): Set<TreeViewItemId> => {
  const descendants = new Set<TreeViewItemId>();
  items.forEach((item) => {
    if (item.parentId === parentId) {
      descendants.add(item.id);
      const childDescendants = collectDescendants(items, item.id);
      childDescendants.forEach((id) => descendants.add(id));
    }
  });
  return descendants;
};

const updateLoadingItems = (
  setLoadingItems: React.Dispatch<React.SetStateAction<Set<TreeViewItemId>>>,
  itemIds: Set<TreeViewItemId> | TreeViewItemId[],
  add: boolean,
) => {
  setLoadingItems((prev) => {
    const next = new Set(prev);
    const ids = itemIds instanceof Set ? itemIds : new Set(itemIds);
    if (add) {
      ids.forEach((itemId) => next.add(itemId));
    } else {
      ids.forEach((itemId) => next.delete(itemId));
    }
    return next;
  });
};
/**
 * TODO
 * Analysis: Should we migrate internal drag-and-drop to @dnd-kit?
 * Conclusion
 * Don't migrate now. Reasons:
 * Current system works well
 * External drops are the priority
 * Migration is high risk, low immediate benefit
 * Can be done later as a refactor
 * Focus on:
 * Completing external drops feature
 * Testing external drops thoroughly
 * Documenting the hybrid approach
 * Consider migration when:
 * You have dedicated time for refactoring
 * You need @dnd-kit-specific features
 * You're doing other major TreeView changes
 * You can thoroughly test all use cases
 * The current hybrid approach (HTML5 internal + @dnd-kit external) is a reasonable solution that balances functionality, risk, and time investment.
 */
export const TreeView = forwardRef<TreeViewRef, TreeViewProps>(
  function TreeView(
    {
      items: itemsProp = [],
      getItemLabel = (item) => String(item.id),
      getItemIcon,
      getItemActions,
      onItemClick,
      selectedItemId,
      onSelectedItemChange,
      enableDragAndDrop = false,
      onItemsReorder,
      canDragItem = () => true,
      canDropOnItem,
      getDragPreview,
      initialExpandedItems,
      expandedItemIds,
      onExpandedItemsChange,
      dataSource,
      emptyState,
      enableExternalDrops = false,
      onExternalDrop,
      canAcceptExternalDrop,
    },
    ref,
  ) {
    const theme = useTheme();
    const [internalExpandedItems, setInternalExpandedItems] = useState<
      Set<TreeViewItemId>
    >(() => new Set(initialExpandedItems || []));
    const [internalItems, setInternalItems] = useState<TreeViewItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingItems, setLoadingItems] = useState<Set<TreeViewItemId>>(
      new Set(),
    );
    const [draggedItemId, setDraggedItemId] = useState<TreeViewItemId | null>(
      null,
    );
    const [dropTargetId, setDropTargetId] = useState<TreeViewItemId | null>(
      null,
    );
    const [dropPosition, setDropPosition] = useState<DropPosition | null>(null);
    const [externalDropTargetId, setExternalDropTargetId] =
      useState<TreeViewItemId | null>(null);
    const [externalDropPosition, setExternalDropPosition] =
      useState<DropPosition | null>(null);
    const dragPreviewRef = useRef<HTMLDivElement | null>(null);
    const fetchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const collapseCacheTimeoutRef = useRef<Map<TreeViewItemId, NodeJS.Timeout>>(
      new Map(),
    );
    const isMountedRef = useRef<boolean>(true);
    const [activeLoadingItemId, setActiveLoadingItemId] =
      useState<TreeViewItemId | null>(null);

    const isExpandedControlled = expandedItemIds !== undefined;
    const expandedItems = useMemo<Set<TreeViewItemId>>(
      () =>
        isExpandedControlled ? new Set(expandedItemIds) : internalExpandedItems,
      [isExpandedControlled, expandedItemIds, internalExpandedItems],
    );

    const emitExpandedItemsChange = useCallback(
      (next: Set<TreeViewItemId>) => {
        if (!onExpandedItemsChange) return;
        if (areSetsEqual(expandedItems, next)) return;
        onExpandedItemsChange(Array.from(next));
      },
      [expandedItems, onExpandedItemsChange],
    );

    const updateExpandedItems = useCallback(
      (updater: (prev: Set<TreeViewItemId>) => Set<TreeViewItemId>) => {
        if (isExpandedControlled) {
          const next = updater(new Set(expandedItems));
          emitExpandedItemsChange(next);
          return;
        }
        setInternalExpandedItems((prev) => updater(prev));
      },
      [isExpandedControlled, expandedItems, emitExpandedItemsChange],
    );

    useEffect(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
        if (fetchTimeoutRef.current) {
          clearTimeout(fetchTimeoutRef.current);
        }
        collapseCacheTimeoutRef.current.forEach((timeout) => {
          clearTimeout(timeout);
        });
        collapseCacheTimeoutRef.current.clear();
      };
    }, []);

    const isApiMode = !!dataSource;
    const items = isApiMode ? internalItems : itemsProp;
    const isTreeLoading = isApiMode
      ? loading || (dataSource?.loading ?? false)
      : false;

    const treeItems = useMemo(() => {
      const itemMap = new Map<TreeViewItemId, TreeViewItem>();
      const rootItems: TreeViewItem[] = [];

      const seenIds = new Set<TreeViewItemId>();
      items.forEach((item) => {
        if (seenIds.has(item.id)) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `TreeView: Duplicate item id "${item.id}" found. Last item will be used.`,
            );
          }
        }
        seenIds.add(item.id);
        itemMap.set(item.id, { ...item, children: undefined });
      });

      items.forEach((item) => {
        const mappedItem = itemMap.get(item.id);
        if (!mappedItem) return;
        if (item.parentId === null) {
          rootItems.push(mappedItem);
        } else {
          const parent = itemMap.get(item.parentId);
          if (parent) {
            if (!parent.children) {
              parent.children = [];
            }
            parent.children.push(mappedItem);
          }
        }
      });

      return rootItems;
    }, [items]);

    const prevExpandedItemsRef = useRef<Set<TreeViewItemId>>(
      new Set(
        expandedItemIds !== undefined
          ? expandedItemIds
          : initialExpandedItems || [],
      ),
    );
    const hasInitialLoadRef = useRef<boolean>(false);

    const fetchItemsForParents = useCallback(
      async (
        parentIds: (TreeViewItemId | null)[],
        options?: {
          itemsToLoad?: Set<TreeViewItemId>;
          skipDebounce?: boolean;
        },
      ) => {
        if (!dataSource) return;

        const itemsToLoad = options?.itemsToLoad || new Set<TreeViewItemId>();
        const skipDebounce = options?.skipDebounce || false;

        if (itemsToLoad.size > 0) {
          updateLoadingItems(setLoadingItems, itemsToLoad, true);
          const itemsToLoadArray = Array.from(itemsToLoad);
          const nextActiveItem = itemsToLoadArray[0] ?? null;
          if (nextActiveItem) {
            setActiveLoadingItemId((current) => current ?? nextActiveItem);
          }
        }

        const performFetch = async () => {
          if (!isMountedRef.current) return;

          setLoading(true);

          try {
            const fetchedItems = await dataSource.fetchItems(parentIds);

            if (!isMountedRef.current) return;

            setInternalItems((prevItems) => {
              const itemsMap = new Map<TreeViewItemId, TreeViewItem>();

              const refreshedParentIdsSet = new Set(parentIds);
              prevItems.forEach((item) => {
                if (!refreshedParentIdsSet.has(item.parentId ?? null)) {
                  itemsMap.set(item.id, { ...item, children: undefined });
                }
              });

              fetchedItems.forEach((item) => {
                itemsMap.set(item.id, { ...item, children: undefined });
              });

              const updatedItems = Array.from(itemsMap.values());
              const fetchedItemIds = new Set(
                fetchedItems.map((item) => item.id),
              );
              const fetchedItemsMap = new Map(
                fetchedItems.map((item) => [item.id, item.childrenCount ?? 0]),
              );

              const childrenCountMap = new Map<TreeViewItemId, number>();
              const childrenCountByParent = new Map<TreeViewItemId, number>();
              updatedItems.forEach((item) => {
                if (item.parentId !== null) {
                  childrenCountByParent.set(
                    item.parentId,
                    (childrenCountByParent.get(item.parentId) ?? 0) + 1,
                  );
                }
              });
              updatedItems.forEach((item) => {
                if (refreshedParentIdsSet.has(item.id ?? null)) {
                  childrenCountMap.set(
                    item.id,
                    childrenCountByParent.get(item.id) ?? 0,
                  );
                } else if (fetchedItemIds.has(item.id)) {
                  childrenCountMap.set(
                    item.id,
                    fetchedItemsMap.get(item.id) ?? item.childrenCount ?? 0,
                  );
                } else {
                  childrenCountMap.set(item.id, item.childrenCount ?? 0);
                }
              });

              return updatedItems.map((item) => ({
                ...item,
                childrenCount: childrenCountMap.get(item.id) ?? 0,
              }));
            });
            dataSource.onItemsLoaded?.(fetchedItems);

            if (isMountedRef.current && itemsToLoad.size > 0) {
              updateLoadingItems(setLoadingItems, itemsToLoad, false);
              setActiveLoadingItemId((current) =>
                current && itemsToLoad.has(current) ? null : current,
              );
            }
          } catch (error) {
            if (isMountedRef.current) {
              dataSource.onLoadError?.(error as Error, parentIds);
              if (itemsToLoad.size > 0) {
                updateLoadingItems(setLoadingItems, itemsToLoad, false);
                setActiveLoadingItemId((current) =>
                  current && itemsToLoad.has(current) ? null : current,
                );
              }
            }
          } finally {
            if (isMountedRef.current) {
              setLoading(false);
            }
          }
        };

        if (skipDebounce) {
          await performFetch();
        } else {
          const debounceMs = dataSource.debounceMs ?? 150;
          if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
          }
          fetchTimeoutRef.current = setTimeout(performFetch, debounceMs);
        }
      },
      [dataSource],
    );
    useEffect(() => {
      if (!dataSource) return;

      if (!hasInitialLoadRef.current) return;

      const newlyExpanded = new Set<TreeViewItemId>();
      const newlyCollapsed = new Set<TreeViewItemId>();

      expandedItems.forEach((itemId) => {
        if (!prevExpandedItemsRef.current.has(itemId)) {
          newlyExpanded.add(itemId);
        }
      });

      prevExpandedItemsRef.current.forEach((itemId) => {
        if (!expandedItems.has(itemId)) {
          newlyCollapsed.add(itemId);
        }
      });

      if (newlyCollapsed.size > 0) {
        newlyCollapsed.forEach((collapsedId) => {
          const existingTimeout =
            collapseCacheTimeoutRef.current.get(collapsedId);
          if (existingTimeout) {
            clearTimeout(existingTimeout);
          }

          const timeout = setTimeout(() => {
            if (!isMountedRef.current) return;

            setInternalItems((prevItems) => {
              const itemsMap = new Map<TreeViewItemId, TreeViewItem>();

              const descendants = collectDescendants(prevItems, collapsedId);
              const allIdsToRemove = new Set(descendants);

              prevItems.forEach((item) => {
                if (!allIdsToRemove.has(item.id)) {
                  itemsMap.set(item.id, { ...item, children: undefined });
                }
              });

              return Array.from(itemsMap.values());
            });

            collapseCacheTimeoutRef.current.delete(collapsedId);
          }, 350);

          collapseCacheTimeoutRef.current.set(collapsedId, timeout);
        });
      }

      if (newlyExpanded.size === 0) {
        prevExpandedItemsRef.current = new Set(expandedItems);
        return;
      }

      prevExpandedItemsRef.current = new Set(expandedItems);

      const parentIds: (TreeViewItemId | null)[] = [null];
      expandedItems.forEach((itemId) => {
        parentIds.push(itemId);
      });

      fetchItemsForParents(parentIds, {
        itemsToLoad: newlyExpanded,
        skipDebounce: false,
      });

      return () => {
        if (fetchTimeoutRef.current) {
          clearTimeout(fetchTimeoutRef.current);
        }
      };
    }, [dataSource, expandedItems, fetchItemsForParents]);

    useEffect(() => {
      if (!dataSource || hasInitialLoadRef.current) return;

      const parentIds: (TreeViewItemId | null)[] = [null];
      const itemsToLoad = isExpandedControlled
        ? expandedItemIds || []
        : initialExpandedItems || [];
      itemsToLoad.forEach((itemId) => {
        parentIds.push(itemId);
      });

      hasInitialLoadRef.current = true;

      fetchItemsForParents(parentIds, {
        skipDebounce: true,
      });
    }, [
      dataSource,
      initialExpandedItems,
      isExpandedControlled,
      expandedItemIds,
      fetchItemsForParents,
    ]);

    const itemsMap = useMemo(() => {
      const map = new Map<TreeViewItemId, TreeViewItem>();
      items.forEach((item) => {
        map.set(item.id, item);
      });
      return map;
    }, [items]);

    useImperativeHandle(
      ref,
      () => ({
        refresh: (
          parentIds?: (TreeViewItemId | null)[],
          options?: { showLoadingOn?: TreeViewItemId[] },
        ) => {
          if (!dataSource) return;

          const idsToRefresh =
            parentIds ??
            (() => {
              const result: (TreeViewItemId | null)[] = [null];
              expandedItems.forEach((itemId) => {
                result.push(itemId);
              });
              return result;
            })();

          const itemsToShowLoading = options?.showLoadingOn
            ? new Set(options.showLoadingOn)
            : new Set(
                idsToRefresh.filter((id): id is TreeViewItemId => id !== null),
              );

          if (itemsToShowLoading.size > 0) {
            updateLoadingItems(setLoadingItems, itemsToShowLoading, true);
            const itemsArray = Array.from(itemsToShowLoading);
            setActiveLoadingItemId((current) => current ?? itemsArray[0]);
          }

          fetchItemsForParents(idsToRefresh, {
            itemsToLoad: itemsToShowLoading,
            skipDebounce: true,
          });
        },
      }),
      [dataSource, expandedItems, fetchItemsForParents],
    );

    useEffect(() => {
      updateExpandedItems((prev) => {
        const next = new Set(prev);
        let changed = false;

        prev.forEach((itemId) => {
          const itemFromMap = itemsMap.get(itemId);
          let item: TreeViewItem | null = null;
          if (itemFromMap) {
            item = treeItems.find((r) => r.id === itemId) || null;
            if (!item) {
              for (const rootItem of treeItems) {
                const found = findItemInTree(rootItem.children || [], itemId);
                if (found) {
                  item = found;
                  break;
                }
              }
            }
          }

          if (item) {
            const hasChildren =
              (item.children?.length ?? 0) > 0 || (item.childrenCount ?? 0) > 0;
            if (!hasChildren) {
              next.delete(itemId);
              changed = true;
            }
          } else if (itemFromMap) {
            const hasChildren = (itemFromMap.childrenCount ?? 0) > 0;
            if (!hasChildren) {
              next.delete(itemId);
              changed = true;
            }
          } else {
            if (itemsMap.size > 0) {
              next.delete(itemId);
              changed = true;
            }
          }
        });

        return changed ? next : prev;
      });
    }, [treeItems, itemsMap, updateExpandedItems]);

    const isDescendant = useCallback(
      (draggedItem: TreeViewItem, targetItem: TreeViewItem): boolean => {
        let current: TreeViewItem | undefined = targetItem;
        while (current?.parentId) {
          if (current.parentId === draggedItem.id) {
            return true;
          }
          current = itemsMap.get(current.parentId);
        }
        return false;
      },
      [itemsMap],
    );

    const recalculateItems = useCallback(
      (
        draggedItemId: TreeViewItemId,
        targetItemId: TreeViewItemId | null,
        position: DropPosition,
      ): TreeViewItem[] => {
        const draggedItem = itemsMap.get(draggedItemId);
        if (!draggedItem) return items;

        const newItems = items.map((item) => ({ ...item }));

        const draggedIndex = newItems.findIndex(
          (item) => item.id === draggedItemId,
        );
        if (draggedIndex === -1) return items;

        const [dragged] = newItems.splice(draggedIndex, 1);

        let targetIndex: number;
        let newParentId: TreeViewItemId | null;

        if (targetItemId === null) {
          if (position === "before") {
            targetIndex = 0;
          } else if (position === "after") {
            targetIndex = newItems.filter(
              (item) => item.parentId === null,
            ).length;
          } else {
            targetIndex = newItems.filter(
              (item) => item.parentId === null,
            ).length;
          }
          newParentId = null;
        } else {
          const targetItem = itemsMap.get(targetItemId);
          if (!targetItem) return items;

          if (position === "inside") {
            newParentId = targetItemId;
            const targetChildren = newItems.filter(
              (item) => item.parentId === targetItemId,
            );
            targetIndex = newItems.findIndex(
              (item) => item.id === targetChildren[0]?.id,
            );
            if (targetIndex === -1) {
              targetIndex = newItems.length;
            }
          } else {
            newParentId = targetItem.parentId;
            targetIndex = newItems.findIndex(
              (item) => item.id === targetItemId,
            );
            if (targetIndex === -1) return items;

            if (position === "after") {
              const siblings = newItems.filter(
                (item) => item.parentId === targetItem.parentId,
              );
              const lastSibling = siblings[siblings.length - 1];
              targetIndex = newItems.findIndex(
                (item) => item.id === lastSibling.id,
              );
              if (targetIndex !== -1) targetIndex += 1;
            }
          }
        }

        dragged.parentId = newParentId;

        if (targetIndex === -1 || targetIndex >= newItems.length) {
          newItems.push(dragged);
        } else {
          newItems.splice(targetIndex, 0, dragged);
        }

        const childrenCountMap = new Map<TreeViewItemId, number>();
        newItems.forEach((item) => {
          const count = newItems.filter(
            (child) => child.parentId === item.id,
          ).length;
          childrenCountMap.set(item.id, count);
        });

        newItems.forEach((item) => {
          item.childrenCount = childrenCountMap.get(item.id) ?? 0;
        });

        return newItems;
      },
      [items, itemsMap],
    );

    const handleDragStart = useCallback(
      (e: React.DragEvent, item: TreeViewItem) => {
        if (!enableDragAndDrop || !canDragItem(item)) {
          e.preventDefault();
          return;
        }

        setDraggedItemId(item.id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", String(item.id));

        if (getDragPreview) {
          const preview = getDragPreview(item);
          if (preview && dragPreviewRef.current) {
            dragPreviewRef.current.innerHTML = "";
          }
        }
      },
      [enableDragAndDrop, canDragItem, getDragPreview],
    );

    const handleDragEnd = useCallback(() => {
      setDraggedItemId(null);
      setDropTargetId(null);
      setDropPosition(null);
    }, []);

    const handleDragOver = useCallback(
      (e: React.DragEvent, item: TreeViewItem) => {
        if (!enableDragAndDrop || !draggedItemId) return;

        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

        const draggedItem = itemsMap.get(draggedItemId);
        if (!draggedItem) return;

        if (draggedItem.id === item.id) return;
        if (isDescendant(draggedItem, item)) return;

        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const mouseY = e.clientY;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const relativeY = mouseY - elementTop;

        let position: DropPosition;
        if (relativeY < elementHeight / 3) {
          position = "before";
        } else if (relativeY > (elementHeight * 2) / 3) {
          position = "after";
        } else {
          position = "inside";
        }

        const canDrop = canDropOnItem?.(draggedItem, item, position) ?? true;
        if (!canDrop) return;

        setDropTargetId(item.id);
        setDropPosition(position);
      },
      [enableDragAndDrop, draggedItemId, itemsMap, isDescendant, canDropOnItem],
    );

    const canDropInside = useCallback(
      (
        draggedItem: TreeViewItem | undefined,
        targetItem: TreeViewItem,
      ): boolean => {
        if (!draggedItem) return true;
        if (draggedItem.id === targetItem.id) return false;
        if (isDescendant(draggedItem, targetItem)) return false;
        return canDropOnItem?.(draggedItem, targetItem, "inside") ?? true;
      },
      [isDescendant, canDropOnItem],
    );

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!draggedItemId || dropTargetId === undefined || !dropPosition)
          return;

        const newItems = recalculateItems(
          draggedItemId,
          dropTargetId,
          dropPosition,
        );

        if (isApiMode) {
          setInternalItems(newItems);
        }

        onItemsReorder?.({
          draggedItemId,
          targetItemId: dropTargetId,
          position: dropPosition,
          newItems,
        });

        handleDragEnd();
      },
      [
        draggedItemId,
        dropTargetId,
        dropPosition,
        recalculateItems,
        onItemsReorder,
        handleDragEnd,
        isApiMode,
      ],
    );

    const handleToggleExpand = useCallback(
      (itemId: TreeViewItemId) => {
        if (isApiMode) {
          const isCurrentlyExpanded = expandedItems.has(itemId);

          if (!isCurrentlyExpanded) {
            if (activeLoadingItemId && activeLoadingItemId !== itemId) {
              return;
            }

            if (loadingItems.has(itemId)) {
              return;
            }

            setActiveLoadingItemId(itemId);
          }
        }

        updateExpandedItems((prev) => {
          const next = new Set(prev);
          if (next.has(itemId)) {
            next.delete(itemId);
          } else {
            next.add(itemId);
          }
          return next;
        });
      },
      [
        isApiMode,
        activeLoadingItemId,
        loadingItems,
        expandedItems,
        updateExpandedItems,
      ],
    );

    const renderItem = useCallback(
      (item: TreeViewItem, depth: number = 0) => {
        const isExpanded = expandedItems.has(item.id);
        const hasChildren =
          (item.children?.length ?? 0) > 0 || (item.childrenCount ?? 0) > 0;
        const isLoadingItem = isApiMode && loadingItems.has(item.id);
        const isSelected = selectedItemId === item.id;
        const actions = getItemActions?.(item) || [];
        const isDragging = draggedItemId === item.id;
        const isDropTarget = dropTargetId === item.id && dropPosition !== null;
        const isExternalDropTarget =
          enableExternalDrops &&
          externalDropTargetId === item.id &&
          externalDropPosition !== null;
        const canDrag = enableDragAndDrop && canDragItem(item);
        const isRowInteractionLocked =
          isApiMode &&
          activeLoadingItemId !== null &&
          activeLoadingItemId !== item.id;

        const draggedItem =
          enableDragAndDrop && draggedItemId
            ? itemsMap.get(draggedItemId)
            : undefined;
        const canDropInsideValue =
          enableDragAndDrop && draggedItemId
            ? canDropInside(draggedItem, item)
            : true;

        return (
          <TreeViewItemComponent
            key={`tree-view-item-${depth}-${item.id}`}
            item={item}
            depth={depth}
            isExpanded={isExpanded}
            hasChildren={hasChildren}
            isLoadingItem={isLoadingItem}
            isSelected={isSelected}
            isDragging={isDragging}
            isDropTarget={isDropTarget}
            dropPosition={dropPosition}
            isExternalDropTarget={isExternalDropTarget}
            externalDropPosition={externalDropPosition}
            canDrag={canDrag}
            isRowInteractionLocked={isRowInteractionLocked}
            canDropInsideValue={canDropInsideValue}
            actions={actions}
            enableExternalDrops={enableExternalDrops}
            enableDragAndDrop={enableDragAndDrop}
            canAcceptExternalDrop={canAcceptExternalDrop}
            getItemLabel={getItemLabel}
            getItemIcon={getItemIcon}
            onItemClick={onItemClick}
            selectedItemId={selectedItemId ?? null}
            onSelectedItemChange={onSelectedItemChange}
            handleToggleExpand={handleToggleExpand}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            draggedItemId={draggedItemId}
            theme={theme}
          >
            {hasChildren &&
              item.children?.map((child: TreeViewItem) =>
                renderItem(child, depth + 1),
              )}
          </TreeViewItemComponent>
        );
      },
      [
        expandedItems,
        selectedItemId,
        draggedItemId,
        dropTargetId,
        dropPosition,
        externalDropTargetId,
        externalDropPosition,
        enableDragAndDrop,
        enableExternalDrops,
        canDragItem,
        canDropOnItem,
        canAcceptExternalDrop,
        itemsMap,
        isDescendant,
        canDropInside,
        getItemLabel,
        getItemIcon,
        getItemActions,
        onItemClick,
        onSelectedItemChange,
        handleToggleExpand,
        handleDragStart,
        handleDragEnd,
        handleDragOver,
        handleDrop,
        activeLoadingItemId,
        theme,
        items,
        isApiMode,
        loadingItems,
      ],
    );

    const isInitialLoading =
      isApiMode &&
      loading &&
      treeItems.length === 0 &&
      hasInitialLoadRef.current;

    return (
      <Box sx={{ width: "100%", position: "relative" }}>
        {/* Conditionally render external drop monitor only when enableExternalDrops is true */}
        {enableExternalDrops && (
          <ExternalDropMonitor
            onExternalDrop={onExternalDrop}
            canAcceptExternalDrop={canAcceptExternalDrop}
            itemsMap={itemsMap}
            setExternalDropTargetId={setExternalDropTargetId}
            setExternalDropPosition={setExternalDropPosition}
          />
        )}
        {enableDragAndDrop &&
          dropTargetId === null &&
          dropPosition === "before" && (
            <Box
              sx={{
                position: "absolute",
                top: -1,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: theme.palette.primary.main,
                zIndex: 1,
              }}
            />
          )}

        {isInitialLoading ? (
          <Box sx={{ p: "6px" }}>
            <Skeleton height={20} />
            <Skeleton height={20} sx={{ mt: "6px", ml: "24px" }} />
            <Skeleton height={20} sx={{ mt: "6px", ml: "32px" }} />
          </Box>
        ) : treeItems.length === 0 && !isTreeLoading && emptyState ? (
          <>{emptyState}</>
        ) : (
          treeItems.map((item) => renderItem(item, 0))
        )}

        {enableDragAndDrop &&
          dropTargetId === null &&
          dropPosition === "after" && (
            <Box
              sx={{
                position: "absolute",
                bottom: -1,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: theme.palette.primary.main,
                zIndex: 1,
              }}
            />
          )}

        <Box
          ref={dragPreviewRef}
          sx={{
            position: "absolute",
            top: -1000,
            left: -1000,
            pointerEvents: "none",
          }}
        />
      </Box>
    );
  },
);
