import { Element, MarkdownConfig } from "@lezer/markdown";

import { codeblockTag } from "../tags";

export const codeblock: MarkdownConfig = {
  defineNodes: [
    {
      name: "CodeBlock",
      style: codeblockTag,
    },
    {
      name: "CodeBlockLanguage",
    },
    {
      name: "CodeBlockContent",
    },
    {
      name: "CodeBlockStart",
    },
    {
      name: "CodeBlockEnd",
    },
  ],
  parseBlock: [
    {
      name: "CodeBlock",
      endLeaf(_, line) {
        return line.text.slice(line.pos).trim().startsWith("```");
      },
      parse: (cx, line) => {
        // Check if the line starts with ```
        if (!line.text.startsWith("```")) {
          return false;
        }

        const children: Element[] = [];

        // Extract the language specifier (if any)
        const match = line.text.match(/^```(\w*)/);
        const language = match ? match[1] : "";

        // // Mark the opening line as CodeBlockStart
        children.push(cx.elt("CodeBlockStart", cx.lineStart, cx.lineStart + 3));

        if (language) {
          children.push(
            cx.elt(
              "CodeBlockLanguage",
              cx.lineStart + 3,
              cx.lineStart + line.text.length,
            ),
          );
        }

        let nextLine = cx.peekLine();

        let hasEnd = false;

        while (cx.nextLine()) {
          // Parse the content until the closing ```
          if (nextLine.startsWith("```")) {
            children.push(
              cx.elt(
                "CodeBlockEnd",
                cx.lineStart,
                cx.lineStart + nextLine.length,
              ),
            );
            cx.nextLine();
            hasEnd = true;
            break;
          }
          children.push(
            cx.elt(
              "CodeBlockContent",
              cx.lineStart,
              cx.lineStart + nextLine.length,
            ),
          );
          nextLine = cx.peekLine();
        }

        cx.addElement(
          cx.elt(
            "CodeBlock",
            children[0].from,
            children[children.length - 1].to,
            children,
          ),
        );

        return hasEnd;
      },
      before: "FencedCode",
    },
  ],
};
