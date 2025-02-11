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
    // Match text inside [[ ]]
    const word = context.matchBefore(/\[\[([^\]]*)$/);
    if (!word || (word.from === word.to && !context.explicit) || !onSearch) {
      return null;
    }

    const query = word.text.slice(2).split("#");
    const [docName, versionName, blockName] = query;
    let docId = "";
    let versionId = "";

    const node = syntaxTree(context.state).resolve(context.pos);
    const root = node.name === "ReferenceData" ? node : node.parent;

    if (root?.name === "ReferenceData") {
      const ids = (
        context.state.sliceDoc(root.from + 2, root.to - 2).split("|")[1] || ""
      ).split("#");

      docId = ids[0];
      versionId = ids[1];
    }

    const fromWord =
      query.length > 2
        ? word.from + 2 + docName.length + 1 + versionName.length + 1
        : query.length > 1
          ? word.from + 2 + docName.length + 1
          : word.from + 2;

    const loadingTooltip = getLoadingTooltip(fromWord);

    // Add the loading tooltip to the editor state
    context.view?.dispatch({
      effects: [showLoadingTooltipEffect.of(loadingTooltip)],
    });

    try {
      const suggestions =
        (query.length > 2 && !versionId) || (query.length > 1 && !docId)
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
        options: suggestions.map(({ label, displayLabel, id }) => ({
          label,
          displayLabel,
          apply: (view: EditorView) => {
            let insert = "";
            if (versionId) {
              insert = `${docName}#${versionName}#${label}|${docId}#${versionId}#${id}`;
            } else if (docId) {
              insert = `${docName}#${label}|${docId}#${id}`;
            } else {
              insert = `${label}|${id}`;
            }

            const from =
              query.length > 1 ? (root?.from || word.from) + 2 : word.from + 2;

            const to =
              query.length > 1 ? (root?.to ? root?.to - 2 : word.to) : word.to;

            view.dispatch({
              changes: { from, to, insert },
              selection: {
                anchor: fromWord + label.length,
                head: fromWord + label.length,
              },
            });
          },
        })),
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
