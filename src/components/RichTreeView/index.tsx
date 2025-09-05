import React from "react";
import { forwardRef } from "@mui/x-internals/forwardRef";

// Tree View
export * from "@mui/x-tree-view/SimpleTreeView";

// Tree Item
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

// Import the Pro TreeView and its types
import { RichTreeViewPro } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro";
import type { RichTreeViewProProps } from "../../mui-x/tree-view-pro/RichTreeViewPro/RichTreeViewPro.types";

// The main RichTreeView component, forwarding ref and props to RichTreeViewPro
const RichTreeView = forwardRef(function RichTreeView<
  R extends {} = any,
  Multiple extends boolean | undefined = undefined,
>(props: RichTreeViewProProps<R, Multiple>, ref: React.Ref<HTMLUListElement>) {
  return <RichTreeViewPro ref={ref} {...props} />;
});

interface RichTreeViewComponent {
  <R extends {} = any, Multiple extends boolean | undefined = undefined>(
    props: RichTreeViewProProps<R, Multiple> &
      React.RefAttributes<HTMLUListElement>,
  ): React.JSX.Element;
  propTypes?: any;
}

export type { RichTreeViewProProps as RichTreeViewProps };

export const RichTreeViewExport = React.memo(
  RichTreeView,
) as RichTreeViewComponent;

// For backward compatibility, also export as RichTreeView
export { RichTreeViewExport as RichTreeView };
