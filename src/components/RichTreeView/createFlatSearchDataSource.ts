import type { TreeViewItemId } from "@mui/x-tree-view/models";
import type { DataSource } from "@mui/x-tree-view/internals/plugins/useTreeViewLazyLoading/useTreeViewLazyLoading.types";

/**
 * Configuration for flat search data source
 */
type FetchResult<R> = Map<TreeViewItemId | null, R[]> | Record<string, R[]>;

type FlatSearchDataSourceCache<R> = {
  get: (parentId: TreeViewItemId | null) => R[] | undefined;
  set: (parentId: TreeViewItemId | null, items: R[]) => void;
  has: (parentId: TreeViewItemId | null) => boolean;
  delete: (parentId: TreeViewItemId | null) => void;
  clear: () => void;
};

/**
 * Configuration for flat search data source
 */
export interface FlatSearchDataSourceConfig<R extends {}> {
  /**
   * Function to fetch items for given parent IDs
   * @param parentIds Array of parent IDs (null for root)
   * @returns Promise resolving to a map of parentId -> items[]
   */
  fetchItems: (parentIds: (TreeViewItemId | null)[]) => Promise<FetchResult<R>>;

  /**
   * Function to extract children count from item
   * @param item The item
   * @returns Number of children
   */
  getChildrenCount: (item: R) => number;

  /**
   * Function to extract item ID from item
   * @param item The item
   * @returns Item ID
   */
  getItemId: (item: R) => TreeViewItemId;

  /**
   * Root node item (always visible)
   */
  rootItem: R;

  /**
   * Optional: Additional parent IDs to include in requests
   * Useful for prefetching siblings or related items
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
   * Optional: Items already fetched (used for state restoration)
   * Keys are parent IDs (null for root), values are children arrays
   */
  prefill?: Record<string, R[]>;

  /**
   * Optional callbacks for observability
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
  debugLog?: (...args: any[]) => void;
}

/**
 * Creates a data source adapter for flat search API
 * that batches requests and caches results
 */
export function createFlatSearchDataSource<R extends {}>({
  fetchItems,
  getChildrenCount,
  getItemId: _getItemId, // Not used internally but required for type consistency
  rootItem: _rootItem, // Not used internally but kept for API consistency
  getAdditionalParentIds,
  debounceDelay = 50,
  prefill,
  onRequestStart,
  onRequestEnd,
  onRequestError,
  debugLog,
}: FlatSearchDataSourceConfig<R>): DataSource<R> & {
  cache: FlatSearchDataSourceCache<R>;
  refresh: (parentId?: TreeViewItemId | null) => void;
  debug: (...args: any[]) => void;
} {
  const log =
    debugLog ||
    ((...args: any[]) => {
      if (process.env.NODE_ENV !== "production") {
        console.log(...args);
      }
    });
  // Cache for fetched items
  const itemsCache = new Map<TreeViewItemId | null, R[]>();
  const emptyCache = new Set<TreeViewItemId | null>();

  const cache: FlatSearchDataSourceCache<R> = {
    get: (parentId) => itemsCache.get(parentId ?? null),
    set: (parentId, items) => {
      const key = parentId ?? null;
      if (items.length > 0) {
        itemsCache.set(key, items);
        emptyCache.delete(key);
      } else {
        emptyCache.add(key);
        itemsCache.delete(key);
      }
    },
    has: (parentId) => itemsCache.has(parentId ?? null),
    delete: (parentId) => {
      const key = parentId ?? null;
      itemsCache.delete(key);
      emptyCache.delete(key);
    },
    clear: () => {
      itemsCache.clear();
      emptyCache.clear();
    },
  };

  if (prefill) {
    Object.entries(prefill).forEach(([key, value]) => {
      cache.set(key === "null" ? null : key, value);
    });
  }
  // Pending requests with their resolvers
  const pendingRequests = new Map<
    TreeViewItemId | null,
    {
      promise: Promise<R[]>;
      resolve: (value: R[]) => void;
      reject: (reason?: unknown) => void;
    }
  >();

  // Request queue for batching
  let requestQueue: Set<TreeViewItemId | null> = new Set();
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  const processQueue = async (): Promise<void> => {
    if (requestQueue.size === 0) {
      return;
    }

    const parentIds = Array.from(requestQueue);
    log("[FlatSearchDataSource] queue", parentIds);
    requestQueue = new Set();

    // Add additional parent IDs if needed
    const allParentIds = new Set<TreeViewItemId | null>(parentIds);
    if (getAdditionalParentIds) {
      parentIds.forEach((id) => {
        getAdditionalParentIds(id).forEach((additionalId) => {
          allParentIds.add(additionalId);
        });
      });
    }

    const idsToFetch = Array.from(allParentIds).filter(
      (id) => !itemsCache.has(id) && !emptyCache.has(id),
    );

    log("[FlatSearchDataSource] idsToFetch:", idsToFetch);

    if (idsToFetch.length === 0) {
      // All items are cached, resolve pending promises
      parentIds.forEach((id) => {
        const cached = itemsCache.get(id) ?? [];
        const pending = pendingRequests.get(id);
        if (pending) {
          pending.resolve(cached);
          pendingRequests.delete(id);
        }
      });
      return;
    }

    try {
      onRequestStart?.(idsToFetch);
      const result = await fetchItems(idsToFetch);

      // Convert result to Map if it's a Record
      const resultMap =
        result instanceof Map
          ? result
          : new Map(
              Object.entries(result).map(([k, v]) => [
                k === "null" ? null : k,
                v,
              ]),
            );

      log("[FlatSearchDataSource] result:", resultMap.size);
      onRequestEnd?.(idsToFetch, resultMap);

      // Update cache
      idsToFetch.forEach((id) => {
        const items = resultMap.get(id) ?? [];
        if (items.length > 0) {
          itemsCache.set(id, items);
        } else {
          emptyCache.add(id);
        }
      });

      // Resolve all pending promises
      // Note: We resolve for all parentIds (requested), not just idsToFetch
      // because some might have been cached and we still need to resolve their promises
      parentIds.forEach((id) => {
        // First try to get from result (if it was fetched in this batch)
        // Then try cache (if it was already cached before)
        // Finally return empty array (if it was fetched but returned empty)
        let items: R[];
        if (idsToFetch.includes(id)) {
          // This ID was fetched in this batch, get from result
          items = resultMap.get(id) ?? [];
        } else {
          // This ID was not fetched (was cached), get from cache
          items = itemsCache.get(id) ?? [];
        }

        const pending = pendingRequests.get(id);
        if (pending) {
          pending.resolve(items);
          pendingRequests.delete(id);
        }
      });
    } catch (error) {
      onRequestError?.(Array.from(parentIds), error);
      // Reject all pending promises
      parentIds.forEach((id) => {
        const pending = pendingRequests.get(id);
        if (pending) {
          pending.reject(error);
          pendingRequests.delete(id);
        }
      });
    }
  };

  const queueRequest = (parentId: TreeViewItemId | null): Promise<R[]> => {
    // Check cache first
    if (itemsCache.has(parentId)) {
      const cached = itemsCache.get(parentId)!;
      return Promise.resolve(cached);
    }

    if (emptyCache.has(parentId)) {
      return Promise.resolve([]);
    }

    // Check if already pending
    const existing = pendingRequests.get(parentId);
    if (existing) {
      return existing.promise;
    }

    // Create new promise with resolvers
    let resolve!: (value: R[]) => void;
    let reject!: (reason?: unknown) => void;
    const promise = new Promise<R[]>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    pendingRequests.set(parentId, { promise, resolve, reject });
    requestQueue.add(parentId);

    // Debounce and process queue
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      void processQueue();
    }, debounceDelay);

