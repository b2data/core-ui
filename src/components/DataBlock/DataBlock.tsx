import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { SxProps } from "@mui/material";
import {
  EditorView,
  highlightActiveLine,
  KeyBinding,
  keymap,
  placeholder,
} from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentUnit } from "@codemirror/language";
import { closeBrackets } from "@codemirror/autocomplete";
import { history, historyKeymap } from "@codemirror/commands";
import { markdownLanguage } from "@codemirror/lang-markdown";

import { Theme, useTheme } from "../../theming";
import { Box } from "../Box";
import { useDeepEqualMemo } from "../../hooks";

import { basicKeymap } from "./configs";
import { markdownPlugin, MarkdownPluginProps } from "./markdown";

export type DataBlockProps = {
  /**
   * Whether the editor is editable
   * @default false
   */
  editable?: boolean;
  /**
   * Whether the editor is read-only
   * @default false
   */
  readOnly?: boolean;
  /**
   * The content of the editor
   */
  content?: string;
  /**
   * Callback when the content changes
   * @returns string
   */
  onChange?: (content: string) => void;
  /**
   * Debounce time for the `onChange` callback
   * @default 1000
   */
  onChangeDebounce?: number;
  /**
   * Callback when a paste event occurs
   * @returns string
   */
  onPaste?: (event: ClipboardEvent, view: EditorView) => void;
  /**
   * Callback when the editor loses focus
   * @returns string
   */
  onBlur?: (content: string) => void;
  /**
   * Callback when the editor gains focus
   */
  onFocus?: (e: FocusEvent, view: EditorView) => void;
  /**
   * Callback when the editor loses focus and content has changed
   * @returns string
   */
  onTrackChanges?: (content: string) => void;
  /**
   * Placeholder text for the editor when it's empty
   */
  placeholderText?: string;
  /**
   * Custom keymap for the editor
   */
  customKeymap?: KeyBinding[];
  /**
   * Props for the markdown plugin
   */
  mdProps?: MarkdownPluginProps;
  sx?: SxProps<Theme>;
};

export const DataBlock = forwardRef(
  (
    {
      readOnly = false,
      editable = false,
      content = "",
      onChange,
      onChangeDebounce = 1000,
      onPaste,
      onBlur,
      onFocus,
      onTrackChanges,
      placeholderText = "",
      customKeymap = [],
      mdProps = {},
      sx,
    }: DataBlockProps,
    _ref,
  ) => {
    const theme = useTheme();

    const ref = useRef<HTMLDivElement | null>(null);
    const [view, setView] = useState<EditorView | null>(null);
    const debounceTimer = useRef<number | null>(null);

    // Initialize the editor
    useEffect(() => {
      if (ref.current) {
        const state = EditorState.create({
          doc: content,
          extensions: [
            EditorView.editable.of(editable),
            EditorState.readOnly.of(readOnly),
            EditorState.lineSeparator.of("\n"),
            EditorView.lineWrapping,
            indentUnit.of("    "),
            markdownLanguage.data.of({
              closeBrackets: {
                brackets: ["[", "{", "(", "`", '"', "'", "```"],
              },
            }),
            placeholder(placeholderText),
            keymap.of(customKeymap),
            markdownPlugin(mdProps),
            history(),
            editable ? highlightActiveLine() : [],
            closeBrackets(),
            keymap.of(basicKeymap),
            keymap.of(historyKeymap),
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                if (debounceTimer.current) {
                  clearTimeout(debounceTimer.current);
                }
                debounceTimer.current = window.setTimeout(() => {
                  onChange?.(update.state.doc.toString());
                }, onChangeDebounce);
              }
            }),
            EditorView.domEventHandlers({
              focus: (event, view) => {
                onFocus?.(event, view);
              },
              paste: (event, view) => {
                onPaste?.(event, view);
              },
              copy: (event, view) => {
                const selection = view.state.doc.sliceString(
                  view.state.selection.main.from,
                  view.state.selection.main.to,
                );
                if (event.clipboardData && selection) {
                  event.clipboardData.setData("text/markdown", selection);
                  event.clipboardData.setData("text/plain", selection);
                  event.preventDefault();
                }
              },
              cut: (event, view) => {
                const selection = view.state.doc.sliceString(
                  view.state.selection.main.from,
                  view.state.selection.main.to,
                );
                if (event.clipboardData && selection) {
                  event.clipboardData.setData("text/markdown", selection);
                  event.clipboardData.setData("text/plain", selection);
                  view.dispatch({
                    changes: {
                      from: view.state.selection.main.from,
                      to: view.state.selection.main.to,
                      insert: "",
                    },
                  });
                  event.preventDefault();
                }
              },
            }),
          ],
        });

        const editorView = new EditorView({
          state,
          parent: ref.current,
        });

        setView(editorView);

        // Cleanup on unmount
        return () => {
          editorView.destroy();
        };
      }
    }, [
      editable,
      placeholderText,
      useDeepEqualMemo(customKeymap),
      useDeepEqualMemo(mdProps),
    ]);

    useEffect(() => {
      const handleBlur = () => {
        if (editable && view) {
          const newContent = view.state.doc.toString();
          onBlur?.(newContent);
          if (content !== newContent) {
            onTrackChanges?.(newContent);
          }
          view.dispatch({ effects: [] });
        }
      };

      if (view && content !== view.state.doc.toString()) {
        view.dispatch({
          changes: {
            from: 0,
            to: view.state.doc.length,
            insert: content || "",
          },
        });
      }

      view?.contentDOM.addEventListener("blur", handleBlur);

      return () => {
        view?.contentDOM.removeEventListener("blur", handleBlur);
      };
    }, [content, view, editable, readOnly]);

    useImperativeHandle(
      _ref,
      () => ({
        ...view,
        view: view?.contentDOM,
        hasFocus: view?.hasFocus,
        state: view?.state,
      }),
      [view],
    );

    return (
      <Box
        ref={ref}
        component="div"
        sx={{
          "& .cm-editor": {
            outlineColor: readOnly ? "grey.300" : undefined,
          },
          ...(typeof sx === "function" ? sx(theme) : sx || {}),
        }}
      />
    );
  },
);
