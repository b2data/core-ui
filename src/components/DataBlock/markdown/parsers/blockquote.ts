import { MarkdownConfig } from "@lezer/markdown";

export const blockquote: MarkdownConfig = {
  defineNodes: [
    {
      name: "Blockquote",
    },
  ],
  parseBlock: [
    {
      name: "Blockquote",
      endLeaf(_, line) {
        return line.text.slice(line.pos).trim().startsWith("> ");
      },
      parse: (cx, line) => {
        // Check if the line starts with `> `
        if (!line.text.startsWith("> ") || line.text.startsWith("> [!")) {
          return false;
        }

        cx.addElement(
          cx.elt("Blockquote", cx.lineStart, cx.lineStart + line.text.length),
        );

        return false;
      },
      before: "Blockquote",
    },
  ],
};
