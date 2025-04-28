import { Decoration, WidgetType } from "@codemirror/view";

import { isuuid } from "../../../../hooks";
import { MarkdownPluginProps, ProcessDecorationFn } from "../model";

import { formattingDecoration } from "./formatting";
import { TreeCursor } from "@lezer/common";
import { EditorState } from "@codemirror/state";

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

class ReferencePreviewWidget extends WidgetType {
  constructor(
    readonly textContent: string,
    readonly docName?: string,
    readonly docId?: string,
    readonly versionId?: string,
    readonly resolveReferenceUrl?: MarkdownPluginProps["resolveReferenceUrl"],
    readonly extra?: string[],
  ) {
    super();
  }

  eq(other: ReferenceWidget) {
    return other.textContent == this.textContent;
  }

  toDOM() {
    const extension = (this.docName || "").split(".").pop() || "";
    const url =
      this.resolveReferenceUrl?.({
        docId: this.docId || "",
        versionId: this.versionId || "",
      }) || "";

    const isValid = !!this.docId && !!this.versionId && !!url;
    const className = `cm-reference-preview${!isValid ? " cm-reference-invalid" : ""}`;

    const height = isNaN(Number(this.extra?.[0]))
      ? 300
      : Number(this.extra?.[0]);

    switch (extension) {
      case "mov":
      case "mp4":
      case "webm": {
        const video = document.createElement("video");
        video.className = className;
        video.style.maxHeight = `${height}px`;
        video.innerHTML = `<source src="${url}">`;
        video.controls = true;
        return video;
      }
      case "png":
      case "jpg":
      case "jpeg":
      case "svg":
      case "gif": {
        const img = document.createElement("img");
        img.className = className;
        img.src = url;
        img.style.maxHeight = `${height}px`;
        return img;
      }
      default: {
        const span = document.createElement("span");
        span.className = "cm-reference";
        span.textContent = this.textContent;
        return span;
      }
    }
  }

  ignoreEvent() {
    return false;
  }
}

const getReferenceData = (cursor: TreeCursor, state: EditorState) => {
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
    extra: null,
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
        case "ReferenceDataExtra":
          data.extra = {
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

  return data;
};

export const processReferenceDecoration: ProcessDecorationFn = ({
  node,
  append,
  selection,
  view: { state, hasFocus },
  resolveReferenceUrl,
}) => {
  if (node.name === "ReferenceData") {
    const isActive =
      node &&
      selection.from >= node.from &&
      selection.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    if (!isActive) {
      append(formattingDecoration.range(node.from, node.from + 2));
    }

    const data = getReferenceData(node.node.cursor(), state);

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

  if (node.name === "ReferenceDataPreview") {
    const isActive =
      node &&
      selection.from >= node.from &&
      selection.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    const data = getReferenceData(node.node.cursor(), state);

    if (isActive) {
      if (data.docId?.from) {
        append(
          formattingDecoration.range(
            data.docId?.from,
            data.extra?.from || node.to - 2,
          ),
        );
      }
    } else {
      append(
        Decoration.replace({
          widget: new ReferencePreviewWidget(
            `${data.docName?.text || ""}${data.versionName ? ` (v${data.versionName?.text})` : ""}${data.blockName?.text ? ` #${data.blockName?.text}` : ""}`,
            data.docName?.text,
            data.docId?.text,
            data.versionId?.text,
            resolveReferenceUrl,
            data.extra?.text?.split("#"),
          ),
        }).range(node.from, node.to),
      );
    }

    return false;
  }

  return true;
};
