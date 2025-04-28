import {
  Completion,
  CompletionContext,
  CompletionResult,
} from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";

import { MarkdownPluginI18n, MarkdownSlashCommand } from "../model";
import { useDevice } from "../../../../hooks";

export const getSlashCommand =
  (
    i18n?: MarkdownPluginI18n,
    includeCommands?: MarkdownSlashCommand[],
    exclude?: Record<string, boolean>,
  ) =>
  (context: CompletionContext): CompletionResult | null => {
    // Match text starting with `/`
    const word = context.matchBefore(/\/\w*/);
    if (!word || (word.from === word.to && !context.explicit)) return null;

    const { Symbols } = useDevice();

    const initialOptions: (Completion & { id: MarkdownSlashCommand })[] = [
      {
        id: "mention",
        label: `/${i18n?.mention || "Mention"}`,
        detail: `@`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "@" },
            selection: { anchor: from + 1, head: from + 1 },
          });
        },
      },
      {
        id: "reference",
        label: `/${i18n?.reference || "Reference"}`,
        detail: `[[ ? ]]`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "[[]]" },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
      },
      {
        id: "referencePreview",
        label: `/${i18n?.referencePreview || "Preview Reference"}`,
        detail: `![[ ? ]]`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "![[]]" },
            selection: { anchor: from + 3, head: from + 3 },
          });
        },
      },
      {
        id: "bold",
        label: `/${i18n?.bold || "Bold"}`,
        detail: `${Symbols.CMD}+B`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "****" },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
        section: {
          name: i18n?.sections?.formatting || "Formatting",
          rank: 1,
        },
      },
      {
        id: "italic",
        label: `/${i18n?.italic || "Italic"}`,
        detail: `${Symbols.CMD}+I`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "**" },
            selection: { anchor: from + 1, head: from + 1 },
          });
        },
        section: {
          name: i18n?.sections?.formatting || "Formatting",
          rank: 1,
        },
      },
      {
        id: "underline",
        label: `/${i18n?.underline || "Underline"}`,
        detail: `${Symbols.CMD}+U`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "<u></u>" },
            selection: { anchor: from + 3, head: from + 3 },
          });
        },
        section: {
          name: i18n?.sections?.formatting || "Formatting",
          rank: 1,
        },
      },
      {
        id: "strikethrough",
        label: `/${i18n?.strikethrough || "Strikethrough"}`,
        detail: `${Symbols.CMD}+${Symbols.SHIFT}+X`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "~~~~" },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
        section: {
          name: i18n?.sections?.formatting || "Formatting",
          rank: 1,
        },
      },
      {
        id: "highlight",
        label: `/${i18n?.highlight || "Highlight"}`,
        detail: `${Symbols.CMD}+M`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "====" },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
        section: {
          name: i18n?.sections?.formatting || "Formatting",
          rank: 1,
        },
      },
      {
        id: "variable",
        label: `/${i18n?.variable || "Variable"}`,
        detail: `{ ? }`,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "{}" },
            selection: { anchor: from + 1, head: from + 1 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
      {
        id: "code",
        label: `/${i18n?.code || "Inline Code"}`,
        detail: `\` ? \``,
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "``" },
            selection: { anchor: from + 1, head: from + 1 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
      {
        id: "codeblock",
        label: `/${i18n?.codeblock || "Code Block"}`,
        detail: "```",
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "```\n\n```" },
            selection: { anchor: from + 4, head: from + 4 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
      {
        id: "divider",
        label: `/${i18n?.divider || "Divider"}`,
        detail: "---",
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "---" },
            selection: { anchor: from + 3, head: from + 3 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
      {
        id: "list",
        label: `/${i18n?.list || "List"}`,
        detail: "- ?",
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "- " },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
      {
        id: "quote",
        label: `/${i18n?.quote || "Quote"}`,
        detail: "> ?",
        type: "command",
        apply: (view: EditorView, _, from: number, to: number) => {
          view.dispatch({
            changes: { from, to, insert: "> " },
            selection: { anchor: from + 2, head: from + 2 },
          });
        },
        section: {
          name: i18n?.sections?.blocks || "Blocks",
          rank: 2,
        },
      },
    ];

    const options = initialOptions.filter(
      (o) =>
        (includeCommands?.includes(o.id) || !includeCommands?.length) &&
        !exclude?.[o.id],
    );

    return {
      from: word.from,
      options,
    };
  };
