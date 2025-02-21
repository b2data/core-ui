import { EditorView, KeyBinding } from "@codemirror/view";
import { indentLess, indentMore } from "@codemirror/commands";
import { syntaxTree } from "@codemirror/language";

const toggleMarkdownSyntax = (
  view: EditorView,
  startSyntax: string,
  endSyntax: string = startSyntax,
): boolean => {
  const state = view.state;

  if (state.readOnly) {
    return false;
  }

  const { from, to } = state.selection.main;
  const doc = state.doc.toString();

  // Skip command if no text is selected.
  if (from === to) {
    return false;
  }

  // Check if there's a matching pair of markers immediately outside the selection.
  if (
    from >= startSyntax.length &&
    to <= doc.length - endSyntax.length &&
    doc.slice(from - startSyntax.length, from) === startSyntax &&
    doc.slice(to, to + endSyntax.length) === endSyntax
  ) {
    // Remove the markers.
    const newFrom = from - startSyntax.length;
    const newTo = to - startSyntax.length;
    const innerText = doc.slice(from, to);
    view.dispatch({
      changes: {
        from: from - startSyntax.length,
        to: to + endSyntax.length,
        insert: innerText,
      },
      selection: { anchor: newFrom, head: newTo },
    });
  } else {
    // Add the markers.
    const text = state.sliceDoc(from, to);
    const newText = `${startSyntax}${text}${endSyntax}`;
    view.dispatch({
      changes: { from, to, insert: newText },
      selection: {
        anchor: from + startSyntax.length,
        head: to + startSyntax.length,
      },
    });
  }

  return true;
};

const createToggleCommand = (startSyntax: string, endSyntax?: string) => {
  return (view: EditorView) =>
    toggleMarkdownSyntax(view, startSyntax, endSyntax ?? startSyntax);
};

export const toggleBold = createToggleCommand("**");
export const toggleItalics = createToggleCommand("*");
export const toggleUnderline = createToggleCommand("<u>", "</u>");
export const toggleStrikethrough = createToggleCommand("~~");
export const toggleHighlight = createToggleCommand("==");

const addIndentForList = (view: EditorView) => {
  const state = view.state;
  if (state.readOnly) {
    return false;
  }

  const line = state.doc.lineAt(state.selection.main.head);
  const node = syntaxTree(state).resolve(line.from);

  if (["BulletList", "OrderedList", "ListItem"].includes(node.name)) {
    return indentMore(view);
  }

  return false;
};

const removeIndentForList = (view: EditorView) => {
  const state = view.state;

  if (state.readOnly) {
    return false;
  }

  const line = state.doc.lineAt(state.selection.main.head);
  const node = syntaxTree(state).resolve(line.from);

  if (["BulletList", "OrderedList", "ListItem"].includes(node.name)) {
    return indentLess(view);
  }

  return false;
};

const moveArrowLeft = (view: EditorView) => {
  const cursorPos = view.state.selection.main.head;

  const prevNode = syntaxTree(view.state).resolve(cursorPos - 1);
  const node = syntaxTree(view.state).resolve(cursorPos);

  if (prevNode.name.includes("MentionData")) {
    const root = prevNode.name === "MentionData" ? prevNode : prevNode.parent;
    const child = root?.getChild("MentionDataName");
    if (child) {
      view.dispatch({
        selection: { anchor: child.from, head: child.from },
      });
      return true;
    }
  }

  if (node.name.includes("ReferenceData")) {
    const root = node.name === "ReferenceData" ? node : node.parent;
    const child = node.childBefore(cursorPos);

    const doc = root?.getChild("ReferenceDataDocumentName");
    const version = root?.getChild("ReferenceDataVersionName");
    const block = root?.getChild("ReferenceDataBlockName");

    switch (child?.name) {
      case "ReferenceDataDocumentId": {
        if (doc) {
          view.dispatch({
            selection: {
              anchor: block?.to || version?.to || doc.to,
              head: block?.to || version?.to || doc.to,
            },
          });
          return true;
        }
        break;
      }
      case "ReferenceDataVersionId": {
        if (version) {
          view.dispatch({
            selection: {
              anchor: block?.to || version.to,
              head: block?.to || version.to,
            },
          });

          return true;
        }
        break;
      }
      case "ReferenceDataBlockId": {
        if (block) {
          view.dispatch({
            selection: {
              anchor: block.to,
              head: block.to,
            },
          });
          return true;
        }
        break;
      }
      default:
        return false;
    }
  }

  return false;
};

