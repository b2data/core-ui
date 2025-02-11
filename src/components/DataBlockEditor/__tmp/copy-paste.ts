import { ClipboardEvent } from "react";

import { formatHtml } from "./marked";
import { formatMarkdown } from "./turndown";

export const copySelectedAsMarkdown = (e: ClipboardEvent) => {
  e.preventDefault();
  const range = window.getSelection()?.getRangeAt(0);

  if (range) {
    const div = document.createElement("div");
    div.appendChild(range.cloneContents());

    navigator.clipboard.writeText(formatMarkdown(div.innerHTML));
  }
};

export const pasteBufferAsHtml = (e: ClipboardEvent) => {
  e.preventDefault();

  const html = formatHtml(e.clipboardData.getData("text/plain"));

  document.execCommand("insertHTML", false, html);
};
