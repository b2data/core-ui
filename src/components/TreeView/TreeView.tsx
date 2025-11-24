import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";
import {
  Box,
  Collapse,
  IconButton,
  Typography,
  useTheme,
  alpha,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { TreeItemActions } from "./TreeItemActions";

export type TreeViewItemId = string | number;

export interface TreeViewItem {
  id: TreeViewItemId;
  parentId: TreeViewItemId | null;
  childrenCount: number;
  children?: TreeViewItem[];
  [key: string]: any;
}

export interface TreeViewAction {
  label: string;
  onClick: (item: TreeViewItem) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
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

export function TreeView({
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
}: TreeViewProps) {
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
  const [dropTargetId, setDropTargetId] = useState<TreeViewItemId | null>(null);
  const [dropPosition, setDropPosition] = useState<DropPosition | null>(null);
  const dragPreviewRef = useRef<HTMLDivElement | null>(null);
  const fetchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef<boolean>(true);

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
    };
  }, []);

  const isApiMode = !!dataSource;
  const items = isApiMode ? internalItems : itemsProp;
  const loadingState = isApiMode
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
      if (item.parentId === null) {
        rootItems.push(itemMap.get(item.id)!);
      } else {
        const parent = itemMap.get(item.parentId);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(itemMap.get(item.id)!);
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
  useEffect(() => {
    if (!dataSource) return;

    if (!hasInitialLoadRef.current) return;

    const newlyExpanded = new Set<TreeViewItemId>();
    expandedItems.forEach((itemId) => {
      if (!prevExpandedItemsRef.current.has(itemId)) {
        newlyExpanded.add(itemId);
      }
    });

    if (newlyExpanded.size === 0) {
      prevExpandedItemsRef.current = new Set(expandedItems);
      return;
    }

    prevExpandedItemsRef.current = new Set(expandedItems);

    if (fetchTimeoutRef.current) {
      clearTimeout(fetchTimeoutRef.current);
    }

    const itemsToLoad = new Set(newlyExpanded);

    setLoadingItems((prev) => {
      const next = new Set(prev);
      itemsToLoad.forEach((itemId) => {
        next.add(itemId);
      });
      return next;
    });

    const debounceMs = dataSource.debounceMs ?? 150;
    fetchTimeoutRef.current = setTimeout(async () => {
      if (!isMountedRef.current) return;

      const parentIds: (TreeViewItemId | null)[] = [null];
      expandedItems.forEach((itemId) => {
        parentIds.push(itemId);
      });

      setLoading(true);

      try {
        const fetchedItems = await dataSource.fetchItems(parentIds);

        if (!isMountedRef.current) return;

        setInternalItems((prevItems) => {
          const itemsMap = new Map<TreeViewItemId, TreeViewItem>();
          prevItems.forEach((item) => {
            itemsMap.set(item.id, { ...item, children: undefined });
          });
          fetchedItems.forEach((item) => {
            itemsMap.set(item.id, { ...item, children: undefined });
          });
          return Array.from(itemsMap.values());
        });
        dataSource.onItemsLoaded?.(fetchedItems);

        if (isMountedRef.current) {
          setLoadingItems((prev) => {
            const next = new Set(prev);
            itemsToLoad.forEach((itemId) => {
              next.delete(itemId);
            });
            return next;
          });
        }
      } catch (error) {
        if (isMountedRef.current) {
          dataSource.onLoadError?.(error as Error, parentIds);
          setLoadingItems((prev) => {
            const next = new Set(prev);
            itemsToLoad.forEach((itemId) => {
              next.delete(itemId);
            });
            return next;
          });
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    }, debounceMs);

    return () => {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, [dataSource, expandedItems]);

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

    setLoading(true);
    dataSource
      .fetchItems(parentIds)
      .then((fetchedItems) => {
        if (isMountedRef.current) {
          setInternalItems(fetchedItems);
          dataSource.onItemsLoaded?.(fetchedItems);
        }
      })
      .catch((error) => {
        if (isMountedRef.current) {
          dataSource.onLoadError?.(error as Error, parentIds);
        }
      })
      .finally(() => {
        if (isMountedRef.current) {
          setLoading(false);
        }
      });
  }, [dataSource, initialExpandedItems, isExpandedControlled, expandedItemIds]);

  const itemsMap = useMemo(() => {
    const map = new Map<TreeViewItemId, TreeViewItem>();
    items.forEach((item) => {
      map.set(item.id, item);
    });
    return map;
  }, [items]);

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
            const findInTree = (
              items: TreeViewItem[],
              id: TreeViewItemId,
            ): TreeViewItem | null => {
              for (const treeItem of items) {
                if (treeItem.id === id) return treeItem;
                if (treeItem.children) {
                  const found = findInTree(treeItem.children, id);
                  if (found) return found;
                }
              }
              return null;
            };
            for (const rootItem of treeItems) {
              const found = findInTree(rootItem.children || [], itemId);
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
          targetIndex = newItems.findIndex((item) => item.id === targetItemId);
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

      if (!draggedItemId || dropTargetId === undefined || !dropPosition) return;

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
    [updateExpandedItems],
  );

  const renderItem = useCallback(
    (item: TreeViewItem, depth: number = 0) => {
      const isExpanded = expandedItems.has(item.id);
      const hasChildren =
        (item.children?.length ?? 0) > 0 || (item.childrenCount ?? 0) > 0;
      const isLoadingItem = isApiMode && loadingItems.has(item.id);
      const isSelected = selectedItemId === item.id;
      const actions = getItemActions?.(item) || [];
      const hasActions = actions.length > 0;
      const isDragging = draggedItemId === item.id;
      const isDropTarget = dropTargetId === item.id && dropPosition !== null;
      const canDrag = enableDragAndDrop && canDragItem(item);

      const draggedItem =
        enableDragAndDrop && draggedItemId
          ? itemsMap.get(draggedItemId)
          : undefined;
      const canDropInsideValue =
        enableDragAndDrop && draggedItemId
          ? canDropInside(draggedItem, item)
          : true;

      return (
        <Box
          key={`${item.id}-${item.children?.length ?? 0}`}
          sx={{
            position: "relative",
          }}
        >
          {enableDragAndDrop && isDropTarget && dropPosition === "before" && (
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

          <Box
            onDragOver={(e) => handleDragOver(e, item)}
            onDrop={handleDrop}
            sx={{
              display: "flex",
              alignItems: "center",
              py: 0.5,
              px: 1,
              height: "32px",
              cursor: onItemClick ? "pointer" : "default",
              backgroundColor: isSelected
                ? alpha(theme.palette.primary.main, 0.08)
                : isDropTarget && dropPosition === "inside"
                  ? alpha(theme.palette.primary.main, 0.12)
                  : "transparent",
              position: "relative",
              opacity: isDragging
                ? 0.5
                : draggedItemId && !canDropInsideValue
                  ? 0.4
                  : 1,
              color:
                draggedItemId && !canDropInsideValue
                  ? theme.palette.action.disabled
                  : "inherit",
              "&:hover": {
                backgroundColor: onItemClick
                  ? theme.palette.action.hover
                  : "transparent",
                "& .tree-item-actions": {
                  opacity: 1,
                },
                ...(canDrag && {
                  "& .drag-indicator": {
                    display: "flex",
                  },
                  "& .item-icon": {
                    display: "none",
                  },
                }),
              },
              pl: depth * 2 + 1,
            }}
            onClick={() => {
              onItemClick?.(item);
              const newSelectedId = selectedItemId === item.id ? null : item.id;
              onSelectedItemChange?.(newSelectedId);
            }}
          >
            {hasChildren ? (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleExpand(item.id);
                }}
                sx={{ mr: 0.5, p: 0.5 }}
              >
                {isExpanded ? (
                  <ExpandMoreIcon fontSize="small" />
                ) : (
                  <ChevronRightIcon fontSize="small" />
                )}
              </IconButton>
            ) : (
              <Box sx={{ width: 24, mr: 0.5 }} />
            )}

            {getItemIcon && (
              <Box
                sx={{
                  mr: 1,
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  width: 24,
                  height: 24,
                }}
              >
                <Box
                  className="item-icon"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                  }}
                >
                  {getItemIcon(item)}
                </Box>
                {canDrag && (
                  <Box
                    className="drag-indicator"
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, item)}
                    onDragEnd={handleDragEnd}
                    sx={{
                      display: "none",
                      alignItems: "center",
                      position: "absolute",
                      cursor: isDragging ? "grabbing" : "grab",
                      "&:active": {
                        cursor: "grabbing",
                      },
                    }}
                  >
                    <DragIndicatorIcon fontSize="small" />
                  </Box>
                )}
              </Box>
            )}

            <Typography
              variant="body2"
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {getItemLabel(item)}
            </Typography>

            {hasActions && <TreeItemActions item={item} actions={actions} />}
          </Box>

          {hasChildren && (
            <Collapse
              key={`${item.id}-${item.children?.length ?? 0}`}
              in={isExpanded && !isLoadingItem}
              timeout="auto"
              unmountOnExit
            >
              <Box>
                {item.children?.map((child: TreeViewItem) =>
                  renderItem(child, depth + 1),
                )}
              </Box>
            </Collapse>
          )}

          {enableDragAndDrop && isDropTarget && dropPosition === "after" && (
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
        </Box>
      );
    },
    [
      expandedItems,
      selectedItemId,
      draggedItemId,
      dropTargetId,
      dropPosition,
      enableDragAndDrop,
      canDragItem,
      canDropOnItem,
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
      theme,
      items,
      isApiMode,
      loadingItems,
    ],
  );

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {loadingState && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 10,
          }}
        >
          <CircularProgress size={24} />
        </Box>
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

      {treeItems.map((item) => renderItem(item, 0))}

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
}
