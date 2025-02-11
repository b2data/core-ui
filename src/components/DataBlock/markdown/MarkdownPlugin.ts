import { keymap, ViewPlugin } from "@codemirror/view";
import { syntaxHighlighting } from "@codemirror/language";
import { markdown } from "@codemirror/lang-markdown";
import { autocompletion } from "@codemirror/autocomplete";
import { GFM } from "@lezer/markdown";

import {
  blockquote,
  codeblock,
  highlight,
  inlineCode,
  italic,
  mention,
  reference,
  strikethrough,
  strong,
  underline,
  variable,
} from "./parsers";
import { markdownTheme } from "./theme";
import { highlightingStyles } from "./styles";
import { markdownKeymap } from "./keymap";
import { MarkdownPluginValue } from "./MarkdownPluginValue";
import { MarkdownPluginProps } from "./model";
import {
  getAutocompleteTheme,
  getMentionCommand,
  getReferenceCommand,
  getSlashCommand,
  loadingTooltipField,
} from "./autocomplete";

export const markdownPlugin = ({
  parsers = [],
  decorations = [],
  i18n = {},
  onSearchReference,
  onSearchMentions,
  slashCommands,
}: MarkdownPluginProps) => {
  return ViewPlugin.define(
    (view) => new MarkdownPluginValue(view, decorations),
    {
      decorations: (v) => v.decorations,
      provide: () => [
        markdown({
          extensions: [
            GFM,
            highlight,
            strikethrough,
            strong,
            italic,
            underline,
            codeblock,
            inlineCode,
            blockquote,
            variable,
            reference,
            mention,
            ...parsers,
          ],
        }),
        syntaxHighlighting(highlightingStyles),
        markdownTheme,
        getAutocompleteTheme(i18n),

        keymap.of(markdownKeymap),

        loadingTooltipField,

        autocompletion({
          override: [
            getSlashCommand(i18n, slashCommands, {
              mention: !onSearchMentions,
              reference: !onSearchReference,
            }),
            getReferenceCommand(onSearchReference),
            getMentionCommand(onSearchMentions),
          ],
          icons: false,
          selectOnOpen: false,
          tooltipClass: (state) => {
            const { from } = state.selection.main;
            const line = state.doc.lineAt(from);
            const chars = state.doc.sliceString(line.from, from).split("");

            while (chars.length > 0) {
              const char = chars.pop();
              if (char === "/") {
                return "cm-tooltip-autocomplete-slash";
              }
              if (char === "[" && chars[chars.length - 1] === "[") {
                return "cm-tooltip-autocomplete-reference";
              }
              if (char === "@") {
                return "cm-tooltip-autocomplete-mention";
              }
            }

            return "";
          },
        }),
      ],
      eventObservers: {},
      eventHandlers: {},
    },
  );
};
