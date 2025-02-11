// import {
//   FormEvent,
//   KeyboardEvent,
//   UIEvent,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useRef,
// } from "react";

// import { useDeepEqualMemo, uuid } from "../../../hooks";
// import { DataBlockBase, DataBlockVariant } from "../models";
// import { DataBlockEditorAction, DataBlockEditorContext } from "../store";
// import {
//   addShortcutEvent,
//   navigationEvent,
//   useInlinePopperTool,
// } from "../tools";
// import {
//   copySelectedAsMarkdown,
//   deleteClosingChar,
//   formatHtml,
//   formatMarkdown,
//   getBlockByNode,
//   getParentElement,
//   insertEmptyNewLine,
//   insertNextEmptyBlock,
//   insertSubListItemElement,
//   isHtmlEqual,
//   moveListItemElement,
//   pasteBufferAsHtml,
//   prefillClosingChar,
//   replaceSelectionWithBold,
//   replaceSelectionWithInlineCode,
//   replaceSelectionWithItalic,
//   replaceSelectionWithMark,
//   replaceSelectionWithStrikeThrough,
//   replaceSelectionWithUnderline,
//   restoreCaretPosition,
//   saveCaretPosition,
//   setCaretPosition,
// } from "../utils";

// export const useBlockData = ({
//   block,
//   variant,
//   index,
//   editable,
//   ref,
// }: {
//   block: Omit<DataBlockBase, "variants">;
//   variant: DataBlockVariant;
//   index: number;
//   editable?: boolean;
//   ref: React.MutableRefObject<HTMLElement | null>;
// }) => {
//   const {
//     state: { currentUserId, focused },
//     dispatch,
//   } = useContext(DataBlockEditorContext);

//   const mdRef = useRef<string>("");

//   const { popper: inlinePopper, trackPopperChanges } = useInlinePopperTool();

//   const handleAddBlock = useCallback(
//     (type = "text", data: DataBlockVariant["data"] = {}, i: number = 0) => {
//       setTimeout(
//         () =>
//           dispatch({
//             action: DataBlockEditorAction.AddBlock,
//             data: {
//               block: {
//                 id: uuid(),
//                 type,
//                 number: index + i + 2,
//                 offset: block.offset,
//                 createdBy: currentUserId,
//               },
//               variant: {
//                 id: uuid(),
//                 data,
//                 isCurrent: true,
//                 createdBy: currentUserId,
//               },
//               index: index + i + 1,
//             },
//           }),
//         0,
//       );
//     },
//     [index, block.offset],
//   );

//   const handleDeleteBlock = useCallback(
//     (e?: UIEvent) => {
//       e?.preventDefault();
//       dispatch({
//         action: DataBlockEditorAction.DeleteBlock,
//         data: {
//           id: block.id,
//         },
//       });
//       dispatch({
//         action: DataBlockEditorAction.SetFocused,
//         data: {
//           index: Math.max(0, index - 1),
//           focusedEnd: false,
//         },
//       });
//     },
//     [index, block.id],
//   );

//   const handleUpdateBlock = useCallback(
//     (
//       blockData: Partial<
//         Pick<DataBlockBase, "type" | "offset" | "hidePrefix">
//       > = {},
//       variantData: DataBlockVariant["data"] = {},
//     ) => {
//       dispatch({
//         action: DataBlockEditorAction.EditBlock,
//         data: {
//           block: {
//             ...block,
//             type: blockData.type || block.type,
//             offset: blockData.offset ?? block.offset,
//             hidePrefix: blockData.hidePrefix ?? block.hidePrefix,
//             id: block.id,
//           },
//           variant: {
//             ...variant,
//             data: { ...variant.data, ...variantData },
//           },
//         },
//       });
//     },
//     [useDeepEqualMemo(block), useDeepEqualMemo(variant)],
//   );

//   const handleUpdateHtml = useCallback((currentHtml: string) => {
//     const newMd = formatMarkdown(currentHtml);
//     const newHtml = formatHtml(newMd);

//     const caretOffset = saveCaretPosition(ref.current);
//     const currentChar = newMd.charAt(caretOffset || 0);

//     if (!isHtmlEqual(currentHtml, newHtml)) {
//       mdRef.current = newMd;
//       ref.current!.innerHTML = newHtml;

//       setTimeout(() => restoreCaretPosition(ref.current, caretOffset), 0);
//     }
//   }, []);

