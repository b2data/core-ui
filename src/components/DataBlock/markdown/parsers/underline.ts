import { Punctuation, underlineTag } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const underlineDelimiter: DelimiterType = {
  resolve: "Underline",
  mark: "UnderlineFormatting",
};

export const underline: MarkdownConfig = {
  defineNodes: [
    {
      name: "Underline",
      style: { "Underline/...": underlineTag },
    },
    {
      name: "UnderlineFormatting",
      style: underlineTag,
    },
  ],
  parseInline: [
    {
      name: "Underline",
      parse: (cx, _: number, pos: number): number => {
        // Check if the current position starts with "<u>"
        if (
          !(
            cx.slice(pos, pos + 3) === "<u>" ||
            cx.slice(pos, pos + 4) === "</u>"
          )
        ) {
          return -1;
        }

        const len = cx.slice(pos, pos + 3) === "<u>" ? 3 : 4;

        const before = cx.slice(pos - 1, pos);
        const after = cx.slice(pos + len, pos + len + 1);
        const sBefore = /\s|^$/.test(before);
        const sAfter = /\s|^$/.test(after);
        const pBefore = Punctuation.test(before);
        const pAfter = Punctuation.test(after);

        return cx.addDelimiter(
          underlineDelimiter,
          pos,
          pos + len,
          !sAfter && (!pAfter || sBefore || pBefore),
          !sBefore && (!pBefore || sAfter || pAfter),
        );
      },
      before: "HTMLTag",
    },
  ],
};
