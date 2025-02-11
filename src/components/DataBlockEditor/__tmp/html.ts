import { KeyboardEvent, UIEvent } from "react";

const format = (html: string) =>
  html.replace(/&nbsp;/g, "").replace(/>\s*\n\s*</g, "><");

export const isHtmlEqual = (html1: string, html2: string) => {
  return format(html1) === format(html2);
};

export const insertSubListItemElement = () => {
  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);

  const parentElement = getParentElement(range?.startContainer);
  const block = getBlockByNode(range?.startContainer, ".block-list-item");
  const list = block?.closest(".block-list");

  if (block?.textContent?.replace(/-/g, "").trim() === "") {
    const cloneBlock = block.cloneNode(true) as Element;
    block.remove();
    if (list?.classList?.contains("block-list-root")) {
      const block = insertNextEmptyBlock(list as Element, "afterend");
      block?.insertAdjacentText("beforebegin", "\n");
    } else {
      const prevItem = list?.closest(".block-list-item");
      prevItem?.insertAdjacentElement("afterend", cloneBlock);
    }
    return;
  }

  if (range && selection && block) {
    const li = document.createElement("li");
    li.className = "block block-list-item";

    const bullet = document.createElement("span");
    bullet.className = "formatting-bullet";
    bullet.innerHTML = "-&nbsp;";

    const text = document.createElement("p");
    text.className = "block block-text";
    text.innerHTML = "";

    li.appendChild(bullet);
    li.appendChild(text);

    const addAfter =
      parentElement?.classList.contains("block-list-item") ||
      parentElement?.classList.contains("block-text");

    block.insertAdjacentElement(addAfter ? "afterend" : "beforebegin", li);
    range.deleteContents();

    range.setStartAfter(text);
    range.setEndAfter(text);
    selection.removeAllRanges();
    selection.addRange(range);

    text.focus();
  }
};

export const moveListItemElement = (dir: "back" | "forward") => {
  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);

  const listItem = getBlockByNode(range?.startContainer, ".block-list-item");

  const list = listItem?.closest(".block-list");

  if (range && selection && list && listItem) {
    const pos = Array.from(list.children).indexOf(listItem as Element);
    const newListItem = listItem.cloneNode(true) as Element;

    if (dir === "back" && !list.classList.contains("block-list-root")) {
      const cloneList = list.cloneNode(true) as Element;
      const nextItems = Array.from(cloneList.children).slice(pos + 1);

      const ul = document.createElement("ul");
      ul.className = "block block-list";

      const existedUl = Array.from(newListItem.children).find(
        (c) => c.nodeName === "UL",
      );

      if (existedUl || nextItems.length) {
        ul.innerHTML = existedUl?.innerHTML || "";
        existedUl?.remove();
        nextItems.forEach((item) => ul.appendChild(item));
        newListItem.appendChild(ul);
      }

      if (ul?.childElementCount) {
        newListItem.appendChild(ul);
      }

      const prevItem = list.closest(".block-list-item");
      prevItem?.insertAdjacentElement("afterend", newListItem as Element);

      if (pos === 0) {
        list.remove();
      } else {
        const removeItems = Array.from(list.children).slice(pos + 1);
        list.removeChild(listItem);
        removeItems.forEach((item) => list.removeChild(item));
      }
    }

    if (dir === "forward" && pos !== 0) {
      const prevItem = list.children[pos - 1];

      const existedUlIndex = Array.from(prevItem.children).findIndex(
        (c) => c.nodeName === "UL",
      );

      if (existedUlIndex > -1) {
        prevItem.children[existedUlIndex].appendChild(newListItem);
      } else {
        const ul = document.createElement("ul");
        ul.className = "block block-list";
        ul.appendChild(newListItem);
        prevItem.appendChild(ul);
      }

      listItem.remove();
    }

    range.deleteContents();
    range.setStartAfter(newListItem.childNodes[1]);
    range.setEndAfter(newListItem.childNodes[1]);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export const insertEmptyElement = (el?: Element) => {
  const br = document.createElement("br");
  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);
  if (range && selection) {
    range.deleteContents();
    if (el) {
      el.insertAdjacentElement("afterend", br);
    } else {
      range.insertNode(br);
    }
    range.setStartAfter(br);
    range.setEndAfter(br);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export const insertEmptyNewLine = () => {
  const textNode = document.createTextNode("\n");
  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);
  if (range && selection) {
    range.deleteContents();
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export const insertNextEmptyBlock = (
  el: Element,
  insertPosition: InsertPosition = "afterend",
) => {
  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);
  if (range && el && selection) {
    const p = document.createElement("p");
    const br = document.createElement("br");
    p.className = "block block-text";
    p.appendChild(br);
    range.deleteContents();
    el.insertAdjacentElement(insertPosition, p);
    range.setStartAfter(br);
    range.setEndAfter(br);
    selection.removeAllRanges();
    selection.addRange(range);
    br.focus();
    return p;
  }
};

export const getParentElement = (container?: Node) => {
  return (
    container?.nodeType === Node.ELEMENT_NODE
      ? container
      : container?.parentElement
  ) as Element | null;
};

export const getBlockByNode = (container?: Node, selector = ".block") => {
  const el = (
    container?.nodeType === Node.ELEMENT_NODE
      ? container
      : container?.parentElement
  ) as Element | null;

  if (el?.getAttribute("contenteditable")) {
    return el.lastElementChild;
  }

  const closest = el?.closest(selector);

  return closest || el;
};

export const selectContentOfElement = (el: Element) => {
  const content = el.querySelector(".content");
  if (content) {
    const range = document.createRange();
    range.selectNodeContents(content);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};

export const replaceSelectionWithInlineCode = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-code");

    if (
      inline?.classList.contains("inline-code") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const code = document.createElement("code");
      code.className = "inline-code";
      code.innerHTML = `<span class="formatting">\`</span><span class="content">${selection.toString().replace(/`/g, "")}</span><span class="formatting">\`</span>`;
      range.deleteContents();
      range.insertNode(code);
      selectContentOfElement(code);
    }
  }
};

