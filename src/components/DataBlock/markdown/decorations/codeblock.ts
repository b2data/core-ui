import { Decoration, WidgetType } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

import { formattingDecoration } from "./formatting";

export const processCodeblockDecoration: ProcessDecorationFn = ({
  node,
  append,
  selection,
  view: { state, hasFocus },
}) => {
  if (node.name === "CodeBlock") {
    const isActive =
      node &&
      selection.from >= node.from &&
      selection.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    const codeContent = state.sliceDoc(node.from, node.to);

    const cursor = node.node.cursor();

    if (cursor.firstChild()) {
      do {
        switch (cursor.name) {
          case "CodeBlockStart":
            append(
              Decoration.line({
                class: "cm-codeblock cm-codeblock-start",
              }).range(cursor.from),
            );
            if (!isActive) {
              append(formattingDecoration.range(cursor.from, cursor.to));
            }
            break;
          case "CodeBlockEnd":
            append(
              Decoration.line({
                class: "cm-codeblock cm-codeblock-end",
              }).range(cursor.from),
            );
            if (!isActive) {
              append(formattingDecoration.range(cursor.from, cursor.to));
            }
            break;
          case "CodeBlockLanguage":
            if (!isActive) {
              const lang = state.sliceDoc(cursor.from, cursor.to);
              append(
                Decoration.replace({
                  widget: new (class extends WidgetType {
                    toDOM() {
                      const span = document.createElement("span");
                      span.className = "cm-codeblock-lang";
                      span.textContent = lang;
                      span.onclick = function () {
                        navigator.clipboard.writeText(codeContent);
                      };
                      return span;
                    }
                  })(),
                }).range(cursor.from, cursor.to),
              );
            }
            break;
          case "CodeBlockContent":
            append(
              Decoration.line({
                class: "cm-codeblock",
              }).range(cursor.from),
            );
            break;
          default:
        }

        // process each immediate child of the CodeBlock node
      } while (cursor.nextSibling());
    }

    return false;
  }
};
