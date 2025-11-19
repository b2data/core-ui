import React from "react";
import { useTheme } from "@mui/material/styles";
import { forwardRef } from "@mui/x-internals/forwardRef";
import { useTreeViewApiRef } from "@mui/x-tree-view/hooks";
import type { TreeViewItemId } from "@mui/x-tree-view/models";
import type { TreeViewPublicAPI } from "@mui/x-tree-view/internals";

export * from "@mui/x-tree-view/SimpleTreeView";

export * from "@mui/x-tree-view/TreeItem";
export * from "@mui/x-tree-view/useTreeItem";
export * from "@mui/x-tree-view/TreeItemIcon";
export * from "@mui/x-tree-view/TreeItemProvider";
export * from "@mui/x-tree-view/TreeItemDragAndDropOverlay";
export * from "@mui/x-tree-view/TreeItemLabelInput";

export { unstable_resetCleanupTracking } from "@mui/x-tree-view/internals";

export * from "@mui/x-tree-view/models";
export * from "@mui/x-tree-view/icons";
export * from "@mui/x-tree-view/hooks";

export { useTreeViewApiRef } from "@mui/x-tree-view/hooks";

import { RichTreeViewPro } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro";
import type { RichTreeViewProProps } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro.types";
import type { RichTreeViewProPluginSignatures } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro.plugins";

export * from "../../mui-x/tree-view-pro/RichTreeViewPro";

import { CustomTreeItem } from "./CustomItem";

type Deferred<T> = {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;
};

const createDeferred = <T,>(): Deferred<T> => {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
};

