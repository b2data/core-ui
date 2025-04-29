import { CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";

import { MarkdownPluginProps } from "../model";

import {
  getLoadingTooltip,
  hideLoadingTooltipEffect,
  showLoadingTooltipEffect,
} from "./loading-tooltip";

export const getReferenceCommand =
  (onSearch: MarkdownPluginProps["onSearchReference"]) =>
  async (context: CompletionContext): Promise<CompletionResult | null> => {
    // Match text inside `[[ ]]` or `![[ ]]`
    const word =
      context.matchBefore(/!\[\[([^\]]*)$/) ||
      context.matchBefore(/\[\[([^\]]*)$/);

    if (!word || (word.from === word.to && !context.explicit) || !onSearch) {
      return null;
    }

    const size = word.text.includes("![[") ? 3 : 2;
    const query = word.text.slice(size).split("#");
    const [docName, versionName, blockName] = query;
    let docId = "";
    let versionId = "";

    const node = syntaxTree(context.state).resolve(context.pos);
    const root = ["ReferenceData", "ReferenceDataPreview"].includes(node.name)
      ? node
      : node.parent;

    if (
      root &&
      ["ReferenceData", "ReferenceDataPreview"].includes(root?.name || "")
    ) {
      const fullText = context.state.sliceDoc(root.from + size, root.to - 2);

      if (fullText.split("|").length > 1) {
        // Skip if `|` more than 1
        return null;
      }

      const ids = (fullText.split("|")[1] || "").split("#");

      docId = ids[0];
      versionId = ids[1];
    }

    const fromWord =
      query.length > size
        ? word.from + size + docName.length + 1 + versionName.length + 1
        : query.length > 1
          ? word.from + size + docName.length + 1
          : word.from + size;

    const loadingTooltip = getLoadingTooltip(fromWord);

    // Add the loading tooltip to the editor state
    context.view?.dispatch({
      effects: [showLoadingTooltipEffect.of(loadingTooltip)],
    });

    try {
      const suggestions =
        (query.length > size && !versionId) || (query.length > 1 && !docId)
          ? []
          : await onSearch({
              query: versionId ? blockName : docId ? versionName : docName,
              ...(docId ? { docId } : {}),
              ...(versionId ? { versionId } : {}),
            });

      // Remove the loading tooltip after receiving the response
      context.view?.dispatch({
        effects: hideLoadingTooltipEffect.of(loadingTooltip),
      });

      if (context.aborted) {
        return null;
      }

      return {
        from: fromWord,
        options: suggestions.map(
          ({ label, displayLabel, id, preselectLabel, preselectId }) => ({
            label,
            displayLabel,
            apply: (view: EditorView) => {
              let insert = "";
              if (versionId) {
                insert = `${docName}#${versionName}#${label}|${docId}#${versionId}#${id}`;
              } else if (docId) {
                insert = `${docName}#${label}${preselectLabel ? `#${preselectLabel}` : ""}|${docId}#${id}${preselectId ? `#${preselectId}` : ""}`;
              } else {
                insert = `${label}${preselectLabel ? `#${preselectLabel}` : ""}|${id}${preselectId ? `#${preselectId}` : ""}`;
              }

              const from =
                query.length > 1
                  ? (root?.from || word.from) + size
                  : word.from + size;

              const to =
                query.length > 1
                  ? root?.to
                    ? root?.to - 2
                    : word.to
                  : word.to;

              const moveCursor =
                fromWord +
                label.length +
                (preselectLabel ? preselectLabel.length + 1 : 0);

              view.dispatch({
                changes: { from, to, insert },
                selection: {
                  anchor: moveCursor,
                  head: moveCursor,
                },
              });
            },
          }),
        ),
      };
    } catch (error) {
      // Handle errors gracefully
      context.view?.dispatch({
        effects: hideLoadingTooltipEffect.of(loadingTooltip),
      });
      console.error("Error fetching suggestions:", error);
      return null;
    }
  };
