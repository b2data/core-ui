import React, { MouseEvent, useMemo, useState, useCallback } from "react";
import { SxProps, Theme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDroppable } from "@dnd-kit/core";

import { ListSubheader, ListSubheaderProps } from "../ListSubheader";
import { IconButton } from "../IconButton";
import {
  SectionTitleAction,
  SectionTitleActionProps,
} from "../SectionTitleAction";
import { Box } from "../Box";
import { useTheme, alpha } from "../../theming";
import { TreeViewItemId } from "./index";

export interface TreeViewHeaderProps
  extends Omit<ListSubheaderProps, "children" | "sx" | "onClick" | "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  selected?: boolean;
  dropId?: string | number;
  enableExternalDrops?: boolean;
  canAcceptExternalDrop?: (type: string, data: unknown[]) => boolean;
  onExternalDrop?: (params: { type: string; data: unknown[] }) => void;
  enableTreeItemDrops?: boolean;
  onTreeItemDrop?: (itemId: TreeViewItemId) => void;
  collapseButton?: {
    isExpanded: boolean;
    onToggle: (e: MouseEvent) => void;
  };
  action?: SectionTitleActionProps;
  onClick?: (e: MouseEvent) => void;
  sx?: SxProps<Theme>;
}

export const TreeViewHeader = React.forwardRef<
  HTMLLIElement,
  TreeViewHeaderProps
>(
  (
    {
      icon,
      title,
      selected,
      dropId,
      enableExternalDrops,
      canAcceptExternalDrop,
      onExternalDrop,
      enableTreeItemDrops,
      onTreeItemDrop,
      collapseButton,
      action,
      onClick,
      sx,
      ...listSubheaderProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const [isTreeItemDragging, setIsTreeItemDragging] = useState(false);

    const droppableId =
      dropId !== undefined ? `tree-header-${dropId}` : undefined;

    const {
      setNodeRef: setDroppableRef,
      isOver,
      active,
    } = useDroppable({
      id: droppableId || "tree-header-default",
      disabled: !enableExternalDrops || !droppableId,
      data: {
        headerId: dropId,
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
              Array.isArray(externalDropData)
                ? externalDropData
                : externalDropData
                  ? [externalDropData]
                  : [],
            )
          : true),
      [
        enableExternalDrops,
        externalDropType,
        externalDropData,
        canAcceptExternalDrop,
      ],
    );

    const combinedRef = React.useCallback(
      (node: HTMLLIElement | null) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            ref.current = node;
          }
        }
        if (enableExternalDrops && droppableId) {
          setDroppableRef(node);
        }
      },
      [ref, enableExternalDrops, droppableId, setDroppableRef],
    );

    const handleDragOver = useCallback(
      (e: React.DragEvent) => {
        if (!enableTreeItemDrops) return;

        const types = Array.from(e.dataTransfer.types);
        const hasTextPlain = types.includes("text/plain");

        if (hasTextPlain) {
          e.preventDefault();
          e.stopPropagation();
          e.dataTransfer.dropEffect = "move";
          if (!isTreeItemDragging) {
            setIsTreeItemDragging(true);
          }
        }
      },
      [enableTreeItemDrops, isTreeItemDragging],
    );

    const handleDragEnter = useCallback(
      (e: React.DragEvent) => {
        if (!enableTreeItemDrops) return;

        const types = Array.from(e.dataTransfer.types);
        const hasTextPlain = types.includes("text/plain");

        if (hasTextPlain) {
          e.preventDefault();
          e.stopPropagation();
          setIsTreeItemDragging(true);
        }
      },
      [enableTreeItemDrops],
    );

    const handleDragLeave = useCallback(
      (e: React.DragEvent) => {
        if (!enableTreeItemDrops) return;

        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
          setIsTreeItemDragging(false);
        }
      },
      [enableTreeItemDrops],
    );

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        if (!enableTreeItemDrops || !onTreeItemDrop) return;

        const draggedItemId = e.dataTransfer.getData("text/plain");
        if (draggedItemId) {
          e.preventDefault();
          e.stopPropagation();
          onTreeItemDrop(draggedItemId);
          setIsTreeItemDragging(false);
        }
      },
      [enableTreeItemDrops, onTreeItemDrop],
    );

    const backgroundColor = useMemo(() => {
      if (selected) {
        return alpha(theme.palette.primary.main, 0.08);
      }
      if (isOver && canAcceptExternal) {
        return alpha(theme.palette.secondary.main, 0.12);
      }
      if (isTreeItemDragging && enableTreeItemDrops) {
        return alpha(theme.palette.primary.main, 0.12);
      }
      return "transparent";
    }, [
      selected,
      isOver,
      canAcceptExternal,
      isTreeItemDragging,
      enableTreeItemDrops,
      theme,
    ]);

    const hoverBackgroundColor = useMemo(() => {
      if (selected) {
        return alpha(theme.palette.primary.main, 0.08);
      }
      if (isOver && canAcceptExternal) {
        return alpha(theme.palette.secondary.main, 0.12);
      }
      if (isTreeItemDragging && enableTreeItemDrops) {
        return alpha(theme.palette.primary.main, 0.12);
      }
      return theme.palette.action.hover;
    }, [
      selected,
      isOver,
      canAcceptExternal,
      isTreeItemDragging,
      enableTreeItemDrops,
      theme,
    ]);

    return (
      <ListSubheader
        ref={combinedRef}
        data-tree-header-id={dropId}
        {...listSubheaderProps}
        onClick={onClick}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={[
          ({ typography }) => ({
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: onClick ? "pointer" : "default",
            minHeight: 36,
            ...typography.h6,
            backgroundColor,
            opacity: isOver && !canAcceptExternal ? 0.4 : 1,
            color:
              isOver && !canAcceptExternal
                ? theme.palette.action.disabled
                : "inherit",
            "&:hover": {
              backgroundColor: hoverBackgroundColor,
            },
          }),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        {collapseButton && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              collapseButton.onToggle(e);
            }}
          >
            <ExpandMoreIcon
              sx={{
                transform: `rotate(${collapseButton.isExpanded ? 0 : -90}deg)`,
                transition: "0.2s ease-in-out",
                fontSize: 18,
                color: theme.palette.action.active,
              }}
            />
          </IconButton>
        )}
        {icon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.action.active,
              "& svg": {
                color: theme.palette.action.active,
              },
            }}
          >
            {icon}
          </Box>
        )}
        <Box>{title}</Box>
        {action && (
          <Box
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            sx={{ ml: "auto" }}
          >
            <SectionTitleAction {...action} />
          </Box>
        )}
      </ListSubheader>
    );
  },
);

TreeViewHeader.displayName = "TreeViewHeader";
