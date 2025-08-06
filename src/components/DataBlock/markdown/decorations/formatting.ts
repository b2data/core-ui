import { Decoration } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

export const formattingDecoration = Decoration.replace({
  class: "cm-formatting",
});

export const processFormattingDecoration: ProcessDecorationFn = ({
  node,
  view,
  append,
}) => {
  const text = view.state.doc.sliceString(node.from, node.to + 1);
  const hasLineBreak = text.includes("\n");

  if (node.name === "HeaderMark" && !hasLineBreak) {
    append(formattingDecoration.range(node.from, node.to + 1));
  }

  if (node.name.endsWith("Formatting") && !hasLineBreak) {
    append(formattingDecoration.range(node.from, node.to));
  }
};
