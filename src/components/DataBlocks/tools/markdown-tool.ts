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
    let text = html;

    if (
      text.includes("<li>-&nbsp;</li>") ||
      text.includes("<li>+&nbsp;</li>") ||
      text.includes("<li>*&nbsp;</li>")
    ) {
      text = html
        .replace(/<li>-&nbsp;<\/li>/g, "<ul><li></li></ul>")
        .replace(/<li>\+&nbsp;<\/li>/g, "<ul><li></li></ul>")
        .replace(/<li>\*&nbsp;<\/li>/g, "<ul><li></li></ul>");
    }

    if (
      e.currentTarget.childNodes[0]?.nodeType === 3 &&
      (text.includes("-&nbsp;") ||
        text.includes("+&nbsp;") ||
        text.includes("*&nbsp;"))
    ) {
      text = html
        .replace(/-&nbsp;/g, "<ul><li></li></ul>")
        .replace(/\+&nbsp;/g, "<ul><li></li></ul>")
        .replace(/\*&nbsp;/g, "<ul><li></li></ul>");
    }

    if (
      text.includes("<div>-&nbsp;</div>") ||
      text.includes("<div>+&nbsp;</div>") ||
      text.includes("<div>*&nbsp;</div>")
    ) {
      text = html
        .replace(/<div>-&nbsp;<\/div>/g, "<ul><li></li></ul>")
        .replace(/<div>\+&nbsp;<\/div>/g, "<ul><li></li></ul>")
        .replace(/<div>\*&nbsp;<\/div>/g, "<ul><li></li></ul>");
    }

    if (text.includes("1.&nbsp;")) {
      text = html.replace(/1.&nbsp;/g, "<ol><li></li></ol>");
    }

    if (text.includes("<div>1.&nbsp;</div>")) {
      text = html.replace(/<div>1.&nbsp;<\/div>/g, "<ol><li></li></ol>");
    }

    if (text !== html) {
      onChange(DataBlockType.Paragraph, {
        text,
      });
    }
  }
};
