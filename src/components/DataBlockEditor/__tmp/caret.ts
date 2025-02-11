// @ts-nocheck

/**
 * Get caret position in editablecontent
 */
const getParent = (n) => {
  if (n?.getAttribute?.("contenteditable")) {
    return n;
  }
  return getParent(n.parentNode);
};

export const getCaretPosition = () => {
  let caretPos = -1;
  const sel = window.getSelection();
  if (sel && sel?.getRangeAt) {
    const _range = sel.getRangeAt(0);

    if (!_range.collapsed) {
      return null;
    }
    const target = getParent(sel.anchorNode);
    const range = _range.cloneRange();
    const temp = document.createTextNode("\0");
    range.insertNode(temp);
    caretPos = target.innerText.indexOf("\0");
    temp.parentNode.removeChild(temp);
  }

  return caretPos;
};

/**
 * Set caret position in DIV
 */

export const setCaretPosition = (div: HTMLElement, toStart = false) => {
  if (window.getSelection && document.createRange) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(div);
    range.collapse(toStart);
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document.body.createTextRange) {
    const textRange = document.body.createTextRange();
    textRange.moveToElementText(div);
    textRange.collapse(toStart);
    textRange.select();
  }
  div.focus();
};

export const saveCaretPosition = (div: Element | null) => {
  const selection = window.getSelection();
  if (selection?.type !== "Caret" || !div) return null;

  const range = selection?.getRangeAt(0);
  if (!range) return null;

  let offset = 0;

  const traverseNodes = (node: Node) => {
    if (node === range.endContainer) {
      // If we reached the end container, add the offset within the node
      offset += range.endOffset;
      return true; // Stop traversal
    }

    if (node.nodeType === Node.TEXT_NODE) {
      // Add the text node's length
      offset += node.textContent!.length;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      if (element.tagName === "BR") {
        // Treat <br> as a single line break (\n)
        offset += 1;
      }
    }

    // Traverse child nodes recursively
    for (const child of node.childNodes) {
      if (traverseNodes(child)) return true;
    }
    return false;
  };

  traverseNodes(div);
  return offset;
};

export const restoreCaretPosition = (
  div: Element | null,
  caretOffset: number | null,
) => {
  if (caretOffset === null || !div) return;

  const range = document.createRange();
  const selection = window.getSelection();
  let currentOffset = 0;

  if (caretOffset === 0) {
    range.selectNodeContents(div);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    return;
  }

  const traverseNodes = (node: Node): boolean => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textLength = node.textContent!.length;
      // We need this to set correctly caret position when creating new LI
      if (currentOffset + textLength >= caretOffset) {
        if ("- " === node.textContent) {
          caretOffset += 2;
        }
      }
      if (currentOffset + textLength >= caretOffset) {
        range.setStart(node, caretOffset - currentOffset);
        range.collapse(true);
        return true; // Stop traversal
      }
      currentOffset += textLength;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      if (element.tagName === "BR") {
        // Treat <br> as a single character
        currentOffset += 1;
      }

      // Traverse child nodes
      for (const child of node.childNodes) {
        if (traverseNodes(child)) return true;
      }
    }
    return false;
  };

  const status = traverseNodes(div);

  if (!status) {
    range.selectNodeContents(div);
    range.collapse();
  }

  selection?.removeAllRanges();
  selection?.addRange(range);
};