const RichTreeViewRaw = forwardRef(function RichTreeView<
  R extends {},
  Multiple extends boolean | undefined = undefined,
>(inProps: RichTreeViewProps<R, Multiple>, ref: React.Ref<HTMLUListElement>) {
  const {
    sx,
    slots,
    slotProps,
    getItemActions,
    getItemIcon,
    itemsReordering,
    expansionTrigger,
    dataSource,
    defaultExpandedItems,
    prefetchExpandedItems,
    apiRef: externalApiRef,
    ...otherProps
  } = inProps;

  type ApiRef = React.RefObject<
    Partial<TreeViewPublicAPI<RichTreeViewProPluginSignatures>> | undefined
  >;
  const internalApiRef =
    useTreeViewApiRef<RichTreeViewProPluginSignatures>() as ApiRef;
  const apiRef = (externalApiRef ?? internalApiRef) as ApiRef;
  const prefetchedChildrenRef = React.useRef<Record<TreeViewItemId, R[]>>({});
  const prefetchedIdsRef = React.useRef(new Set<TreeViewItemId>());
  const pendingPrefetchIdsRef = React.useRef(new Set<TreeViewItemId>());
  const deferredPrefetchRef = React.useRef<
    Record<TreeViewItemId, Deferred<R[]>>
  >({});

  const theme = useTheme();
  const iconColor = (theme.vars || theme).palette.text.secondary;
  const selectedBackgroundColor = theme.palette.primary.light
    ? `${theme.palette.primary.light}1A`
    : "#eff5ff";

  const treeViewSx = React.useMemo(
    () => ({
      "& .MuiTreeItem-content": {
        minHeight: 30,
        borderRadius: 0,
      },
      "& .MuiTreeItem-content.Mui-selected": {
        backgroundColor: selectedBackgroundColor,
        "&:hover": {
          backgroundColor: selectedBackgroundColor,
        },
      },
      "& .MuiTreeItem-content[data-selected]": {
        backgroundColor: `${selectedBackgroundColor} !important`,
        "&:hover": {
          backgroundColor: `${selectedBackgroundColor} !important`,
        },
      },
      "& .MuiTreeItem-content[data-selected][data-focused]": {
        backgroundColor: `${selectedBackgroundColor} !important`,
        "&:hover": {
          backgroundColor: `${selectedBackgroundColor} !important`,
        },
      },
      "& .MuiTreeItem-content[data-actions-open='true']:not(.Mui-selected)": {
        backgroundColor: (theme.vars || theme).palette.action.hover,
      },
      "& .MuiTreeItem-iconContainer svg:not(.MuiCircularProgress-svg)": {
        color: iconColor,
      },
      "& .MuiTreeItem-customIcon": {
        color: iconColor,
      },
      ...sx,
    }),
    [selectedBackgroundColor, iconColor, sx, theme],
  );

  const triggerChildrenUpdate = React.useCallback(
    (itemId: TreeViewItemId) => {
      if (!apiRef?.current?.updateItemChildren) {
        return undefined;
      }

      let timeoutId: ReturnType<typeof setTimeout> | undefined;
      let cancelled = false;

      const attemptUpdate = () => {
        if (cancelled) {
          return;
        }

        const itemExists = apiRef.current?.getItem
          ? !!apiRef.current.getItem(itemId)
          : true;

        if (itemExists) {
          void apiRef.current?.updateItemChildren?.(itemId);
          return;
        }

        timeoutId = setTimeout(attemptUpdate, 50);
      };

      attemptUpdate();

      return () => {
        cancelled = true;
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
      };
    },
    [apiRef],
  );

  React.useEffect(() => {
    if (
      !prefetchExpandedItems ||
      !apiRef?.current?.updateItemChildren ||
      !dataSource ||
      !defaultExpandedItems?.length
    ) {
      return;
    }

    const idsToFetch = defaultExpandedItems.filter(
      (id) =>
        !prefetchedIdsRef.current.has(id) &&
        !pendingPrefetchIdsRef.current.has(id),
    );

    if (!idsToFetch.length) {
      return;
    }

    const cancelUpdates: Array<(() => void) | undefined> = [];
    idsToFetch.forEach((id) => {
      pendingPrefetchIdsRef.current.add(id);
      if (!deferredPrefetchRef.current[id]) {
        deferredPrefetchRef.current[id] = createDeferred<R[]>();
      }
      const cancel = triggerChildrenUpdate(id);
      cancelUpdates.push(cancel);
    });

    let isActive = true;

    prefetchExpandedItems(idsToFetch)
      .then((result) => {
        if (!isActive) {
          return;
        }

        idsToFetch.forEach((id) => {
          const items = result?.[id] ?? [];
          prefetchedChildrenRef.current[id] = items;
          prefetchedIdsRef.current.add(id);
          pendingPrefetchIdsRef.current.delete(id);
          deferredPrefetchRef.current[id]?.resolve(items);
          delete deferredPrefetchRef.current[id];
        });
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== "production") {
          console.error("Failed to prefetch expanded items", error);
        }
        idsToFetch.forEach((id) => {
          pendingPrefetchIdsRef.current.delete(id);
          deferredPrefetchRef.current[id]?.reject(error);
          delete deferredPrefetchRef.current[id];
        });
      });

    return () => {
      isActive = false;
      cancelUpdates.forEach((cancel) => cancel?.());
    };
  }, [
    apiRef,
    dataSource,
    defaultExpandedItems,
    prefetchExpandedItems,
    triggerChildrenUpdate,
  ]);

  const wrappedDataSource = React.useMemo(() => {
    if (!dataSource) {
      return dataSource;
    }

    return {
      ...dataSource,
      getTreeItems: async (parentId?: TreeViewItemId) => {
        if (parentId && prefetchedChildrenRef.current[parentId]) {
          const items = prefetchedChildrenRef.current[parentId];
          delete prefetchedChildrenRef.current[parentId];
          return items;
        }

        if (parentId && deferredPrefetchRef.current[parentId]) {
          return deferredPrefetchRef.current[parentId].promise;
        }

        return dataSource.getTreeItems(parentId);
      },
    };
  }, [dataSource]);

  return (
    <RichTreeViewPro
      ref={ref}
      {...otherProps}
      apiRef={apiRef}
      dataSource={wrappedDataSource}
      defaultExpandedItems={defaultExpandedItems}
      itemsReordering={itemsReordering}
      expansionTrigger={expansionTrigger ?? "iconContainer"}
      slots={{ ...slots, item: CustomTreeItem }}
      slotProps={React.useMemo(
        () => ({
          ...slotProps,
          item: {
            ...(slotProps?.item as any),
            getItemIcon,
            getItemActions,
            itemsReordering,
          } as any,
        }),
        [slotProps, getItemIcon, getItemActions, itemsReordering],
      )}
      getItemActions={getItemActions}
      getItemIcon={getItemIcon}
      sx={treeViewSx}
    />
  );
});

interface RichTreeViewComponent {
  <R extends {} = any, Multiple extends boolean | undefined = undefined>(
    props: RichTreeViewProps<R, Multiple> &
      React.RefAttributes<HTMLUListElement>,
  ): React.JSX.Element;
  propTypes?: any;
}

export interface RichTreeViewProps<
  R extends {} = any,
  Multiple extends boolean | undefined = undefined,
> extends RichTreeViewProProps<R, Multiple> {
  prefetchExpandedItems?: (
    itemIds: TreeViewItemId[],
  ) => Promise<Record<TreeViewItemId, R[]>>;
}

export const RichTreeView = React.memo(
  RichTreeViewRaw,
) as RichTreeViewComponent;
