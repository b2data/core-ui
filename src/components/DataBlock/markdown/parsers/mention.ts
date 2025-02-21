import { isTonWallet, isuuid } from "../../../../hooks";

import type { Element, MarkdownConfig } from "@lezer/markdown";

/**
 * Expected formats:
 * - @name|id
 * - @name|id#detailsId
 * - @name#detailsLabel|id#detailsId
 */
export const parseInlineMention = (
  elt: (type: string, from: number, to: number) => Element,
  start: number,
  text: string,
  offset: number = 0,
) => {
  let nameEnd = -1;

  // Find delimiter of name and id by "|"
  for (let i = start; i < text.length; i++) {
    const nextChar = text.slice(i, i + 1);
    if (nextChar === "\n") {
      break;
    }
    if (nextChar === "|") {
      nameEnd = i;
      break;
    }
  }

  if (nameEnd === -1) {
    return null;
  }

  let idsEnd = -1;
  // Find delimiter of name and id by "|"
  for (let i = nameEnd + 1; i <= text.length; i++) {
    const nextChar = text.slice(i, i + 1);
    if (["", " ", "\n", "\\"].includes(nextChar)) {
      idsEnd = i;
      break;
    }
  }

  if (idsEnd === -1) {
    return null;
  }

  const [name, detailLabel] = text.slice(start, nameEnd).split("#");
  const [id, detailId] = text.slice(nameEnd + 1, idsEnd).split("#");

  // Check if the id is a valid UUID or TON Wallet address
  if (!isuuid(id || "") && !isTonWallet(id || "")) {
    return null;
  }

  // If detailId is provided, check if it is a valid UUID
  if (detailId && !isuuid(detailId)) {
    return null;
  }

  const result: Element[] = [];

  result.push(
    elt("MentionDataName", offset + start, offset + start + name.length),
  );

  if (detailLabel) {
    result.push(
      elt(
        "MentionDataDetailsLabel",
        offset + start + name.length + 1,
        offset + nameEnd,
      ),
    );
  }

  result.push(
    elt(
      "MentionDataId",
      offset + nameEnd + 1,
      offset + nameEnd + 1 + id.length,
    ),
  );

  if (detailId) {
    result.push(
      elt(
        "MentionDataDetailsId",
        offset + nameEnd + 1 + id.length + 1,
        offset + idsEnd,
      ),
    );
  }

  return result;
};

export const mention: MarkdownConfig = {
  defineNodes: [
    { name: "MentionData" },
    { name: "MentionDataName" },
    { name: "MentionDataId" },
    { name: "MentionDataDetailsLabel" },
    { name: "MentionDataDetailsId" },
  ],
  parseInline: [
    {
      name: "MentionData",
      parse: (cx, _, pos) => {
        if (cx.slice(pos, pos + 1) !== "@") {
          return -1;
        }

        const result = parseInlineMention(
          cx.elt.bind(cx),
          1,
          cx.slice(pos, cx.end),
          pos,
        );

        if (!result) {
          return -1;
        }

        cx.addElement(
          cx.elt(
            "MentionData",
            result[0].from,
            result[result.length - 1].to,
            result,
          ),
        );

        return result[result.length - 1].to + 1;
      },
      before: "Emphasis",
    },
  ],
};
