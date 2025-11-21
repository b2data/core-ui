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

export * from "@mui/x-tree-view/models";
export * from "@mui/x-tree-view/icons";
export * from "@mui/x-tree-view/hooks";

export { useTreeViewApiRef } from "@mui/x-tree-view/hooks";

import { RichTreeViewPro } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro";
import type { RichTreeViewProProps } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro.types";
import type { RichTreeViewProPluginSignatures } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro.plugins";

export * from "../../mui-x/tree-view-pro/RichTreeViewPro";

import { CustomTreeItem } from "./CustomItem";

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
    apiRef: externalApiRef,
    ...otherProps
  } = inProps;

  type ApiRef = React.RefObject<
    Partial<TreeViewPublicAPI<RichTreeViewProPluginSignatures>> | undefined
  >;
  const internalApiRef =
    useTreeViewApiRef<RichTreeViewProPluginSignatures>() as ApiRef;
  const apiRef = (externalApiRef ?? internalApiRef) as ApiRef;
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

  const wrappedDataSource = React.useMemo(() => {
    if (!dataSource) {
      return dataSource;
    }

    return {
      ...dataSource,
      getTreeItems: async (parentId?: TreeViewItemId) => {
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

export type RichTreeViewProps<
  R extends {} = any,
  Multiple extends boolean | undefined = undefined,
> = RichTreeViewProProps<R, Multiple>;

export const RichTreeView = React.memo(
  RichTreeViewRaw,
) as RichTreeViewComponent;

export {
  createFlatSearchDataSource,
  createFlatSearchPrefetch,
} from "./createFlatSearchDataSource";
export type { FlatSearchDataSourceConfig } from "./createFlatSearchDataSource";
export { useFlatSearchTreeView } from "./useFlatSearchTreeView";
export type {
  UseFlatSearchTreeViewConfig,
  UseFlatSearchTreeViewResult,
} from "./useFlatSearchTreeView";
