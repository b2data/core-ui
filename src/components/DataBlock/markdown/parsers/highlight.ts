import { highlightTag, Punctuation } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const highlightDelimiter: DelimiterType = {
  resolve: "Highlight",
  mark: "HighlightFormatting",
};

export const highlight: MarkdownConfig = {
  defineNodes: [
    {
      name: "Highlight",
      style: { "Highlight/...": highlightTag },
    },
    {
      name: "HighlightFormatting",
      style: highlightTag,
    },
  ],
  parseInline: [
    {
      name: "Highlight",
      parse: (cx, next, pos) => {
        if (
          next != 61 /* '=' */ ||
          cx.char(pos + 1) != 61 ||
          cx.char(pos + 2) == 61
        ) {
          return -1;
        }

        const before = cx.slice(pos - 1, pos);
        const after = cx.slice(pos + 2, pos + 3);
        const sBefore = /\s|^$/.test(before);
        const sAfter = /\s|^$/.test(after);
        const pBefore = Punctuation.test(before);
        const pAfter = Punctuation.test(after);

        return cx.addDelimiter(
          highlightDelimiter,
          pos,
          pos + 2,
          !sAfter && (!pAfter || sBefore || pBefore),
          !sBefore && (!pBefore || sAfter || pAfter),
        );
      },
      before: "Emphasis",
    },
  ],
};
