import React from "react";
import { useDndMonitor } from "@dnd-kit/core";
import { TreeViewItem, TreeViewItemId, TreeViewProps } from "./index";

export interface ExternalDropMonitorProps {
  onExternalDrop?: TreeViewProps["onExternalDrop"];
  canAcceptExternalDrop?: TreeViewProps["canAcceptExternalDrop"];
  itemsMap: Map<TreeViewItemId, TreeViewItem>;
  setExternalDropTargetId: (id: TreeViewItemId | null) => void;
  setExternalDropPosition: (
    position: "before" | "after" | "inside" | null,
  ) => void;
}

export const ExternalDropMonitor: React.FC<ExternalDropMonitorProps> = ({
  onExternalDrop,
  canAcceptExternalDrop,
  itemsMap,
  setExternalDropTargetId,
  setExternalDropPosition,
}) => {
  useDndMonitor({
    onDragOver: ({ over, active }) => {
      if (!onExternalDrop) return;
      if (!over || !active?.data?.current?.type) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const droppableId = String(over.id);
      if (!droppableId.startsWith("tree-item-")) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const itemId = droppableId.replace("tree-item-", "");
      const targetItem = itemsMap.get(itemId);
      if (!targetItem) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const dropType = active.data.current.type;
      const dropData = active.data.current.data || [];
      const canAccept =
        canAcceptExternalDrop?.(
          dropType,
          targetItem,
          Array.isArray(dropData) ? dropData : [dropData],
        ) ?? true;

      if (canAccept) {
        setExternalDropTargetId(itemId as TreeViewItemId);
        setExternalDropPosition("inside");
      } else {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
      }
    },
    onDragEnd: ({ over, active }) => {
      if (!onExternalDrop) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      if (!over || !active?.data?.current?.type) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const droppableId = String(over.id);
      if (!droppableId.startsWith("tree-item-")) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const itemId = droppableId.replace("tree-item-", "");
      const targetItem = itemsMap.get(itemId);
      if (!targetItem) {
        setExternalDropTargetId(null);
        setExternalDropPosition(null);
        return;
      }

      const dropType = active.data.current.type;
      const dropData = active.data.current.data || [];
      const canAccept =
        canAcceptExternalDrop?.(
          dropType,
          targetItem,
          Array.isArray(dropData) ? dropData : [dropData],
        ) ?? true;

      if (canAccept) {
        const position: "before" | "after" | "inside" = "inside";

        onExternalDrop(
          {
            type: dropType,
            data: Array.isArray(dropData) ? dropData : [dropData],
          },
          targetItem,
          position,
        );
      }

      setExternalDropTargetId(null);
      setExternalDropPosition(null);
    },
    onDragCancel: () => {
      setExternalDropTargetId(null);
      setExternalDropPosition(null);
    },
  });

  return null;
};
