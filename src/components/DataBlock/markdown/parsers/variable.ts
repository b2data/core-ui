import { variableTag } from "../tags";

import type { MarkdownConfig } from "@lezer/markdown";

export const variable: MarkdownConfig = {
  defineNodes: [
    {
      name: "Variable",
      style: variableTag,
    },
  ],
  parseInline: [
    {
      name: "Variable",
      parse: (cx, _: number, pos: number): number => {
        const marker = cx.slice(pos, pos + 1);
        const nextMarket = cx.slice(pos + 1, pos + 2);
        if (marker !== "{" || marker === nextMarket) {
          return -1;
        }

        // Ensure the marker is not escaped
        if (pos > 0 && cx.slice(pos - 1, pos) === "\\") {
          return -1;
        }

        let end = -1;
        for (let i = pos + 1; i < cx.end; i++) {
          const char = cx.slice(i, i + 1);
          if (char === "}" && cx.slice(i - 1, i) !== "\\") {
            end = i;
            break;
          }
        }

        if (end === -1) {
          return -1;
        }

        cx.addElement(cx.elt("Variable", pos, end + 1));

        return end + 1;
      },
      before: "Emphasis",
    },
  ],
};