    return promise;
  };

  return {
    getChildrenCount,
    getTreeItems: async (parentId?: TreeViewItemId): Promise<R[]> => {
      // Root level - return children of root (items with parentId: null)
      // Note: rootItem itself is already in items prop, we need its children
      if (parentId === undefined || parentId === null || parentId === "root") {
        const result = await queueRequest(null);
        return result;
      }

      const result = await queueRequest(parentId);
      return result;
    },
    cache,
    refresh: (parentId?: TreeViewItemId | null) => {
      if (parentId === undefined) {
        cache.clear();
      } else {
        cache.delete(parentId);
      }
    },
    debug: log,
  };
}

/**
 * Helper to create prefetch function for flat search
 */
export function createFlatSearchPrefetch<R extends {}>({
  fetchItems,
  dataSource,
}: {
  fetchItems: (parentIds: (TreeViewItemId | null)[]) => Promise<FetchResult<R>>;
  dataSource?: ReturnType<typeof createFlatSearchDataSource<R>>;
}) {
  return async (
    itemIds: TreeViewItemId[],
  ): Promise<Record<TreeViewItemId, R[]>> => {
    // Always include null for root level children if we have any expanded items
    const parentIdsToFetch = new Set<TreeViewItemId | null>(
      itemIds.length > 0 ? [null, ...itemIds] : itemIds,
    );

    const result = await fetchItems(Array.from(parentIdsToFetch));
    const mapped: Record<TreeViewItemId, R[]> = {};

    // Convert result to Map if it's a Record
    const resultMap =
      result instanceof Map
        ? result
        : new Map(
            Object.entries(result).map(([k, v]) => [
              k === "null" ? null : k,
              v,
            ]),
          );

    // Update cache in dataSource if available
    if (dataSource?.cache) {
      parentIdsToFetch.forEach((id) => {
        const items = resultMap.get(id) ?? [];
        dataSource.cache.set(id, items);
      });
    }

    // Map results for prefetch (only for requested itemIds, not null)
    itemIds.forEach((id) => {
      mapped[id] = resultMap.get(id) ?? [];
    });

    return mapped;
  };
}
