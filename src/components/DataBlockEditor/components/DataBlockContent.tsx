import { FC, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { EditorView } from "@codemirror/view";
import { insertBlankLine, insertNewlineKeepIndent } from "@codemirror/commands";
import { syntaxTree } from "@codemirror/language";

import {
  DataBlockBase,
  DataBlockEditorPublicAction,
  DataBlockVariant,
} from "../models";
import { DataBlockEditorContext, DataBlockEditorPrivateAction } from "../store";
import { DataBlock } from "../../DataBlock";
import { useDeepEqualMemo, uuid } from "../../../hooks";

export type DataBlockContentProps = {
  index: number;
  isFocused?: boolean;
  block: Omit<DataBlockBase, "variants">;
  variant: DataBlockVariant;
};

export const DataBlockContent: FC<DataBlockContentProps> = ({
  index,
  isFocused,
  block,
  variant,
}) => {
  const {
    state: {
      editable,
      focusedEnd,
      currentUserId,
      keymap,
      mdProps,
      showIndentOffset,
      i18n: { emptyPlaceholder },
    },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const view = useRef<EditorView>();

  const content = variant.data.text || "";

  const handleAddBlock = useCallback(() => {
    dispatch({
      action: DataBlockEditorPublicAction.AddBlock,
      data: {
        block: {
          id: uuid(),
          type: "text",
          offset: block.offset,
          createdBy: currentUserId,
        },
        variant: {
          id: uuid(),
          data: { text: "" },
          isCurrent: true,
          createdBy: currentUserId,
        },
        index: index + 1,
      },
    });
  }, [index, block.offset, currentUserId]);

  const moveToNextBlock = useCallback(() => {
    dispatch({
      action: DataBlockEditorPrivateAction.SetFocused,
      data: { index: index + 1, focusedEnd: true },
    });
  }, [index]);

  const moveToPrevBlock = useCallback(() => {
    dispatch({
      action: DataBlockEditorPrivateAction.SetFocused,
      data: { index: Math.max(0, index - 1), focusedEnd: false },
    });
  }, [index]);

  const handleChangeOffset = useCallback(
    (offsetChanges: number) => {
      dispatch({
        action: DataBlockEditorPublicAction.EditBlock,
        data: {
          block: {
            ...block,
            offset: Math.max(0, block.offset + (offsetChanges || 0)),
          },
          variant,
        },
      });
    },
    [block, variant],
  );

  const handleUpdateText = useCallback(
    (text: string) => {
      dispatch({
        action: DataBlockEditorPublicAction.EditVariant,
        data: {
          blockId: block.id,
          variant: {
            ...variant,
            data: {
              ...variant.data,
              text,
            },
          },
        },
      });
    },
    [block.id, variant, content],
  );

  const deleteBlock = useCallback(() => {
    dispatch({
      action: DataBlockEditorPublicAction.DeleteBlock,
      data: { blockId: block.id },
    });
  }, [block.id]);

  const handleSetFocuses = useCallback(() => {
    if (!isFocused) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetFocused,
        data: { index },
      });
    }
  }, [index, isFocused]);

  const customKeymap = useMemo(
    () => [
      {
        key: "Enter",
        run: (view: EditorView) => {
          const cursorPos = view.state.selection.main.head;
          const node = syntaxTree(view.state).resolve(cursorPos - 1);
          const line = view.state.doc.lineAt(cursorPos);

          switch (node.name) {
            case "CodeBlockStart":
            case "CodeBlockLanguage":
              return insertBlankLine(view);
            case "CodeBlockContent":
              return insertNewlineKeepIndent(view);
            default:
              if (line.text.startsWith("> ")) {
                view.dispatch({
                  changes: { from: line.to, insert: `\n> ` },
                  selection: { head: line.to + 3, anchor: line.to + 3 },
                });
                return true;
              }
              handleAddBlock();
              view.contentDOM.blur();

              return true;
          }
        },
        shift: (view: EditorView) => {
          const cursorPos = view.state.selection.main.head;
          const node = syntaxTree(view.state).resolve(cursorPos - 1);

          switch (node.name) {
            case "ATXHeading1":
            case "ATXHeading2":
            case "ATXHeading3":
            case "ATXHeading4":
            case "ATXHeading5":
            case "ATXHeading6":
              handleAddBlock();
              view.contentDOM.blur();
              return true;
            default:
              return false;
          }
        },
      },
      {
        key: "ArrowDown",
        run: (view: EditorView) => {
          const cursorPos = view.state.selection.main.head;
          if (cursorPos === view.state.doc.length) {
            moveToNextBlock();
            return true;
          }
          return false;
        },
      },
      {
        key: "ArrowUp",
        run: (view: EditorView) => {
          const cursorPos = view.state.selection.main.head;
          if (cursorPos === 0) {
            moveToPrevBlock();
            return true;
          }
          return false;
        },
      },
      {
        key: "Tab",
        run: () => {
          handleChangeOffset(1);
          return true;
        },
        shift: () => {
          handleChangeOffset(-1);
          return true;
        },
      },
      {
        key: "Mod-Shift-Backspace",
        run: () => {
          deleteBlock();
          return true;
        },
      },
      {
        key: "Backspace",
        run: (view: EditorView) => {
          const cursorPos = view.state.selection.main.head;
          if (cursorPos === 0 && view.state.doc.toString() === "") {
            deleteBlock();
            return true;
          }
          return false;
        },
      },
      ...(keymap || []),
    ],
    [
      handleAddBlock,
      moveToNextBlock,
      moveToPrevBlock,
      deleteBlock,
      handleChangeOffset,
      useDeepEqualMemo(keymap),
    ],
  );

  useEffect(() => {
    setTimeout(() => {
      if (view.current?.contentDOM && isFocused) {
        view.current!.contentDOM.focus();
        if (typeof focusedEnd === "boolean") {
          view.current!.dispatch({
            selection: {
              anchor: focusedEnd ? content.length : 0,
              head: focusedEnd ? content.length : 0,
            },
          });
        }
      }
    }, 0);
  }, [isFocused, view.current?.contentDOM, focusedEnd, content.length]);

  return (
    <DataBlock
      ref={view}
      editable={editable}
      readOnly={variant.createdBy !== currentUserId}
      content={content}
      placeholderText={emptyPlaceholder}
      onTrackChanges={(text) => handleUpdateText(text)}
      onFocus={() => handleSetFocuses()}
      customKeymap={customKeymap}
      mdProps={mdProps}
      sx={{
        ...(showIndentOffset ? { pl: `${block.offset * 2}rem` } : {}),
      }}
    />
  );
};
