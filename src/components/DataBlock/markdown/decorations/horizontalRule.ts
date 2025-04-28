import { Decoration } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

export const processHorizontalRuleDecoration: ProcessDecorationFn = ({
  node,
  append,
}) => {
  if (node.name === "HorizontalRule") {
    append(Decoration.line({ class: "cm-hr" }).range(node.from));
  }
};