const selectArrowLeft = (view: EditorView) => {
  const cursorPos = view.state.selection.main.head;
  const selectTo = view.state.selection.main.to;

  const prevNode = syntaxTree(view.state).resolve(cursorPos - 1);
  const node = syntaxTree(view.state).resolve(cursorPos);

  if (prevNode.name.includes("MentionData")) {
    const root = prevNode.name === "MentionData" ? prevNode : prevNode.parent;
    const name = root?.getChild("MentionDataName");
    const id = root?.getChild("MentionDataId");
    if (name && id) {
      view.dispatch({
        selection: { anchor: selectTo, head: name.from },
      });
      return true;
    }
  }

  if (node.name.includes("ReferenceData")) {
    const root = node.name === "ReferenceData" ? node : node.parent;
    const child = node.childBefore(cursorPos);

    const doc = root?.getChild("ReferenceDataDocumentName");
    const version = root?.getChild("ReferenceDataVersionName");
    const block = root?.getChild("ReferenceDataBlockName");

    switch (child?.name) {
      case "ReferenceDataDocumentId": {
        if (doc && root) {
          view.dispatch({
            selection: {
              anchor: selectTo,
              head: block?.to || version?.to || doc.to,
            },
          });
          return true;
        }
        break;
      }
      case "ReferenceDataVersionId": {
        if (version) {
          view.dispatch({
            selection: {
              anchor: selectTo,
              head: block?.to || version.to,
            },
          });
          return true;
        }
        break;
      }
      case "ReferenceDataBlockId": {
        if (block) {
          view.dispatch({
            selection: {
              anchor: selectTo,
              head: block.to,
            },
          });
          return true;
        }
        break;
      }
      default:
        return false;
    }
  }

  return false;
};

const moveArrowRight = (view: EditorView) => {
  const cursorPos = view.state.selection.main.head;

  const node = syntaxTree(view.state).resolve(cursorPos + 1);

  if (node.name.includes("MentionData")) {
    const root = node.name === "MentionData" ? node : node.parent;
    const child =
      root?.getChild("MentionDataDetailsId") || root?.getChild("MentionDataId");
    if (child) {
      view.dispatch({
        selection: { anchor: child.to, head: child.to },
      });
      return true;
    }
  }

  if (node.name.includes("ReferenceData")) {
    const root = node.name === "ReferenceData" ? node : node.parent;
    const child = node.childBefore(cursorPos);

    if (child?.to === cursorPos && root) {
      switch (child?.name) {
        case "ReferenceDataDocumentName": {
          const version = root?.getChild("ReferenceDataVersionName");
          if (version) {
            view.dispatch({
              selection: { anchor: version.from, head: version.from },
            });
          } else {
            view.dispatch({
              selection: { anchor: root.to - 1, head: root.to - 1 },
            });
          }
          return true;
        }
        case "ReferenceDataVersionName": {
          const block = root?.getChild("ReferenceDataBlockName");
          if (block) {
            view.dispatch({
              selection: { anchor: block.from, head: block.from },
            });
          } else {
            view.dispatch({
              selection: { anchor: root.to - 1, head: root.to - 1 },
            });
          }
          return true;
        }
        case "ReferenceDataBlockName": {
          view.dispatch({
            selection: { anchor: root.to - 1, head: root.to - 1 },
          });
          return true;
        }
        default:
          return false;
      }
    }
  }

  return false;
};

const selectArrowRight = (view: EditorView) => {
  const cursorPos = view.state.selection.main.head;
  const selectFrom = view.state.selection.main.from;

  const node = syntaxTree(view.state).resolve(cursorPos + 1);

  if (node.name.includes("MentionData")) {
    const root = node.name === "MentionData" ? node : node.parent;
    const name = root?.getChild("MentionDataName");
    const id = root?.getChild("MentionDataId");
    if (id && name) {
      view.dispatch({
        selection: { anchor: selectFrom, head: id.to },
      });
      return true;
    }
  }

  if (node.name.includes("ReferenceData")) {
    const root = node.name === "ReferenceData" ? node : node.parent;
    const child = node.childBefore(cursorPos);

    if (child?.to === cursorPos && root) {
      switch (child?.name) {
        case "ReferenceDataDocumentName": {
          const version = root?.getChild("ReferenceDataVersionName");
          if (version) {
            view.dispatch({
              selection: { anchor: selectFrom, head: version.from },
            });
          } else {
            view.dispatch({
              selection: { anchor: selectFrom, head: root.to - 1 },
            });
          }
          return true;
        }
        case "ReferenceDataVersionName": {
          const block = root?.getChild("ReferenceDataBlockName");
          if (block) {
            view.dispatch({
              selection: { anchor: selectFrom, head: block.from },
            });
          } else {
            view.dispatch({
              selection: { anchor: selectFrom, head: root.to - 1 },
            });
          }
          return true;
        }
        case "ReferenceDataBlockName": {
          view.dispatch({
            selection: { anchor: selectFrom, head: root.to - 1 },
          });
          return true;
        }
        default:
          return false;
      }
    }
  }

  return false;
};

