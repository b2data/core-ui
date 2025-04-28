import { Decoration, WidgetType } from "@codemirror/view";

import { ProcessDecorationFn } from "../model";

export const processListDecoration: ProcessDecorationFn = ({
  node,
  append,
  selection,
  view: { state, dispatch },
}) => {
  if (
    node.name === "ListMark" &&
    node.node.matchContext(["BulletList", "ListItem"])
  ) {
    if (
      (selection.from != node.from && selection.from != node.from + 1) ||
      state.readOnly
    ) {
      append(
        Decoration.mark({ class: "cm-list-bullet" }).range(node.from, node.to),
      );
    }
  }

  if (node.name === "TaskMarker" && node.matchContext(["Task"])) {
    if (
      (selection.from != node.from &&
        selection.from != node.from + 1 &&
        node.to - node.from === 3) ||
      state.readOnly
    ) {
      const completed = state.sliceDoc(node.from, node.to) === "[x]";
      const from = node.from + 0;
      const to = node.to + 0;
      append(
        Decoration.replace({
          widget: new (class extends WidgetType {
            toDOM() {
              const span = document.createElement("span");
              span.className = `cm-list-task${completed ? " cm-list-task-completed" : ""}`;
              span.innerHTML = `<svg focusable="false" viewBox="0 0 24 24"><path d="${completed ? "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" : "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}"></path></svg>`;
              span.onclick = function () {
                if (!state.readOnly) {
                  dispatch({
                    changes: { from, to, insert: completed ? "[ ]" : "[x]" },
                  });
                }
              };
              return span;
            }
          })(),
        }).range(node.from, node.to),
      );
    }
  }
};
