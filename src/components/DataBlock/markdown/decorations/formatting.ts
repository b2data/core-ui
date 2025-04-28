import { Decoration } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

export const formattingDecoration = Decoration.replace({
  class: "cm-formatting",
});

export const processFormattingDecoration: ProcessDecorationFn = ({
  node,
  append,
}) => {
  if (node.name === "HeaderMark") {
    append(formattingDecoration.range(node.from, node.to + 1));
  }

  if (node.name.endsWith("Formatting")) {
    append(formattingDecoration.range(node.from, node.to));
  }
};