//   const handleBlur = useCallback(() => {
//     const newText = formatMarkdown(ref.current!.innerHTML);
//     let newType = "text";
//     if (newText.startsWith("#")) {
//       newType = "header";
//     }
//     // TODO: switch type, data ??
//     if (newType !== block.type || newText !== variant.data.text) {
//       handleUpdateBlock({ type: newType }, { text: newText });
//     }
//   }, [handleUpdateBlock, useDeepEqualMemo(block), useDeepEqualMemo(variant)]);

//   const handleFocus = useCallback(() => {
//     // dispatch({
//     //   action: DataBlockEditorAction.SetFocused,
//     //   data: { index },
//     // });
//   }, [index]);

//   const handlePressEnter = useCallback(
//     (e: KeyboardEvent) => {
//       e.preventDefault();

//       const selection = window.getSelection();
//       if (selection && selection.rangeCount > 0) {
//         const range = selection.getRangeAt(0);
//         const container = range.startContainer;

//         const block = getBlockByNode(container);
//         const parentElement = getParentElement(container);

//         // Logic for `.block-code`
//         if (parentElement && block && block.classList.contains("block-code")) {
//           if (parentElement.classList.contains("formatting-end")) {
//             handleAddBlock();
//           } else if (parentElement.classList.contains("formatting-start")) {
//             range.selectNodeContents(parentElement.nextElementSibling!);
//             range.collapse(true);
//           } else {
//             const pos = saveCaretPosition(ref.current);
//             if (
//               pos &&
//               pos > `${parentElement.textContent}`?.length &&
//               parentElement.textContent?.substring(
//                 parentElement.textContent?.length - 1,
//               ) !== "\n"
//             ) {
//               insertEmptyNewLine();
//             }
//             insertEmptyNewLine();
//           }
//           return;
//         }

//         // Logic for `.block-list`
//         const parentList = getBlockByNode(container, ".block-list");
//         if (parentList?.classList.contains("block-list")) {
//           insertSubListItemElement();
//           return;
//         }

//         handleAddBlock();
//       }
//     },
//     [handleAddBlock, handleUpdateHtml],
//   );

//   const handlePressTab = useCallback(
//     (e: KeyboardEvent) => {
//       e.preventDefault();

//       if (saveCaretPosition(ref.current) === 0 && !block.hidePrefix) {
//         handleUpdateBlock({
//           offset: Math.max(0, block.offset + (e.shiftKey ? -1 : 1)),
//         });
//         return;
//       }

//       const range = window.getSelection()?.getRangeAt(0);
//       if (range) {
//         const parentList = getBlockByNode(range.startContainer, ".block-list");
//         if (parentList?.classList.contains("block-list")) {
//           moveListItemElement(e.shiftKey ? "back" : "forward");
//         }
//       }
//     },
//     [block.offset, block.hidePrefix, handleUpdateBlock],
//   );

//   const handleChangeNavigation = useCallback(
//     (dir: "up" | "down") => {
//       dispatch({
//         action: DataBlockEditorAction.SetFocused,
//         data: {
//           index: index + (dir === "up" ? -1 : 1),
//         },
//       });
//     },
//     [index],
//   );

//   const handleAddNewLine = useCallback(
//     (e: UIEvent) => {
//       e.preventDefault();

//       const notAllowedBlocks = [
//         ".block-h1",
//         ".block-h2",
//         ".block-h3",
//         ".block-h4",
//         ".block-h5",
//         ".block-h6",
//       ];

//       if (
//         notAllowedBlocks.some((selector) =>
//           ref.current?.querySelector(selector),
//         )
//       ) {
//         handleAddBlock();
//         return;
//       }

//       if (ref.current?.querySelector(".block-list")) {
//         insertSubListItemElement();
//         return;
//       }

//       const range = window.getSelection()?.getRangeAt(0);
//       const container = range?.startContainer;
//       const block = getBlockByNode(container);

//       if (block) {
//         insertNextEmptyBlock(
//           block,
//           saveCaretPosition(block) === 0 ? "beforebegin" : "afterend",
//         );
//       } else {
//         ref.current!.innerHTML = ref.current!.innerHTML + "<br>";
//       }

//       handleUpdateHtml(ref.current!.innerHTML);
//     },
//     [handleAddBlock, handleUpdateHtml],
//   );

