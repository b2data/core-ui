import {
  Decoration,
  DecorationSet,
  EditorView,
  PluginValue,
  ViewUpdate,
} from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";

import {
  processBlockquoteDecoration,
  processCodeblockDecoration,
  processFormattingDecoration,
  processHorizontalRuleDecoration,
  processListDecoration,
  processMentionDecoration,
  processReferenceDecoration,
} from "./decorations";
import { ProcessDecorationFn } from "./model";

import type { Range } from "@codemirror/state";

const inlineTokens = [
  "Emphasis",
  "StrongEmphasis",
  "InlineCode",
  "Strong",
  "Highlight",
  "Strikethrough",
  "Italic",
  "Underline",
  "Variable",
  "Reference",
  "HorizontalRule",
];

export class MarkdownPluginValue implements PluginValue {
  decorations: DecorationSet;
  customDecorations: ProcessDecorationFn[] = [];

  constructor(view: EditorView, customDecorations: ProcessDecorationFn[]) {
    this.customDecorations = customDecorations;
    this.decorations = this.process(view);
  }

  update(update: ViewUpdate): void {
    if (
      update.docChanged ||
      update.viewportChanged ||
      update.selectionSet ||
      update.focusChanged
    ) {
      this.decorations = this.process(update.view);
    }
  }

  process(view: EditorView): DecorationSet {
    const widgets: Range<Decoration>[] = [];
    const [cursor] = view.state.selection.ranges;

    const append = (d: Range<Decoration>) => widgets.push(d);

    const fns = [
      processFormattingDecoration,
      processListDecoration,
      processCodeblockDecoration,
      processHorizontalRuleDecoration,
      processBlockquoteDecoration,
      processMentionDecoration,
      processReferenceDecoration,
    ].concat(this.customDecorations);

    for (const { from, to } of view.visibleRanges) {
      syntaxTree(view.state).iterate({
        from,
        to,
        enter(node) {
          if (node.type.isSkipped) return;

          for (const fn of fns) {
            if (fn(node, append, cursor, view) === false) {
              return false;
            }
          }

          if (
            (node.name.startsWith("ATXHeading") ||
              inlineTokens.includes(node.name)) &&
            cursor.from >= node.from &&
            cursor.to <= node.to &&
            !view.state.readOnly &&
            view.hasFocus
          ) {
            return false;
          }
        },
      });
    }

    return Decoration.set(widgets);
  }
}
