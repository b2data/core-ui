import { Decoration } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

export const processBlockquoteDecoration: ProcessDecorationFn = (
  node,
  append,
  cursorPos,
  { state, hasFocus },
) => {
  if (node.name === "Blockquote") {
    const isActive =
      node &&
      cursorPos.from >= node.from &&
      cursorPos.to <= node.to &&
      !state.readOnly &&
      hasFocus;

    append(
      Decoration.line({
        class: `cm-blockquote${isActive ? " cm-blockquote-indent" : ""}`,
      }).range(node.from),
    );

    append(
      Decoration.mark({
        class: `cm-blockquote-mark${!isActive ? " cm-formatting" : ""}`,
      }).range(node.from, node.from + 2),
    );

    return false;
  }
};
