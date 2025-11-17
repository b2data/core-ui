"use client";
import * as React from "react";
import { useStore } from "@mui/x-internals/store";
import useSlotProps from "@mui/utils/useSlotProps";
import { SlotComponentProps } from "@mui/utils/types";
import { fastObjectShallowCompare } from "@mui/x-internals/fastObjectShallowCompare";
import { TreeItem, TreeItemProps } from "@mui/x-tree-view/TreeItem";
import { TreeViewItemId } from "@mui/x-tree-view/models";
import {
  itemsSelectors,
  UseTreeViewItemsSignature,
} from "@mui/x-tree-view/internals/plugins/useTreeViewItems";
import { useTreeViewContext } from "@mui/x-tree-view/internals/TreeViewProvider";
import { TreeItemActionsMenu } from "./TreeItemActionsMenu";
import { MenuItemProps } from "../../../../components/MenuItem";
import { TreeItemContent } from "@mui/x-tree-view/TreeItem";

const RichTreeViewItemsContext = React.createContext<
  ((itemId: TreeViewItemId) => React.ReactNode) | null
>(null);

const WrappedTreeItem = React.memo(function WrappedTreeItem({
  itemSlot,
  itemSlotProps,
  itemId,
  getItemActions,
}: WrappedTreeItemProps<any>) {
  const renderItemForRichTreeView = React.useContext(RichTreeViewItemsContext)!;
  const { store } = useTreeViewContext<[UseTreeViewItemsSignature]>();

  const itemMeta = useStore(store, itemsSelectors.itemMeta, itemId);
  const itemModel = useStore(store, itemsSelectors.itemModel, itemId);
  const children = useStore(
    store,
    itemsSelectors.itemOrderedChildrenIds,
    itemId,
  );
  const Item = (itemSlot ??
    TreeItem) as React.JSXElementConstructor<TreeItemProps>;

  // Get actions for this item
  const actions = React.useMemo(() => {
    if (!getItemActions || !itemModel) {
      return [];
    }
    try {
      return getItemActions(itemModel as any, itemId);
    } catch {
      return [];
    }
  }, [getItemActions, itemModel, itemId]);

  // Create enhanced slots and slotProps with custom content slot that includes actions menu
  const enhancedSlots = React.useMemo(() => {
    if (actions.length === 0) {
      return undefined;
    }

    // Create a custom content component that wraps the original and adds actions
    const CustomContent = React.forwardRef<
      HTMLDivElement,
      React.ComponentProps<typeof TreeItemContent>
    >((props, ref) => {
      return (
        <TreeItemContent
          {...props}
          ref={ref}
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover .MuiBox-root": {
              opacity: 1,
            },
            ...props.sx,
          }}
        >
          {props.children}
          <TreeItemActionsMenu actions={actions} />
        </TreeItemContent>
      );
    });
    CustomContent.displayName = "CustomTreeItemContent";

    return {
      content: CustomContent,
    };
  }, [actions]);

  const enhancedItemSlotProps = React.useMemo(() => {
    return itemSlotProps;
  }, [itemSlotProps]);

  const { ownerState, ...itemProps } = useSlotProps({
    elementType: Item,
    externalSlotProps: enhancedItemSlotProps,
    additionalProps: {
      label: itemMeta?.label,
      id: itemMeta?.idAttribute,
      itemId,
      slots: enhancedSlots,
    },
    ownerState: { itemId, label: itemMeta?.label as string },
  });

  return <Item {...itemProps}>{children?.map(renderItemForRichTreeView)}</Item>;
}, fastObjectShallowCompare);

export interface RichTreeViewItemsProProps<R extends {}> {
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: {
    item?: React.JSXElementConstructor<TreeItemProps>;
  };
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: {
    item?: SlotComponentProps<
      typeof TreeItem,
      {},
      { itemId: TreeViewItemId; label: string }
    >;
  };
  /**
   * Function to get actions for each item.
   * @param item The item model
   * @param itemId The item id
   * @returns Array of menu item props
   */
  getItemActions?: (item: R, itemId: string) => MenuItemProps[];
}

export function RichTreeViewItemsPro<R extends {}>(
  props: RichTreeViewItemsProProps<R>,
) {
  const { slots, slotProps, getItemActions } = props;
  const { store } = useTreeViewContext<[UseTreeViewItemsSignature]>();

  const itemSlot = slots?.item as
    | React.JSXElementConstructor<TreeItemProps>
    | undefined;
  const itemSlotProps = slotProps?.item;
  const items = useStore(store, itemsSelectors.itemOrderedChildrenIds, null);

  const renderItem = React.useCallback(
    (itemId: TreeViewItemId) => {
      return (
        <WrappedTreeItem
          itemSlot={itemSlot}
          itemSlotProps={itemSlotProps}
          key={itemId}
          itemId={itemId}
          getItemActions={
            getItemActions as
              | ((item: R, itemId: string) => MenuItemProps[])
              | undefined
          }
        />
      );
    },
    [itemSlot, itemSlotProps, getItemActions],
  );

  return (
    <RichTreeViewItemsContext.Provider value={renderItem}>
      {items.map(renderItem)}
    </RichTreeViewItemsContext.Provider>
  );
}

interface WrappedTreeItemProps<R extends {}> {
  itemSlot: React.JSXElementConstructor<TreeItemProps> | undefined;
  itemSlotProps:
    | SlotComponentProps<
        typeof TreeItem,
        {},
        { itemId: TreeViewItemId; label: string }
      >
    | undefined;
  itemId: TreeViewItemId;
  getItemActions?: (item: R, itemId: string) => MenuItemProps[];
}
