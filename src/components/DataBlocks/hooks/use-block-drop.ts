import { useDrop } from "react-dnd";

import { DataBlockModel } from "../model";

export const useBlockDrop = (
  index: number,
  onMove?: (
    item: DataBlockModel,
    oldIndex: number,
    targetIndex: number,
  ) => void,
) => {
  const [{ isOverBefore, canDropBefore }, dropBeforeRef] = useDrop<
    DataBlockModel & { index: number },
    unknown,
    {
      isOverBefore: boolean;
      canDropBefore: boolean;
    }
  >({
    accept: ["DATA_BLOCK"],
    collect: (monitor) => ({
      isOverBefore:
        !!monitor.isOver({ shallow: true }) &&
        monitor.getItemType() === "DATA_BLOCK",
      canDropBefore:
        monitor.canDrop() &&
        monitor.getItemType() === "DATA_BLOCK" &&
        monitor.getItem().index > index,
    }),
    drop: (item, monitor) => {
      if (
        !monitor.didDrop() &&
        monitor.canDrop() &&
        monitor.getItemType() === "DATA_BLOCK" &&
        item.index !== index
      ) {
        onMove?.(item, item.index, index);
      }
    },
  });

  const [{ isOverAfter, canDropAfter }, dropAfterRef] = useDrop<
    DataBlockModel & { index: number },
    unknown,
    {
      isOverAfter: boolean;
      canDropAfter: boolean;
    }
  >({
    accept: ["DATA_BLOCK"],
    collect: (monitor) => ({
      isOverAfter:
        !!monitor.isOver({ shallow: true }) &&
        monitor.getItemType() === "DATA_BLOCK",
      canDropAfter:
        monitor.canDrop() &&
        monitor.getItemType() === "DATA_BLOCK" &&
        monitor.getItem().index < index,
    }),
    drop: (item, monitor) => {
      if (
        !monitor.didDrop() &&
        monitor.canDrop() &&
        monitor.getItemType() === "DATA_BLOCK" &&
        item.index !== index
      ) {
        onMove?.(item, item.index, index);
      }
    },
  });

  return {
    isOverBefore,
    canDropBefore,
    dropBeforeRef,
    isOverAfter,
    canDropAfter,
    dropAfterRef,
  };
};
