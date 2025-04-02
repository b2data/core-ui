import { FC, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { EditorView } from "@codemirror/view";
import { insertBlankLine, insertNewlineKeepIndent } from "@codemirror/commands";
import { syntaxTree } from "@codemirror/language";

import { useConfirmationDialog } from "../../ConfirmationDialog";
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
      currentUser,
      keymap,
      mdProps,
      showIndentOffset,
      i18n: { emptyPlaceholder, pasteNewBlocks },
    },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const readOnly = variant.createdBy !== currentUser.id;

  const view = useRef<EditorView | undefined>(undefined);
  const { onOpen: openConfirmDialog, portal } = useConfirmationDialog();

  const content = variant.data.text || "";

  const handleAddBlock = useCallback(
    (i = 0, text = "") => {
      dispatch({
        action: DataBlockEditorPublicAction.AddBlock,
        data: {
          block: {
            id: uuid(),
            type: "text",
            offset: block.offset,
            createdBy: currentUser.id,
          },
          variant: {
            id: uuid(),
            data: { text },
            isCurrent: true,
            createdBy: currentUser.id,
          },
          index: index + 1 + i,
        },
      });
    },
    [index, block.offset, currentUser.id],
  );

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

  const handleHidePrefix = useCallback(() => {
    dispatch({
      action: DataBlockEditorPublicAction.EditBlock,
      data: {
        block: {
          ...block,
          hidePrefix: !block.hidePrefix,
        },
        variant,
      },
    });
  }, [block, variant]);

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

  const handlePaste = useCallback(
    async (event: ClipboardEvent, view: EditorView) => {
      const md = event.clipboardData?.getData("text/markdown");
      let text = event.clipboardData?.getData("text/plain");
      if (!md && text) {
        const newBlocks = text.split("\n").filter((t) => !!t.trim());
        const cursorFrom = view.state.selection.main.from;
        const cursorTo = view.state.selection.main.to;

        if (newBlocks.length > 1) {
          event.preventDefault();
          const deleteConfirmed = await openConfirmDialog({
            title: pasteNewBlocks.title,
            cancelText: pasteNewBlocks.cancelText,
            acceptBtn: {
              label: pasteNewBlocks.okText,
              color: "primary",
            },
            content: pasteNewBlocks.content.replace(
              "{count}",
              newBlocks.length.toString(),
            ),
          });

          if (deleteConfirmed) {
            const firstBlock = newBlocks.shift();
            text = firstBlock || "";

            newBlocks.forEach((t, ind) => {
              handleAddBlock(ind, t);
            });
          }

          view.dispatch({
            changes: { from: cursorFrom, to: cursorTo, insert: text },
          });
        }
      }
    },
    [],
  );

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
      {
        key: "Mod-h",
        run: () => {
          handleHidePrefix();
          return true;
        },
      },
      {
        key: "Mod-H",
        run: () => {
          handleHidePrefix();
          return true;
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
    <>
      <DataBlock
        ref={view}
        editable={editable}
        readOnly={readOnly}
        content={content}
        placeholderText={emptyPlaceholder}
        onTrackChanges={(text) => handleUpdateText(text)}
        onFocus={() => handleSetFocuses()}
        onPaste={editable && !readOnly ? handlePaste : undefined}
        customKeymap={customKeymap}
        mdProps={mdProps}
        sx={{
          ...(showIndentOffset ? { pl: `${block.offset * 2}rem` } : {}),
        }}
      />
      {portal}
    </>
  );
};
