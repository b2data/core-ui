import { italicTag, Punctuation } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const italicDelimiter: DelimiterType = {
  resolve: "Italic",
  mark: "ItalicFormatting",
};

export const italic: MarkdownConfig = {
  defineNodes: [
    {
      name: "Italic",
      style: { "Italic/...": italicTag },
    },
    {
      name: "ItalicFormatting",
      style: italicTag,
    },
  ],
  parseInline: [
    {
      name: "Italic",
      parse: (cx, next, pos) => {
        if (
          !(next === 42 || next === 95) /* `*` or `_` */ ||
          cx.char(pos + 1) === 42 ||
          cx.char(pos + 1) === 95
        ) {
          return -1;
        }

        const before = cx.slice(pos - 1, pos);
        const after = cx.slice(pos + 1, pos + 2);
        const sBefore = /\s|^$/.test(before);
        const sAfter = /\s|^$/.test(after);
        const pBefore = Punctuation.test(before);
        const pAfter = Punctuation.test(after);

        return cx.addDelimiter(
          italicDelimiter,
          pos,
          pos + 1,
          !sAfter && (!pAfter || sBefore || pBefore),
          !sBefore && (!pBefore || sAfter || pAfter),
        );
      },
      before: "Emphasis",
    },
  ],
};
