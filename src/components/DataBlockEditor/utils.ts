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
 * Set caret postion in DIV
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

export const formatUserName = (
  user: { firstName?: string; lastName?: string; middleName?: sting } = {},
  { short = false }: { short?: boolean } = {},
) =>
  short
    ? `${user?.firstName?.charAt(0) || ""}${user?.lastName?.charAt(0) || ""}`
    : `${user?.firstName || ""}${
        user?.middleName ? ` ${user?.middleName}` : ""
      }${user?.lastName ? ` ${user?.lastName}` : ""}`;
