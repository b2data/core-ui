import React, { useRef, useCallback, useMemo, useEffect } from "react";
import { Box } from "../Box";
import { Collapse } from "../Collapse";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import { CircularProgress } from "../CircularProgress";
import { alpha, type Theme } from "../../theming";
import {
  ExpandMoreIcon,
  ChevronRightIcon,
  DragIndicatorIcon,
} from "../../icons";
import { TreeItemActions } from "./TreeItemActions";
import { useDroppable } from "@dnd-kit/core";
import {
  TreeViewItem,
  TreeViewItemId,
  TreeViewAction,
  TreeViewProps,
} from "./index";

const ICON_SIZE = 24;

export interface TreeViewItemComponentProps {
  item: TreeViewItem;
  depth: number;
  isExpanded: boolean;
  hasChildren: boolean;
  isLoadingItem: boolean;
  isSelected: boolean;
  isDragging: boolean;
  isDropTarget: boolean;
  dropPosition: "before" | "after" | "inside" | null;
  isExternalDropTarget: boolean;
  externalDropPosition: "before" | "after" | "inside" | null;
  canDrag: boolean;
  isRowInteractionLocked: boolean;
  canDropInsideValue: boolean;
  actions: TreeViewAction[];
  enableExternalDrops: boolean;
  enableDragAndDrop: boolean;
  canAcceptExternalDrop?: TreeViewProps["canAcceptExternalDrop"];
  getItemLabel: (item: TreeViewItem) => string;
  getItemIcon?: (item: TreeViewItem) => React.ReactNode;
  onItemClick?: (item: TreeViewItem) => void;
  selectedItemId: TreeViewItemId | null;
  onSelectedItemChange?: (itemId: TreeViewItemId | null) => void;
  handleToggleExpand: (itemId: TreeViewItemId) => void;
  handleDragStart: (e: React.DragEvent, item: TreeViewItem) => void;
  handleDragEnd: () => void;
  handleDragOver: (e: React.DragEvent, item: TreeViewItem) => void;
  handleDrop: (e: React.DragEvent) => void;
  draggedItemId: TreeViewItemId | null;
  theme: Theme;
  children?: React.ReactNode;
}

