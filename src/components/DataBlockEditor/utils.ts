// @ts-nocheck

/**
 * Get caret position in DIV
 */
export const getCaretPosition = (div: HTMLElement) => {
  let caretPos = 0;

  if (window.getSelection) {
    const sel = window.getSelection();
    if (sel && sel?.getRangeAt) {
      const range = sel.getRangeAt(0);
      caretPos = range.startOffset;
      if (!sel?.anchorNode?.classList?.contains("MuiTypography-root")) {
        const childNodes = sel?.anchorNode?.parentNode?.childNodes;
        if (childNodes?.length) {
          for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i] == sel.anchorNode) {
              break;
            }
            if (childNodes[i].outerHTML) {
              caretPos += childNodes[i].outerHTML.length;
            } else if (childNodes[i].nodeType == 3) {
              caretPos += childNodes[i].textContent.length;
            }
          }
        }
      }
    }
  } else if (document.selection && document.selection.createRange) {
    const range = document.selection.createRange();

    if (range.parentElement() == div) {
      const tempEl = document.createElement("span");
      div.insertBefore(tempEl, div.firstChild);
      const tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
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
