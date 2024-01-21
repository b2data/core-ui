import { KeyboardEvent } from "react";

import { DataBlockType, DataBlockVariant } from "../model";

export const listenMarkdownEvent = (
  e: KeyboardEvent<HTMLElement>,
  onChange: (
    newType: DataBlockType | null,
    newData: Partial<DataBlockVariant["data"]>,
  ) => void,
) => {
  const content = e.currentTarget.textContent;
  const html = e.currentTarget.innerHTML;

  if (content === "# ") {
    onChange(DataBlockType.Header, {
      tag: "h1",
      text: html.replace("#&nbsp;", ""),
    });
  } else if (content === "## ") {
    onChange(DataBlockType.Header, {
      tag: "h2",
      text: html.replace("##&nbsp;", ""),
    });
  } else if (content === "### ") {
    onChange(DataBlockType.Header, {
      tag: "h3",
      text: html.replace("###&nbsp;", ""),
    });
  } else if (content === "#### ") {
    onChange(DataBlockType.Header, {
      tag: "h4",
      text: html.replace("####&nbsp;", ""),
    });
  } else if (content === "##### ") {
    onChange(DataBlockType.Header, {
      tag: "h5",
      text: html.replace("#####&nbsp;", ""),
    });
  } else if (content === "###### ") {
    onChange(DataBlockType.Header, {
      tag: "h6",
      text: html.replace("######&nbsp;", ""),
    });
  }

  if (e.currentTarget.tagName === "P") {
    let content = html;

    if (
      content.includes("<li>-&nbsp;</li>") ||
      content.includes("<li>+&nbsp;</li>") ||
      content.includes("<li>*&nbsp;</li>")
    ) {
      content = html
        .replace(/<li>-&nbsp;<\/li>/g, "<ul><li></li></ul>")
        .replace(/<li>\+&nbsp;<\/li>/g, "<ul><li></li></ul>")
        .replace(/<li>\*&nbsp;<\/li>/g, "<ul><li></li></ul>");
    }

    if (
      e.currentTarget.childNodes[0]?.nodeType === 3 &&
      (content.includes("-&nbsp;") ||
        content.includes("+&nbsp;") ||
        content.includes("*&nbsp;"))
    ) {
      content = html
        .replace(/-&nbsp;/g, "<ul><li></li></ul>")
        .replace(/\+&nbsp;/g, "<ul><li></li></ul>")
        .replace(/\*&nbsp;/g, "<ul><li></li></ul>");
    }

    if (
      content.includes("<div>-&nbsp;</div>") ||
      content.includes("<div>+&nbsp;</div>") ||
      content.includes("<div>*&nbsp;</div>")
    ) {
      content = html
        .replace(/<div>-&nbsp;<\/div>/g, "<ul><li></li></ul>")
        .replace(/<div>\+&nbsp;<\/div>/g, "<ul><li></li></ul>")
        .replace(/<div>\*&nbsp;<\/div>/g, "<ul><li></li></ul>");
    }

    if (content.includes("1.&nbsp;")) {
      content = html.replace(/1.&nbsp;/g, "<ol><li></li></ol>");
    }

    if (content.includes("<div>1.&nbsp;</div>")) {
      content = html.replace(/<div>1.&nbsp;<\/div>/g, "<ol><li></li></ol>");
    }

    if (content !== html) {
      onChange(DataBlockType.Paragraph, {
        text: content,
      });
    }
  }
};
