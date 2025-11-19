import * as React from "react";
import Box from "@mui/material/Box";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import {
  useTreeItem,
  UseTreeItemParameters,
} from "@mui/x-tree-view/useTreeItem";
import {
  TreeItemContent,
  TreeItemIconContainer,
  TreeItemGroupTransition,
  TreeItemLabel,
  TreeItemRoot,
  TreeItemCheckbox,
} from "@mui/x-tree-view/TreeItem";
import { TreeItemIcon } from "@mui/x-tree-view/TreeItemIcon";
import { TreeItemProvider } from "@mui/x-tree-view/TreeItemProvider";
import { TreeItemDragAndDropOverlay } from "@mui/x-tree-view/TreeItemDragAndDropOverlay";
import { useTreeViewContext } from "@mui/x-tree-view/internals/TreeViewProvider";
import { useStore } from "@mui/x-internals/store";
import {
  itemsSelectors,
  UseTreeViewItemsSignature,
} from "@mui/x-tree-view/internals/plugins/useTreeViewItems";
import {
  itemsReorderingSelectors,
  UseTreeViewItemsReorderingSignature,
} from "@mui/x-tree-view-pro/internals/plugins/useTreeViewItemsReordering";
import { TreeItemActionsMenu } from "./TreeItemActionsMenu";
import { MenuItemProps } from "../MenuItem";
import { useTheme } from "@mui/material/styles";
import useForkRef from "@mui/utils/useForkRef";

const ICON_WIDTH = 16;
const ROW_MIN_HEIGHT = 30;

interface CustomTreeItemProps<R extends {} = any>
  extends Omit<UseTreeItemParameters, "rootRef">,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {
  getItemIcon?: (item: R, itemId: string) => React.ElementType | undefined;
  getItemActions?: (item: R, itemId: string) => MenuItemProps[];
  itemsReordering?: boolean;
}

