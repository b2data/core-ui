import { ClipboardEvent, Dispatch, KeyboardEvent } from "react";

import { uuid } from "../../../hooks";
import { DataBlockModel, DataBlockType, DataBlockVariant } from "../model";
import { DataBlockEditorAction, DataBlockEditorActions } from "../store";
import {
  addShortcutEvent,
  listenMarkdownEvent,
  listenOffsetEvent,
  navigationEvent,
} from "../tools";

export const useBlockListener = (
  dispatch: Dispatch<DataBlockEditorActions>,
  {
    block,
    variant,
    index,
    editable,
    maxOffset,
  }: {
    block: Omit<DataBlockModel, "variants">;
    variant: DataBlockVariant;
    index: number;
    editable?: boolean;
    maxOffset?: number;
  },
): {
  onKeyUp?: (e: KeyboardEvent<HTMLElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
  onPaste?: (e: ClipboardEvent<HTMLElement>) => void;
} => {
  const onMarkdownChange = (
    newType: DataBlockType | null,
    newData: Partial<DataBlockVariant["data"]>,
  ) => {
    dispatch({
      action: DataBlockEditorAction.EditBlock,
      block: {
        ...block,
        type: newType !== null && variant.isCurrent ? newType : block.type,
      },
      variant: {
        ...variant,
        data: { ...variant.data, ...newData },
      },
    });
    dispatch({
      action: DataBlockEditorAction.SetFocused,
      index: index,
    });
  };

  const onOffsetChange = (num: number) => {
    dispatch({
      action: DataBlockEditorAction.EditBlock,
      block: {
        ...block,
        offset: Math.max(
          0,
          Math.min(maxOffset ?? Number.MAX_VALUE, (block.offset || 0) + num),
        ),
      },
      variant,
    });
  };

  const onChangeNavigation = (dir: "up" | "down") => {
    dispatch({
      action: DataBlockEditorAction.SetFocused,
      index: index + (dir === "up" ? -1 : 1),
    });
  };

  const onAddBlock = () => {
    dispatch({
      action: DataBlockEditorAction.AddBlock,
      block: {
        id: uuid(),
        type: block.type,
        number: index + 2,
        offset: block.offset,
      },
      variant: {
        id: uuid(),
        data: {},
        isCurrent: true,
      },
      index: index + 1,
    });
  };

  const handlePaste = (e: ClipboardEvent<HTMLElement>) => {
    e.preventDefault();
    document.execCommand("insertHTML", false, e.clipboardData.getData("text"));
  };

  if (editable) {
    return {
      onKeyUp: (e: KeyboardEvent<HTMLElement>) => {
        listenMarkdownEvent(e, onMarkdownChange);
      },
      onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
        listenOffsetEvent(e, onOffsetChange);
        navigationEvent(e, onChangeNavigation);
        addShortcutEvent(e, onAddBlock);
      },
      onPaste: handlePaste,
    };
  }

  return {};
};
