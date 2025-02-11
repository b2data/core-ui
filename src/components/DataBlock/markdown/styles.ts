import { HighlightStyle } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

import {
  codeblockTag,
  highlightTag,
  inlineCodeTag,
  italicTag,
  strikethroughTag,
  strongTag,
  underlineTag,
  variableTag,
} from "./tags";

export const highlightingStyles = HighlightStyle.define([
  { tag: t.heading1, class: "cm-heading-1" },
  { tag: t.heading2, class: "cm-heading-2" },
  { tag: t.heading3, class: "cm-heading-3" },
  { tag: t.heading4, class: "cm-heading-4" },
  { tag: t.heading5, class: "cm-heading-5" },
  { tag: t.heading6, class: "cm-heading-6" },
  { tag: t.link, class: "cm-link" },
  { tag: t.bracket, class: "cm-bracket" },
  { tag: italicTag, class: "cm-italic" },
  { tag: highlightTag, class: "cm-highlight" },
  { tag: [t.strong, strongTag], class: "cm-strong" },
  { tag: [t.monospace, inlineCodeTag, variableTag], class: "cm-monospace" },
  { tag: codeblockTag, class: "cm-codeblock" },
  { tag: [t.strikethrough, strikethroughTag], class: "cm-strikethrough" },
  { tag: underlineTag, class: "cm-underline" },
  { tag: t.separator, class: "cm-separator" },
]);