export const CustomTreeItem = React.forwardRef(function CustomTreeItem<
  R extends {} = any,
>(props: CustomTreeItemProps<R>, ref: React.Ref<HTMLLIElement>) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    getItemIcon,
    getItemActions,
    itemsReordering,
    ...other
  } = props;

  const { store } =
    useTreeViewContext<
      [UseTreeViewItemsSignature, UseTreeViewItemsReorderingSignature]
    >();
  const itemModel = useStore(store, itemsSelectors.itemModel, itemId);
  const canItemBeReordered = useStore(
    store,
    itemsReorderingSelectors.canItemBeReordered,
    itemId,
  );

  const actions = React.useMemo(() => {
    if (!getItemActions || !itemModel) {
      return [];
    }
    try {
      const result = getItemActions(itemModel as unknown as R, itemId);
      return result || [];
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error getting item actions:", error);
      }
      return [];
    }
  }, [getItemActions, itemModel, itemId]);

  const itemIcon = React.useMemo(() => {
    if (!getItemIcon || !itemModel) {
      return undefined;
    }
    try {
      return getItemIcon(itemModel as unknown as R, itemId);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error getting item icon:", error);
      }
      return undefined;
    }
  }, [getItemIcon, itemModel, itemId]);

  const {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    getDragAndDropOverlayProps,
    getLoadingContainerProps,
    status,
  } = useTreeItem({ id, itemId, children, label, disabled, rootRef: ref });

  const { draggable, onDragStart, ...otherRootProps } = getRootProps(other);

  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const handleDragStart = (event: React.DragEvent) => {
    if (!onDragStart) {
      return;
    }

    onDragStart(event);
    const contentElement = contentRef.current;
    if (contentElement) {
      event.dataTransfer.setDragImage(contentElement, 0, 0);
    }
  };

  const selectedBackgroundColor = theme.palette.primary.light
    ? `${theme.palette.primary.light}1A` // ~10% opacity
    : "#eff5ff";

  const contentSx = React.useMemo(
    () => ({
      minHeight: ROW_MIN_HEIGHT,
      borderRadius: 0,
      "&.Mui-selected": {
        backgroundColor: selectedBackgroundColor,
        "&:hover": {
          backgroundColor: selectedBackgroundColor,
        },
      },
      "&[data-selected]": {
        backgroundColor: `${selectedBackgroundColor} !important`,
        "&:hover": {
          backgroundColor: `${selectedBackgroundColor} !important`,
        },
      },
      "&[data-selected][data-focused]": {
        backgroundColor: `${selectedBackgroundColor} !important`,
        "&:hover": {
          backgroundColor: `${selectedBackgroundColor} !important`,
        },
      },
      "&[data-actions-open='true']:not(.Mui-selected)": {
        backgroundColor: (theme.vars || theme).palette.action.hover,
      },
      "& .MuiTreeItem-actionsMenu": {
        opacity: 0,
      },
      "&:hover .MuiTreeItem-actionsMenu": {
        opacity: 1,
      },
      ...(itemsReordering && itemIcon
        ? {
            "& .MuiTreeItem-draggable": {
              display: "none",
            },
            "& .MuiTreeItem-icon": {
              display: "flex",
            },
            "&:hover .MuiTreeItem-draggable": {
              display: "flex",
            },
            "&:hover .MuiTreeItem-icon": {
              display: "none",
            },
          }
        : {}),
    }),
    [selectedBackgroundColor, itemsReordering, itemIcon, theme],
  );

  const iconColor = (theme.vars || theme).palette.text.secondary;
  const iconContainerSx = React.useMemo(
    () => ({
      "& svg:not(.MuiCircularProgress-svg)": {
        color: iconColor,
      },
      width: ICON_WIDTH,
      minWidth: ICON_WIDTH,
      "&:empty": {
        visibility: "hidden",
      },
      "&:not(:has(svg)):not(:has(.MuiCircularProgress-root))": {
        visibility: "hidden",
      },
    }),
    [iconColor],
  );

  const contentPropsWithRef = getContentProps({ sx: contentSx });
  const combinedContentRef = useForkRef(contentRef, contentPropsWithRef.ref);
  const contentProps = { ...contentPropsWithRef, ref: combinedContentRef };
  const iconContainerProps = getIconContainerProps({ sx: iconContainerSx });
  const loadingContainerProps = getLoadingContainerProps();

  return (
    <TreeItemProvider {...getContextProviderProps()}>
      <TreeItemRoot {...otherRootProps}>
        <TreeItemContent {...contentProps}>
          <TreeItemIconContainer {...iconContainerProps}>
            {status.loading ? (
              <CircularProgress {...loadingContainerProps} />
            ) : (
              <TreeItemIcon status={status} />
            )}
          </TreeItemIconContainer>
          {itemIcon && (
            <Box
              className="MuiTreeItem-customIcon MuiTreeItem-icon"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: ICON_WIDTH,
                minWidth: ICON_WIDTH,
                marginRight: 0.5,
                flexShrink: 0,
                color: iconColor,
              }}
            >
              {React.createElement(itemIcon, { fontSize: "small" })}
            </Box>
          )}
          {itemsReordering && canItemBeReordered && (
            <Box
              className="MuiTreeItem-dragIcon MuiTreeItem-draggable"
              sx={{
                display: itemIcon ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                width: ICON_WIDTH,
                minWidth: ICON_WIDTH,
                marginRight: 0.5,
                flexShrink: 0,
                color: iconColor,
                cursor: "grab",
              }}
              draggable={draggable}
              onDragStart={handleDragStart}
            >
              <DragIndicatorOutlinedIcon fontSize="small" />
            </Box>
          )}
          <TreeItemCheckbox {...getCheckboxProps()} />
          <TreeItemLabel {...getLabelProps()} />
          {actions.length > 0 && <TreeItemActionsMenu actions={actions} />}
          <TreeItemDragAndDropOverlay {...getDragAndDropOverlayProps()} />
        </TreeItemContent>
        {children && <TreeItemGroupTransition {...getGroupTransitionProps()} />}
      </TreeItemRoot>
    </TreeItemProvider>
  );
});
