import type { Decoration, EditorView } from "@codemirror/view";
import type { MarkdownExtension } from "@lezer/markdown";
import type { Range, SelectionRange } from "@codemirror/state";
import type { SyntaxNodeRef } from "@lezer/common";

export type MarkdownPluginI18n = {
  sections?: {
    formatting?: string;
    blocks?: string;
  };
  mention?: string;
  reference?: string;
  referenceHint?: string;

  bold?: string;
  italic?: string;
  underline?: string;
  strikethrough?: string;
  highlight?: string;

  variable?: string;
  code?: string;
  codeblock?: string;
  divider?: string;
  list?: string;
  quote?: string;
};

export type ProcessDecorationFn = (
  node: SyntaxNodeRef,
  append: (d: Range<Decoration>) => void,
  cursorPos: SelectionRange,
  view: EditorView,
) => boolean | void;

export type MarkdownSlashCommand =
  | "mention"
  | "reference"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "highlight"
  | "variable"
  | "code"
  | "codeblock"
  | "divider"
  | "list"
  | "quote";

export type MarkdownPluginProps = {
  parsers?: MarkdownExtension[];
  decorations?: ProcessDecorationFn[];
  i18n?: MarkdownPluginI18n;
  onSearchReference?: (request: {
    query?: string;
    docId?: string;
    versionId?: string;
  }) => Promise<{ id: string; label: string; displayLabel?: string }[]>;
  onSearchMentions?: (request: { query?: string }) => Promise<
    {
      id: string;
      name: string;
      detailId?: string;
      detailLabel?: string;
    }[]
  >;
  // Default all
  slashCommands?: MarkdownSlashCommand[];
};
