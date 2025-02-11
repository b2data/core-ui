import { Punctuation, strikethroughTag } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const strikethroughDelimiter: DelimiterType = {
  resolve: "Strikethrough",
  mark: "StrikethroughFormatting",
};

export const strikethrough: MarkdownConfig = {
  defineNodes: [
    {
      name: "Strikethrough",
      style: { "Strikethrough/...": strikethroughTag },
    },
    {
      name: "StrikethroughFormatting",
      style: strikethroughTag,
    },
  ],
  parseInline: [
    {
      name: "Strikethrough",
      parse: (cx, next, pos) => {
        if (
          next != 126 /* '~' */ ||
          cx.char(pos + 1) != 126 ||
          cx.char(pos + 2) == 126
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
          strikethroughDelimiter,
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