const TreeViewItemComponentInternal: React.FC<TreeViewItemComponentProps> = ({
  item,
  depth,
  isExpanded,
  hasChildren,
  isLoadingItem,
  isSelected,
  isDragging,
  isDropTarget,
  dropPosition,
  isExternalDropTarget,
  externalDropPosition,
  canDrag,
  isRowInteractionLocked,
  canDropInsideValue,
  actions,
  enableExternalDrops,
  enableDragAndDrop,
  canAcceptExternalDrop,
  getItemLabel,
  getItemIcon,
  onItemClick,
  selectedItemId,
  onSelectedItemChange,
  handleToggleExpand,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDrop,
  draggedItemId,
  theme,
  children,
}) => {
  const menuJustClosedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    setNodeRef: setDroppableRef,
    isOver,
    active,
  } = useDroppable({
    id: `tree-item-${item.id}`,
    disabled: !enableExternalDrops,
    data: {
      itemId: item.id,
      item,
    },
  });

  const externalDropType = active?.data?.current?.type;
  const externalDropData = active?.data?.current?.data;
  const canAcceptExternal = useMemo(
    () =>
      enableExternalDrops &&
      externalDropType &&
      (canAcceptExternalDrop
        ? canAcceptExternalDrop(
            externalDropType,
            item,
            Array.isArray(externalDropData)
              ? externalDropData
              : externalDropData
                ? [externalDropData]
                : undefined,
          )
        : true),
    [
      enableExternalDrops,
      externalDropType,
      externalDropData,
      canAcceptExternalDrop,
      item,
    ],
  );

  const hasActions = actions.length > 0;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const dropIndicatorStyles = useMemo(
    () => ({
      position: "absolute" as const,
      left: 0,
      right: 0,
      height: 2,
      zIndex: 1,
    }),
    [],
  );

  const handleRowClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isRowInteractionLocked) return;
      const target = e.target as HTMLElement;
      const isMenuClick =
        target.closest(".MuiMenu-root") ||
        target.closest(".MuiBackdrop-root") ||
        target.closest(".MuiPaper-root") ||
        target.closest(".tree-item-actions") ||
        target.closest('[role="menu"]');
      if (isMenuClick) {
        e.stopPropagation();
        return;
      }
      if (menuJustClosedRef.current) {
        menuJustClosedRef.current = false;
        e.stopPropagation();
        return;
      }
      onItemClick?.(item);
      const newSelectedId = selectedItemId === item.id ? null : item.id;
      onSelectedItemChange?.(newSelectedId);
    },
    [
      isRowInteractionLocked,
      onItemClick,
      item,
      selectedItemId,
      onSelectedItemChange,
    ],
  );

  const handleMenuStateChange = useCallback((isOpen: boolean) => {
    if (!isOpen) {
      menuJustClosedRef.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        menuJustClosedRef.current = false;
        timeoutRef.current = null;
      }, 100);
    }
  }, []);

  const rowSx = useMemo(
    () => ({
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
          : isExternalDropTarget &&
              externalDropPosition === "inside" &&
              canAcceptExternal
            ? alpha(theme.palette.secondary.main, 0.12)
            : isOver && canAcceptExternal
              ? alpha(theme.palette.secondary.main, 0.08)
              : "transparent",
      position: "relative" as const,
      opacity: isDragging
        ? 0.5
        : draggedItemId && !canDropInsideValue
          ? 0.4
          : isOver && !canAcceptExternal
            ? 0.4
            : 1,
      color:
        draggedItemId && !canDropInsideValue
          ? theme.palette.action.disabled
          : isOver && !canAcceptExternal
            ? theme.palette.action.disabled
            : "inherit",
      pointerEvents: isRowInteractionLocked
        ? ("none" as const)
        : ("auto" as const),
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        ...(!externalDropType && {
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
        }),
      },
      pl: depth * 2 + 1,
    }),
    [
      onItemClick,
      isSelected,
      isDropTarget,
      dropPosition,
      isExternalDropTarget,
      externalDropPosition,
      canAcceptExternal,
      isOver,
      isDragging,
      draggedItemId,
      canDropInsideValue,
      theme,
      isRowInteractionLocked,
      canDrag,
      depth,
      externalDropType,
    ],
  );

  const handleDragOverMemoized = useCallback(
    (e: React.DragEvent) => {
      if (!enableExternalDrops || !isOver) {
        handleDragOver(e, item);
      }
    },
    [enableExternalDrops, isOver, handleDragOver, item],
  );

  const handleDropMemoized = useCallback(
    (e: React.DragEvent) => {
      if (!enableExternalDrops || !isOver) {
        handleDrop(e);
      }
    },
    [enableExternalDrops, isOver, handleDrop],
  );

  const handleExpandClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      handleToggleExpand(item.id);
    },
    [handleToggleExpand, item.id],
  );

  const handleDragStartMemoized = useCallback(
    (e: React.DragEvent) => {
      handleDragStart(e, item);
    },
    [handleDragStart, item],
  );

  return (
    <Box sx={{ position: "relative" }}>
      {enableDragAndDrop && isDropTarget && dropPosition === "before" && (
        <Box
          sx={{
            ...dropIndicatorStyles,
            top: -1,
            backgroundColor: theme.palette.primary.main,
          }}
        />
      )}

      <Box
        ref={setDroppableRef}
        onDragOver={handleDragOverMemoized}
        onDrop={handleDropMemoized}
        sx={rowSx}
        onClick={handleRowClick}
      >
        {isLoadingItem ? (
          <Box
            sx={{
              width: ICON_SIZE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress thickness={5} size={16} />
          </Box>
        ) : hasChildren ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: ICON_SIZE,
            }}
          >
            <IconButton
              size="small"
              onClick={handleExpandClick}
              sx={{ p: 0.5 }}
            >
              {isExpanded ? (
                <ExpandMoreIcon fontSize="small" />
              ) : (
                <ChevronRightIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ width: ICON_SIZE }} />
        )}

        {getItemIcon && (
          <Box
            sx={{
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: ICON_SIZE,
              height: ICON_SIZE,
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
            {canDrag && !externalDropType && (
              <Box
                className="drag-indicator"
                draggable={true}
                onDragStart={handleDragStartMemoized}
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

        {hasActions && !externalDropType && (
          <TreeItemActions
            item={item}
            actions={actions}
            onMenuStateChange={handleMenuStateChange}
          />
        )}
      </Box>

      {hasChildren && (
        <Collapse mountOnEnter in={isExpanded && !isLoadingItem && !!children}>
          <Box>{children}</Box>
        </Collapse>
      )}

      {enableDragAndDrop && isDropTarget && dropPosition === "after" && (
        <Box
          sx={{
            ...dropIndicatorStyles,
            bottom: -1,
            backgroundColor: theme.palette.primary.main,
          }}
        />
      )}

      {enableExternalDrops &&
        isExternalDropTarget &&
        externalDropPosition === "after" && (
          <Box
            sx={{
              ...dropIndicatorStyles,
              bottom: -1,
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        )}
    </Box>
  );
};

export const TreeViewItemComponent = React.memo(TreeViewItemComponentInternal);
