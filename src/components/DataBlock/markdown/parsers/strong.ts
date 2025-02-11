import { Punctuation, strongTag } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const strongDelimiter: DelimiterType = {
  resolve: "Strong",
  mark: "StrongFormatting",
};

export const strong: MarkdownConfig = {
  defineNodes: [
    {
      name: "Strong",
      style: { "Strong/...": strongTag },
    },
    {
      name: "StrongFormatting",
      style: strongTag,
    },
  ],
  parseInline: [
    {
      name: "Strong",
      parse: (cx, next, pos) => {
        if (
          next != 42 /* '*' */ ||
          cx.char(pos + 1) != 42 ||
          cx.char(pos + 2) == 42
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
          strongDelimiter,
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
