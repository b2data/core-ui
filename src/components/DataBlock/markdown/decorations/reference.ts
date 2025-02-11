import { Decoration, WidgetType } from "@codemirror/view";

import { isuuid } from "../../../../hooks";
import { ProcessDecorationFn } from "../model";

import { formattingDecoration } from "./formatting";

class ReferenceWidget extends WidgetType {
  constructor(
    readonly textContent: string,
    readonly isValid?: boolean,
  ) {
    super();
  }

  eq(other: ReferenceWidget) {
    return other.textContent == this.textContent;
  }

  toDOM() {
    const span = document.createElement("span");
    span.className = `cm-reference${!this.isValid ? " cm-reference-invalid" : ""}`;
    span.textContent = this.textContent;
    return span;
  }

  ignoreEvent() {
    return false;
  }
}

export const processReferenceDecoration: ProcessDecorationFn = (
  node,
  append,
  cursorPos,
  { state, hasFocus },
) => {
  if (node.name === "ReferenceData") {
    const isActive =
      node &&
      cursorPos.from >= node.from &&
      cursorPos.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    if (!isActive) {
      append(formattingDecoration.range(node.from, node.from + 2));
    }

    const cursor = node.node.cursor();

    const data: Record<
      string,
      { from: number; to: number; text: string } | null
    > = {
      docName: null,
      versionName: null,
      blockName: null,
      docId: null,
      versionId: null,
      blockId: null,
    };

    if (cursor.firstChild()) {
      do {
        switch (cursor.name) {
          case "ReferenceDataDocumentName":
            data.docName = {
              from: cursor.from,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          case "ReferenceDataVersionName":
            data.versionName = {
              from: cursor.from - 1,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          case "ReferenceDataBlockName":
            data.blockName = {
              from: cursor.from - 1,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          case "ReferenceDataDocumentId":
            data.docId = {
              from: cursor.from - 1,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          case "ReferenceDataVersionId":
            data.versionId = {
              from: cursor.from - 1,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          case "ReferenceDataBlockId":
            data.blockId = {
              from: cursor.from - 1,
              to: cursor.to,
              text: state.sliceDoc(cursor.from, cursor.to),
            };
            break;
          default:
            break;
        }

        // process each immediate child of the ReferenceData node
      } while (cursor.nextSibling());
    }

    if (data.versionName && !isActive) {
      append(
        Decoration.replace({
          widget: new ReferenceWidget(
            ` (v${data.versionName.text})`,
            isuuid(data.versionId?.text || ""),
          ),
        }).range(data.versionName.from, data.versionName.to),
      );
    }

    if (data.blockName && !isActive) {
      append(
        Decoration.replace({
          widget: new ReferenceWidget(
            ` #${data.blockName.text}`,
            isuuid(data.blockId?.text || ""),
          ),
        }).range(data.blockName.from, data.blockName.to),
      );
    }

    if (data.docId) {
      append(
        Decoration.replace({
          class: "cm-formatting",
        }).range(data.docId.from, data.docId.to),
      );
    }

    if (data.versionId) {
      append(
        Decoration.replace({
          class: "cm-formatting",
        }).range(data.versionId.from, data.versionId.to),
      );
    }

    if (data.blockId) {
      append(
        Decoration.replace({
          class: "cm-formatting",
        }).range(data.blockId.from, data.blockId.to),
      );
    }

    if (!isActive) {
      append(formattingDecoration.range(node.to - 2, node.to));
    }

    return false;
  }
};
