import { filter } from "ramda";
import TurndownService from "turndown";

const turndownService = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  br: "<br>",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_",
  fence: "```",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  preformattedCode: true,
});

const removeFormatting = (html: string) => {
  // regexp to remove all html tags with class formatting
  return html
    .replace(/<[^>]*class="[^"]*formatting[^"]*"[^>]*>(.*?)<\/[^>]*>/g, "")
    .replace(/<\/?[^>]+(>|$)/g, "");
};

const fillMissedSpaces = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;

  const addDataSpaceAttribute = (node: Node) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.textContent?.endsWith(" ")) {
          (child as HTMLElement).setAttribute("data-space", "true");
        }
      } else if (child.childNodes.length) {
        addDataSpaceAttribute(child);
      }
    });
  };

  addDataSpaceAttribute(div);

  return div.innerHTML;
};

turndownService.remove(["script", "style", "title"]);

turndownService.addRule("heading", {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function (content, node) {
    let hLevel = 0;

    node.childNodes.forEach((child) => {
      if ((child as HTMLElement).classList.contains("formatting")) {
        hLevel = child.textContent!.replace(/[^#]/g, "").length || hLevel;
      }
    });

    if (!hLevel || hLevel > 6) {
      return content;
    }

    const hPrefix = "#".repeat(hLevel);
    const hContent = content.split("");

    while (hContent[0] === "#") {
      hContent.shift();
    }

    return `${hPrefix} ${hContent.join("")}\n`;
  },
});

turndownService.addRule("strikethrough", {
  filter: function (node) {
    return (
      ("DEL" === node.nodeName || "S" === node.nodeName) &&
      node.className.includes("inline-strikethrough")
    );
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("underline", {
  filter: ["u", "s", "ins"],
  replacement: function (content) {
    const hasBothTags =
      content.includes("&lt;u&gt;") && content.includes("&lt;/u&gt;");

    content = content.replace(/&lt;u&gt;/g, "").replace(/&lt;\/u&gt;/g, "");

    return hasBothTags ? `<u>${content}</u>` : content;
  },
});

turndownService.addRule("bold", {
  filter: function (node) {
    return (
      ("B" === node.nodeName || "STRONG" === node.nodeName) &&
      node.className.includes("inline-bold")
    );
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("italic", {
  filter: function (node) {
    return (
      ("I" === node.nodeName || "EM" === node.nodeName) &&
      node.className.includes("inline-italic")
    );
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("highlight", {
  filter: function (node) {
    return (
      "MARK" === node.nodeName && node.className.includes("inline-highlight")
    );
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("highlightedCodeBlock", {
  filter: function (node) {
    const parts = node.textContent!.split("");
    return Boolean(
      ("DIV" === node.nodeName && "PRE" === node.firstChild?.nodeName) ||
        parts.filter(
          (c, i) => c === "`" && parts[i - 1] === "`" && parts[i - 2] === "`",
        ).length === 2,
    );
  },
  replacement: function (content, node, options) {
    const lang =
      (
        (node.firstChild as HTMLElement).childNodes[0]?.textContent || ""
      ).replace(/`/g, "") || " ";

    if (content.split("").filter((c) => c === "`").length < 6) {
      return content;
    }

    const html =
      node.firstChild?.nodeName === "PRE"
        ? (node.firstChild as HTMLElement).innerHTML
        : (node as HTMLElement).innerHTML;

    return (
      "\n\n" +
      options.fence +
      lang +
      "\n" +
      removeFormatting(html.replace(/```/g, "")) +
      "\n" +
      options.fence +
      "\n\n"
    );
  },
});

turndownService.addRule("code", {
  filter: function (node) {
    return "CODE" === node.nodeName && node.className.includes("inline-code");
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("link", {
  filter: function (node) {
    return "A" === node.nodeName && node.className.includes("inline-link");
  },
  replacement: function (content, node) {
    return node.textContent || content;
  },
});

turndownService.addRule("mention", {
  filter: function (node) {
    return node.className.includes("inline-mention");
  },
  replacement: function (content, node) {
    if (content.split("").filter((c) => c === "@").length !== 2) {
      return node.textContent || content;
    }
    const id = (node as Element).getAttribute("data-id");
    const avatar = (node as Element).getAttribute("data-avatar");
    const text = (node.textContent || content).replace(/@/g, "");
    return `@${text}${id || avatar ? `|${id || ""}|${avatar || ""}` : ``}@`;
  },
});

turndownService.addRule("reference", {
  filter: function (node) {
    return node.className.includes("inline-reference");
  },
  replacement: function (content, node) {
    if (
      !content.includes("[[") ||
      !content.includes("]]") ||
      content.split("").filter((c) => c === "[").length !== 2 ||
      content.split("").filter((c) => c === "]").length !== 2
    ) {
      return node.textContent || content;
    }
    const id = (node as Element).getAttribute("data-id");
    const versionId = (node as Element).getAttribute("data-version-id");
    const blockId = (node as Element).getAttribute("data-block-id");
    return `[[${(node.textContent || content).replace(/\[|\]/g, "")}|${id || ""}_${versionId || ""}_${blockId || ""}]]`;
  },
});

turndownService.addRule("list", {
  filter: function (node) {
    return node.classList.contains("block-list-root");
  },
  replacement: function (_, node) {
    const transformList = (listElement: Element, indentLevel: number = 0) => {
      let result = "";

      const indent = "  ".repeat(indentLevel);

      Array.from(listElement.children).forEach((listItemNode) => {
        const li = listItemNode.cloneNode(true) as Element;
        const nestedList = Array.from(li.children).find(
          (c) => c.nodeName === "UL" || c.nodeName === "OL",
        );
        if (nestedList) {
          li.removeChild(nestedList);
        }
        const bullet = Array.from(li.children).find((c) =>
          c.className.includes("formatting-bullet"),
        );
        const checkbox = Array.from(li.children).find((c) =>
          c.className.includes("inline-checkbox"),
        );

        if (bullet) {
          li.removeChild(bullet);
        }
        if (checkbox) {
          li.removeChild(checkbox);
        }

        const bulletText = (bullet?.textContent || "").replace(/-/, "").trim();
        const checkboxText = checkbox
          ? checkbox.textContent?.match(/\[\s\]/)
            ? "[ ] "
            : "[x] "
          : "";
        const text = bulletText + checkboxText + li.textContent || "";

        result += `${indent}- ${text || "&nbsp;"}\n\n`;

        if (nestedList) {
          result += transformList(nestedList as Element, indentLevel + 1);
        }
      });

      return result;
    };

    return `\n\n${transformList(node as Element)}\n\n`;
  },
});

turndownService.addRule("hr", {
  filter: function (node) {
    return node.className.includes("block-hr");
  },
  replacement: function (_, node, options) {
    const content = node.querySelector(".formatting")?.textContent || "";
    const showHr = content.split("").filter((c) => c === "-").length === 3;
    const [p1, p2] = content.split("---");
    return !showHr
      ? content
      : `${p1 || ""}\n\n${options.hr}\n\n${p2 ? p2 + "\n\n" : ""}`;
  },
});

turndownService.addRule("paragraph", {
  filter: function (node) {
    const parts = node.textContent!.split("");
    return (
      node.className.includes("block-text") &&
      parts.filter(
        (c, i) => c === "`" && parts[i - 1] === "`" && parts[i - 2] === "`",
      ).length != 2
    );
  },
  replacement: function (content, node) {
    const spaceCode =
      [" ", " ", "&nbsp;"].includes(content[content.length - 1]) ||
      (node as HTMLElement).getAttribute("data-space") === "true"
        ? "&nbsp;"
        : "";

    return `\n\n${content.trim()}${spaceCode}\n\n`;
  },
});

turndownService.escape = function (str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export const formatMarkdown = (html: string) => {
  return turndownService.turndown(fillMissedSpaces(html));
};
