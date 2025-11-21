import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import type { TreeViewItemId } from "@mui/x-tree-view/models";
import { createFlatSearchDataSource } from "./createFlatSearchDataSource";
import { useLocalStorage } from "../../hooks/use-local-storage";

export interface UseFlatSearchTreeViewConfig<R extends {}, Raw = R> {
  /**
   * Function to fetch raw items for given parent IDs
   * Returns raw data that will be transformed to R using transformItem
   */
  fetchItems: (
    parentIds: (TreeViewItemId | null)[],
  ) => Promise<Map<TreeViewItemId | null, Raw[]>>;

  /**
   * Function to transform raw item to tree item
   * If not provided, raw items are used as-is
   */
  transformItem?: (rawItem: Raw, parentId: TreeViewItemId | null) => R;

  /**
   * Function to extract children count from item
   */
  getChildrenCount: (item: R) => number;

  /**
   * Function to extract item ID from item
   */
  getItemId: (item: R) => TreeViewItemId;

  /**
   * Root node item (always visible)
   */
  rootItem: R;

  /**
   * Optional: localStorage key for storing expanded items
   * If provided, state will be automatically restored from localStorage
   */
  restoreStateKey?: string;

  /**
   * Optional: Filter function to determine which expanded items belong to this tree
   * Useful when multiple trees share the same localStorage key
   */
  filterExpandedItems?: (itemId: TreeViewItemId) => boolean;

  /**
   * Optional: Additional parent IDs to include in requests
   */
  getAdditionalParentIds?: (
    parentId: TreeViewItemId | null,
  ) => (TreeViewItemId | null)[];

  /**
   * Optional: Debounce delay for batching requests (ms)
   * @default 50
   */
  debounceDelay?: number;

  /**
   * Optional: Callbacks for observability
   */
  onRequestStart?: (parentIds: (TreeViewItemId | null)[]) => void;
  onRequestEnd?: (
    parentIds: (TreeViewItemId | null)[],
    result: Map<TreeViewItemId | null, R[]>,
  ) => void;
  onRequestError?: (
    parentIds: (TreeViewItemId | null)[],
    error: unknown,
  ) => void;
}

export interface UseFlatSearchTreeViewResult<R extends {}> {
  /**
   * Root items for RichTreeView
   */
  items: R[];

  /**
   * DataSource for lazy loading
   */
  dataSource: ReturnType<typeof createFlatSearchDataSource<R>>;

  /**
   * Expanded items (controlled)
   */
  expandedItems: TreeViewItemId[];

  /**
   * Handler for expanded items change
   */
  onExpandedItemsChange: (
    _event: React.SyntheticEvent | null,
    ids: TreeViewItemId[],
  ) => void;

  /**
   * Loading state
   */
  loading: boolean;

  /**
   * Whether lazy loading is enabled
   */
  useLazyLoading: boolean;
}

/**
 * Hook for using RichTreeView with flat search API
 * Handles state restoration, initial data loading, and lazy loading
 */
