import { isuuid } from "../../../../hooks";

import type { MarkdownConfig } from "@lezer/markdown";

export const reference: MarkdownConfig = {
  defineNodes: [
    { name: "ReferenceData" },
    { name: "ReferenceDataPreview" },
    { name: "ReferenceDataDocumentId" },
    { name: "ReferenceDataDocumentName" },
    { name: "ReferenceDataVersionId" },
    { name: "ReferenceDataVersionName" },
    { name: "ReferenceDataBlockId" },
    { name: "ReferenceDataBlockName" },
    { name: "ReferenceDataExtra" },
  ],

  parseInline: [
    {
      name: "ReferenceData",
      parse: (cx, _, pos) => {
        // Expected formats:
        // - [[docName|docId]]
        // - [[docName#versionName|docId#versionId]]
        // - [[docName#versionName#blockName|docId#versionId#blockId]]
        if (cx.slice(pos, pos + 2) !== "[[") {
          return -1;
        }

        let end = -1;

        for (let i = pos + 2; i < cx.end; i++) {
          if (cx.slice(i, i + 2) === "[[") {
            break;
          }
          if (cx.slice(i, i + 2) === "]]") {
            end = i;
            break;
          }
        }

        if (end === -1) {
          return -1;
        }

        const text = cx.slice(pos + 2, end);
        const [names, ids] = text.split("|");
        const namesArr = (names || "").split("#");
        const [docName, versionName, blockName] = namesArr;
        const [docId, versionId, blockId] = (ids || "").split("#");

        if (!isuuid(docId)) {
          return -1;
        }

        const children = [];

        children.push(
          cx.elt(
            "ReferenceDataDocumentName",
            pos + 2,
            pos + 2 + docName.length,
          ),
        );

        if (versionName || namesArr.length > 1) {
          children.push(
            cx.elt(
              "ReferenceDataVersionName",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + versionName.length,
            ),
          );
        }

        if (blockName || namesArr.length > 2) {
          children.push(
            cx.elt(
              "ReferenceDataBlockName",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + blockName.length,
            ),
          );
        }

        children.push(
          cx.elt(
            "ReferenceDataDocumentId",
            children[children.length - 1].to + 1,
            children[children.length - 1].to + 1 + docId.length,
          ),
        );

        if (versionId) {
          children.push(
            cx.elt(
              "ReferenceDataVersionId",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + versionId.length,
            ),
          );
        }

        if (blockId) {
          children.push(
            cx.elt(
              "ReferenceDataBlockId",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + blockId.length,
            ),
          );
        }

        cx.addElement(cx.elt("ReferenceData", pos, end + 2, children));

        return end + 2;
      },
      before: "Emphasis",
    },
    {
      name: "ReferenceDataPreview",
      parse: (cx, _, pos) => {
        // Expected formats:
        // - [[docName|docId]]
        // - [[docName#versionName|docId#versionId]]
        // - [[docName#versionName#blockName|docId#versionId#blockId]]
        if (cx.slice(pos, pos + 3) !== "![[") {
          return -1;
        }

        let end = -1;

        for (let i = pos + 3; i < cx.end; i++) {
          if (cx.slice(i, i + 3) === "![[") {
            break;
          }
          if (cx.slice(i, i + 2) === "]]") {
            end = i;
            break;
          }
        }

        if (end === -1) {
          return -1;
        }

        const text = cx.slice(pos + 3, end);
        const [names, ids, extra] = text.split("|");
        const namesArr = (names || "").split("#");
        const [docName, versionName, blockName] = namesArr;
        const [docId, versionId, blockId] = (ids || "").split("#");

        if (!isuuid(docId)) {
          return -1;
        }

        const children = [];

        children.push(
          cx.elt(
            "ReferenceDataDocumentName",
            pos + 3,
            pos + 3 + docName.length,
          ),
        );

        if (versionName || namesArr.length > 1) {
          children.push(
            cx.elt(
              "ReferenceDataVersionName",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + versionName.length,
            ),
          );
        }

        if (blockName || namesArr.length > 2) {
          children.push(
            cx.elt(
              "ReferenceDataBlockName",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + blockName.length,
            ),
          );
        }

        children.push(
          cx.elt(
            "ReferenceDataDocumentId",
            children[children.length - 1].to + 1,
            children[children.length - 1].to + 1 + docId.length,
          ),
        );

        if (versionId) {
          children.push(
            cx.elt(
              "ReferenceDataVersionId",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + versionId.length,
            ),
          );
        }

        if (blockId) {
          children.push(
            cx.elt(
              "ReferenceDataBlockId",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + blockId.length,
            ),
          );
        }

        if (extra) {
          children.push(
            cx.elt(
              "ReferenceDataExtra",
              children[children.length - 1].to + 1,
              children[children.length - 1].to + 1 + extra.length,
            ),
          );
        }

        cx.addElement(cx.elt("ReferenceDataPreview", pos, end + 2, children));

        return end + 3;
      },
      before: "Emphasis",
    },
  ],
};