//   const handleToggleHidePrefix = useCallback(
//     (e: KeyboardEvent) => {
//       e.preventDefault();
//       handleUpdateBlock({
//         hidePrefix: !block.hidePrefix,
//       });
//     },
//     [block.hidePrefix],
//   );

//   useEffect(() => {
//     if (focused === index && ref.current) {
//       setTimeout(() => setCaretPosition(ref.current!), 0);
//       // dispatch({
//       //   action: DataBlockEditorAction.SetFocused,
//       //   data: { index: undefined },
//       // });
//     }
//   }, [focused, index, block.id]);

//   const listeners = useMemo(
//     () =>
//       editable
//         ? {
//             onInput: (e: FormEvent<HTMLElement>) => {
//               handleUpdateHtml(e.currentTarget.innerHTML);
//             },
//             onCopy: copySelectedAsMarkdown,
//             onPaste: pasteBufferAsHtml,
//             onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
//               addShortcutEvent(e, handleAddNewLine, {
//                 shiftKey: true,
//                 code: "Enter",
//               });
//               addShortcutEvent(e, handleAddNewLine, {
//                 metaKey: true,
//                 code: "Enter",
//               });
//               addShortcutEvent(e, handlePressEnter, {
//                 metaKey: false,
//                 shiftKey: false,
//                 code: "Enter",
//               });
//               addShortcutEvent(e, handlePressTab, {
//                 code: "Tab",
//               });
//               addShortcutEvent(e, handleDeleteBlock, {
//                 metaKey: true,
//                 shiftKey: true,
//                 code: "Backspace",
//               });
//               addShortcutEvent(e, handleDeleteBlock, {
//                 isEmpty: true,
//                 code: "Backspace",
//               });
//               addShortcutEvent(e, deleteClosingChar, {
//                 metaKey: false,
//                 shiftKey: false,
//                 hasSelection: false,
//                 code: "Backspace",
//               });
//               addShortcutEvent(e, replaceSelectionWithInlineCode, {
//                 hasSelection: true,
//                 code: "Backquote",
//               });
//               addShortcutEvent(e, replaceSelectionWithStrikeThrough, {
//                 hasSelection: true,
//                 shiftKey: true,
//                 metaKey: true,
//                 code: "KeyX",
//               });
//               addShortcutEvent(e, replaceSelectionWithUnderline, {
//                 hasSelection: true,
//                 metaKey: true,
//                 code: "KeyU",
//               });
//               addShortcutEvent(e, replaceSelectionWithBold, {
//                 hasSelection: true,
//                 metaKey: true,
//                 code: "KeyB",
//               });
//               addShortcutEvent(e, replaceSelectionWithItalic, {
//                 hasSelection: true,
//                 metaKey: true,
//                 code: "KeyI",
//               });
//               addShortcutEvent(e, replaceSelectionWithMark, {
//                 metaKey: true,
//                 code: "KeyM",
//               });
//               addShortcutEvent(e, handleToggleHidePrefix, {
//                 metaKey: true,
//                 code: "KeyH",
//               });
//               addShortcutEvent(e, prefillClosingChar, {
//                 key: "[",
//                 hasSelection: false,
//               });
//               addShortcutEvent(e, prefillClosingChar, {
//                 key: "{",
//                 hasSelection: false,
//               });
//               addShortcutEvent(e, prefillClosingChar, {
//                 key: "(",
//                 hasSelection: false,
//               });
//               addShortcutEvent(e, prefillClosingChar, {
//                 key: "@",
//                 hasSelection: false,
//               });
//               navigationEvent(e, handleChangeNavigation);
//               trackPopperChanges(e);
//             },
//             onBlur: handleBlur,
//             onFocus: handleFocus,
//           }
//         : {},
//     [
//       editable,
//       handleAddNewLine,
//       handlePressEnter,
//       handlePressTab,
//       handleDeleteBlock,
//       handleChangeNavigation,
//       handleUpdateHtml,
//       handleBlur,
//       handleFocus,
//       handleToggleHidePrefix,
//       trackPopperChanges,
//     ],
//   );

//   useEffect(() => {
//     if (variant.data.text) {
//       const caretOffset = saveCaretPosition(ref.current);
//       ref.current!.innerHTML = formatHtml(variant.data.text);
//       setTimeout(() => restoreCaretPosition(ref.current, caretOffset), 0);
//     }
//   }, [useDeepEqualMemo(variant.data.text)]);

//   return {
//     listeners,
//     inlinePopper,
//   };
// };
