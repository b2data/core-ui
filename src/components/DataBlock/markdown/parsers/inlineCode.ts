import { inlineCodeTag } from "../tags";

import type { DelimiterType, MarkdownConfig } from "@lezer/markdown";

const inlineCodeDelimiter: DelimiterType = {
  resolve: "InlineCode",
  mark: "InlineCodeFormatting",
};

export const inlineCode: MarkdownConfig = {
  defineNodes: [
    {
      name: "InlineCode",
      style: { "InlineCode/...": inlineCodeTag },
    },
    {
      name: "InlineCodeFormatting",
      style: inlineCodeTag,
    },
  ],
  parseInline: [
    {
      name: "InlineCode",
      parse: (cx, next, pos) => {
        if (next != 96 /* '`' */ || cx.char(pos + 1) == 96) {
          return -1;
        }

        // Ensure the marker is not escaped
        if (pos > 0 && cx.slice(pos - 1, pos) === "\\") {
          return -1;
        }

        let end = -1;
        for (let i = pos + 1; i < cx.end; i++) {
          const char = cx.slice(i, i + 1);
          if (char === "`" && cx.slice(i - 1, i) !== "\\") {
            end = i;
            break;
          }
        }

        if (end === -1) {
          return -1;
        }

        cx.addDelimiter(inlineCodeDelimiter, pos, pos + 1, true, false);
        cx.addDelimiter(inlineCodeDelimiter, end, end + 1, false, true);

        return end + 1;
      },
      before: "Emphasis",
    },
  ],
};
