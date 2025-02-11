// import { ClipboardEvent, FocusEvent, useRef, useState } from "react";
// import TurndownService from "turndown";

// import { MarkdownFieldProps } from "./MarkdownField";

// const turndownService = new TurndownService({
//   headingStyle: "atx",
//   hr: "---",
//   br: "\n",
//   bulletListMarker: "-",
//   codeBlockStyle: "fenced",
//   emDelimiter: "_",
//   fence: "```",
//   strongDelimiter: "**",
//   linkStyle: "inlined",
//   linkReferenceStyle: "full",
//   // preformattedCode: true,
// });

// export const handlePasteAsPlainText = (e: React.ClipboardEvent) => {
//   e.preventDefault();
//   const text = e.clipboardData.getData("text/plain");
//   const selection = window.getSelection();
//   if (!selection?.rangeCount) return;
//   selection.deleteFromDocument();
//   selection.getRangeAt(0).insertNode(document.createTextNode(text));
//   selection.collapseToEnd();
// };

// export const handlePasteAsMarkdown = (e: React.ClipboardEvent) => {
//   e.preventDefault();
//   const text = turndownService.turndown(e.clipboardData.getData("text/html"));
//   const selection = window.getSelection();
//   if (!selection?.rangeCount) return;
//   selection.deleteFromDocument();
//   selection.getRangeAt(0).insertNode(document.createTextNode(text));
//   selection.collapseToEnd();
// };

// export const useConfig = ({
//   readOnly,
//   disabled,
//   placeholder,
//   plain,
//   value,
//   onBlur,
//   onFocus,
//   onPaste,
//   onKeyDown,
//   onKeyUp,
// }: MarkdownFieldProps) => {
//   const ref = useRef<HTMLElement>();
//   const [isFocused, setIsFocused] = useState(false);
//   const [state, setState] = useState(0);

//   return {
//     state,
//     ref,
//     isFocused,
//     contentEditable: !disabled && !readOnly,
//     suppressContentEditableWarning: !disabled && !readOnly,
//     "data-placeholder": placeholder,
//     onFocus: (e: FocusEvent<HTMLElement>) => {
//       if (disabled) return;
//       setIsFocused(false);
//       if (readOnly) return;

//       e.target.innerHTML =
//         value || turndownService.turndown(e.target.innerHTML);
//       setIsFocused(true);
//       onFocus?.(e);
//     },
//     onBlur: (e: FocusEvent<HTMLElement>) => {
//       if (disabled) return;
//       setIsFocused(false);
//       if (readOnly) return;
//       if (e.target.innerHTML === "<br>") {
//         e.target.innerHTML = "";
//       } else {
//         e.target.innerHTML = e.target.innerHTML.replace(/<br>/, "\n");
//       }
//       setState((prev) => prev + 1);
//       onBlur?.(e);
//     },
//     onPaste: (e: ClipboardEvent<HTMLElement>) => {
//       if (disabled) return;
//       if (plain) {
//         handlePasteAsPlainText(e);
//       } else {
//         handlePasteAsMarkdown(e);
//       }
//       onPaste?.(e);
//     },
//     onKeyDown,
//     onKeyUp,
//   };
// };