export const replaceSelectionWithStrikeThrough = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-strikethrough");

    if (
      inline?.classList.contains("inline-strikethrough") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const del = document.createElement("del");
      del.className = "inline-strikethrough";
      del.innerHTML = `<span class="formatting">~~</span><span class="content">${selection.toString()}</span><span class="formatting">~~</span>`;
      range.deleteContents();
      range.insertNode(del);
      selectContentOfElement(del);
    }
  }
};

export const replaceSelectionWithUnderline = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-underline");

    if (
      inline?.classList.contains("inline-underline") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const u = document.createElement("u");
      u.className = "inline-underline";
      u.innerHTML = `<span class="formatting">&lt;u&gt;</span><span class="content">${selection.toString()}</span><span class="formatting">&lt;/u&gt;</span>`;
      range.deleteContents();
      range.insertNode(u);
      selectContentOfElement(u);
    }
  }
};

export const replaceSelectionWithItalic = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-italic");

    if (
      inline?.classList.contains("inline-italic") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const em = document.createElement("em");
      em.className = "inline-italic";
      em.innerHTML = `<span class="formatting">_</span><span class="content">${selection.toString()}</span><span class="formatting">_</span>`;
      range.deleteContents();
      range.insertNode(em);
      selectContentOfElement(em);
    }
  }
};

export const replaceSelectionWithBold = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-bold");

    if (
      inline?.classList.contains("inline-bold") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const strong = document.createElement("strong");
      strong.className = "inline-bold";
      strong.innerHTML = `<span class="formatting">**</span><span class="content">${selection.toString()}</span><span class="formatting">**</span>`;
      range.deleteContents();
      range.insertNode(strong);
      selectContentOfElement(strong);
    }
  }
};

export const replaceSelectionWithMark = (e: UIEvent) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    e.preventDefault();
    const range = selection.getRangeAt(0);
    const container = range.startContainer as HTMLElement;
    const inline = getBlockByNode(container, ".inline-highlight");

    if (
      inline?.classList.contains("inline-highlight") &&
      inline.querySelector(".content")?.textContent === selection.toString()
    ) {
      const text = document.createTextNode(selection.toString());
      inline.replaceWith(text);
      range.deleteContents();
      range.insertNode(text);
    } else {
      const mark = document.createElement("mark");
      mark.className = "inline-highlight";
      mark.innerHTML = `<span class="formatting">==</span><span class="content">${selection.toString()}</span><span class="formatting">==</span>`;
      range.deleteContents();
      range.insertNode(mark);
      selectContentOfElement(mark);
    }
  }
};

export const prefillClosingChar = (e: KeyboardEvent) => {
  const closingMap: Record<string, string> = {
    "[": "]",
    "(": ")",
    "{": "}",
    "@": "@",
  };

  if (closingMap[e.key]) {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (selection && range) {
      const textNode = range?.startContainer;
      const offset = range.startOffset;

      textNode.textContent =
        textNode.textContent?.slice(0, offset) +
        closingMap[e.key] +
        textNode.textContent?.slice(offset);

      range.setStart(textNode, offset);
      range.setEnd(textNode, offset);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};

export const deleteClosingChar = () => {
  const afterMap: Record<string, string> = {
    "[": "]",
    "(": ")",
    "{": "}",
    "@": "@",
  };

  const selection = window.getSelection();
  const range = selection?.getRangeAt(0);

  if (selection && range) {
    const textNode = range?.startContainer;
    const text = textNode.textContent || "";
    const offset = range.startOffset;

    if (
      afterMap[text.charAt(offset - 1)] &&
      afterMap[text.charAt(offset - 1)] === text[offset]
    ) {
      textNode.textContent = text.slice(0, offset - 1) + text.slice(offset);
      range.setStart(textNode, offset);
      range.setEnd(textNode, offset);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};