const onBackspace = (view: EditorView) => {
  const cursorPos = view.state.selection.main.head;

  const prevNode = syntaxTree(view.state).resolve(cursorPos - 1);
  const node = syntaxTree(view.state).resolve(cursorPos);

  if (prevNode.name.includes("MentionData")) {
    const root = prevNode.name === "MentionData" ? prevNode : prevNode.parent;
    if (root) {
      view.dispatch({
        changes: { from: root.from, to: root.to },
      });
      return true;
    }
  }

  if (
    prevNode.name.includes("ReferenceData") ||
    node.name.includes("ReferenceData")
  ) {
    const currentNode = prevNode.name.includes("ReferenceData")
      ? prevNode
      : node;

    const root =
      currentNode.name === "ReferenceData" ? currentNode : currentNode.parent;

    const docName = root?.getChild("ReferenceDataDocumentName");
    const versionName = root?.getChild("ReferenceDataVersionName");
    const blockName = root?.getChild("ReferenceDataBlockName");
    const docId = root?.getChild("ReferenceDataDocumentId");
    const versionId = root?.getChild("ReferenceDataVersionId");
    const blockId = root?.getChild("ReferenceDataBlockId");

    if (root) {
      const child = currentNode.childBefore(cursorPos);

      // if (view.state.sliceDoc(cursorPos - 1, cursorPos) == '[') {
      //   return false;
      // }

      // Remove one of the last caret
      if (root.to - 1 === cursorPos || root.to === cursorPos) {
        view.dispatch({
          changes: [
            { from: root.to - 2, to: root.to - 1 },
            {
              from:
                blockName?.to ||
                versionName?.to ||
                docName?.to ||
                root?.from + 2,
              to: root.to - 2,
            },
          ],
        });
        return true;
      }

      // Remove one of the first caret
      if (!child && currentNode.name === "ReferenceData") {
        view.dispatch({
          changes: [
            // remove all ids
            {
              from:
                blockName?.to ||
                versionName?.to ||
                docName?.to ||
                root?.from + 2,
              to: root.to - 2,
            },
            { from: root.from + 1, to: root.from + 2 },
          ],
          selection: { anchor: cursorPos - 1, head: cursorPos - 1 },
        });
        return true;
      }

      switch (
        currentNode.name === "ReferenceData" ? child?.name : currentNode.name
      ) {
        case "ReferenceDataBlockName": {
          if (blockId) {
            view.dispatch({
              changes: [
                { from: blockId.from - 1, to: root.to - 2 },
                { from: cursorPos - 1, to: cursorPos },
              ],
            });
            return true;
          }
          break;
        }
        case "ReferenceDataVersionName": {
          if (versionId) {
            view.dispatch({
              changes: [
                { from: versionId.from - 1, to: root.to - 2 },
                {
                  from: cursorPos - 1,
                  to: docId?.from ? docId?.from - 1 : root.to - 2,
                },
              ],
            });
            return true;
          }
          break;
        }
        case "ReferenceDataDocumentName": {
          if (docId) {
            view.dispatch({
              changes: [
                { from: docId.from - 1, to: root.to - 2 },
                {
                  from: cursorPos - 1,
                  to: docId?.from ? docId?.from - 1 : root.to - 2,
                },
              ],
            });
            return true;
          }
          break;
        }
        default:
          break;
      }

      return false;
    }
  }

  return false;
};

export const markdownKeymap: KeyBinding[] = [
  { key: "Mod-b", run: toggleBold },
  { key: "Mod-B", run: toggleBold },
  { key: "Mod-i", run: toggleItalics },
  { key: "Mod-I", run: toggleItalics },
  { key: "Mod-u", run: toggleUnderline },
  { key: "Mod-U", run: toggleUnderline },
  { key: "Mod-Shift-x", run: toggleStrikethrough },
  { key: "Mod-Shift-X", run: toggleStrikethrough },
  { key: "Mod-m", run: toggleHighlight },
  { key: "Mod-M", run: toggleHighlight },
  { key: "Tab", run: addIndentForList, shift: removeIndentForList },
  { key: "ArrowLeft", run: moveArrowLeft, shift: selectArrowLeft },
  { key: "ArrowRight", run: moveArrowRight, shift: selectArrowRight },
  { key: "Backspace", run: onBackspace },
];