export function useFlatSearchTreeView<R extends {}, Raw = R>(
  config: UseFlatSearchTreeViewConfig<R, Raw>,
): UseFlatSearchTreeViewResult<R> {
  const {
    fetchItems,
    transformItem,
    getChildrenCount,
    getItemId,
    rootItem,
    restoreStateKey,
    filterExpandedItems,
    getAdditionalParentIds,
    debounceDelay,
    onRequestStart,
    onRequestEnd,
    onRequestError,
  } = config;

  const [allExpandedItems, setAllExpandedItems] = useLocalStorage<
    TreeViewItemId[]
  >(restoreStateKey || "richTreeView:expanded", []);

  const expandedItems = useMemo(() => {
    if (filterExpandedItems) {
      return allExpandedItems.filter(filterExpandedItems);
    }
    return allExpandedItems;
  }, [allExpandedItems, filterExpandedItems]);

  const [items, setItems] = useState<R[]>([rootItem]);
  const [loading, setLoading] = useState(true);
  const [useLazyLoading, setUseLazyLoading] = useState(false);

  const initialLoadDoneRef = useRef(false);
  const lastExpandedItemsRef = useRef<string>("");
  const isLoadingRef = useRef(false);

  const fetchItemsTransformed = useCallback(
    async (
      parentIds: (TreeViewItemId | null)[],
    ): Promise<Map<TreeViewItemId | null, R[]>> => {
      const rawResult = await fetchItems(parentIds);
      if (!transformItem) {
        return rawResult as unknown as Map<TreeViewItemId | null, R[]>;
      }
      const transformed = new Map<TreeViewItemId | null, R[]>();
      rawResult.forEach((rawItems, parentId) => {
        transformed.set(
          parentId,
          rawItems.map((rawItem) => transformItem(rawItem, parentId)),
        );
      });
      return transformed;
    },
    [fetchItems, transformItem],
  );

  const dataSource = useMemo(
    () =>
      createFlatSearchDataSource<R>({
        fetchItems: fetchItemsTransformed,
        getChildrenCount,
        getItemId,
        rootItem,
        getAdditionalParentIds,
        debounceDelay,
        onRequestStart,
        onRequestEnd,
        onRequestError,
      }),
    [
      fetchItemsTransformed,
      getChildrenCount,
      getItemId,
      rootItem,
      getAdditionalParentIds,
      debounceDelay,
      onRequestStart,
      onRequestEnd,
      onRequestError,
    ],
  );

  const expandedItemsKey = useMemo(
    () => JSON.stringify([...expandedItems].sort()),
    [expandedItems],
  );

  useEffect(() => {
    const expandedItemsChanged =
      expandedItemsKey !== lastExpandedItemsRef.current;

    if (initialLoadDoneRef.current && !expandedItemsChanged) {
      return;
    }

    if (isLoadingRef.current) {
      return;
    }

    const loadInitialData = async () => {
      isLoadingRef.current = true;
      setLoading(true);
      try {
        let rootItems: R[] = [];
        const cachedRootItems = dataSource.cache.get(null);
        if (cachedRootItems && cachedRootItems.length > 0) {
          rootItems = cachedRootItems;
        } else {
          const rootData = await fetchItemsTransformed([null]);
          rootItems = rootData.get(null) || [];
        }

        if (rootItems.length > 0) {
          dataSource.cache.set(null, rootItems);
        }

        const rootItemWithCount = {
          ...rootItem,
          childrenCount: getChildrenCount(rootItem) || rootItems.length,
        } as R;

        if (expandedItems.length === 0) {
          setItems([rootItemWithCount]);
          setLoading(false);
          setUseLazyLoading(true);
          initialLoadDoneRef.current = true;
          lastExpandedItemsRef.current = expandedItemsKey;
          isLoadingRef.current = false;
          return;
        }

        const parentIdsToFetch: (TreeViewItemId | null)[] = [
          null,
          ...expandedItems.filter(
            (itemId: TreeViewItemId) => itemId !== getItemId(rootItem),
          ),
        ];
        const allData = await fetchItemsTransformed(parentIdsToFetch);

        allData.forEach((items, parentId) => {
          dataSource.cache.set(parentId, items);
        });

        const rootChildrenTree = allData.get(null) || rootItems;

        const tree = [
          {
            ...rootItemWithCount,
            children: rootChildrenTree,
          } as R,
        ];
        setItems(tree);

        setUseLazyLoading(true);
        initialLoadDoneRef.current = true;
        lastExpandedItemsRef.current = expandedItemsKey;
      } catch (error) {
        console.error("Failed to load initial tree data", error);
        setItems([rootItem]);
        setUseLazyLoading(true);
        initialLoadDoneRef.current = true;
      } finally {
        isLoadingRef.current = false;
        setLoading(false);
      }
    };

    void loadInitialData();
  }, [
    expandedItemsKey,
    rootItem,
    getItemId,
    getChildrenCount,
    fetchItemsTransformed,
    dataSource,
    expandedItems,
  ]);

  const onExpandedItemsChange = useCallback(
    (_event: React.SyntheticEvent | null, ids: TreeViewItemId[]) => {
      const currentExpandedString = JSON.stringify([...expandedItems].sort());
      const newExpandedString = JSON.stringify([...ids].sort());
      if (currentExpandedString !== newExpandedString) {
        if (filterExpandedItems) {
          setAllExpandedItems((prev: TreeViewItemId[]) => {
            const otherItems = prev.filter(
              (itemId: TreeViewItemId) => !filterExpandedItems(itemId),
            );
            return [...otherItems, ...ids];
          });
        } else {
          setAllExpandedItems(ids);
        }
      }
    },
    [expandedItems, setAllExpandedItems, filterExpandedItems],
  );

  return {
    items,
    dataSource,
    expandedItems,
    onExpandedItemsChange,
    loading,
    useLazyLoading,
  };
}
