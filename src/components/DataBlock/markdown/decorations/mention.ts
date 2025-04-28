import { Decoration, WidgetType } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

import { formattingDecoration } from "./formatting";

class MentionWidget extends WidgetType {
  constructor(readonly textContent: string) {
    super();
  }

  eq(other: MentionWidget) {
    return other.textContent == this.textContent;
  }

  toDOM() {
    const span = document.createElement("span");
    span.className = "cm-mention";
    span.textContent = this.textContent;
    return span;
  }

  ignoreEvent() {
    return false;
  }
}

export const processMentionDecoration: ProcessDecorationFn = ({
  node,
  append,
  selection,
  view: { state, hasFocus },
}) => {
  if (node.name === "MentionData") {
    const isActive =
      node &&
      selection.from >= node.from &&
      selection.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    const cursor = node.node.cursor();

    let name = "";
    let detailLabel = "";

    if (cursor.firstChild()) {
      do {
        switch (cursor.name) {
          case "MentionDataName":
            name = state.sliceDoc(cursor.from, cursor.to);
            break;
          case "MentionDataId":
            break;
          case "MentionDataDetailsLabel":
            detailLabel = state.sliceDoc(cursor.from, cursor.to);
            break;
          case "MentionDataDetailsId":
            break;
          default:
            break;
        }

        // process each immediate child of the MentionData node
      } while (cursor.nextSibling());
    }

    const textContent = `${name}${detailLabel ? `(${detailLabel})` : ""}`;

    if (!isActive) {
      append(formattingDecoration.range(node.from - 1, node.from));
    }

    append(
      Decoration.replace({
        widget: new MentionWidget(textContent),
      }).range(node.from, node.to),
    );

    return false;
  }
};
