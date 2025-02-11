import { CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";

import { MarkdownPluginProps } from "../model";

import {
  getLoadingTooltip,
  hideLoadingTooltipEffect,
  showLoadingTooltipEffect,
} from "./loading-tooltip";

export const getMentionCommand =
  (onSearch: MarkdownPluginProps["onSearchMentions"]) =>
  async (context: CompletionContext): Promise<CompletionResult | null> => {
    // Match text starting with `@`
    const word = context.matchBefore(/@\w*/);
    if (!word || (word.from === word.to && !context.explicit) || !onSearch) {
      return null;
    }

    const query = word.text.slice(1);

    const loadingTooltip = getLoadingTooltip(word.from + 1);

    // Add the loading tooltip to the editor state
    context.view?.dispatch({
      effects: [showLoadingTooltipEffect.of(loadingTooltip)],
    });

    try {
      const suggestions = await onSearch({ query });

      // Remove the loading tooltip after receiving the response
      context.view?.dispatch({
        effects: hideLoadingTooltipEffect.of(loadingTooltip),
      });

      if (context.aborted) {
        return null;
      }

      return {
        from: word.from + 1, // Offset by 1 to exclude the `@`
        options: suggestions.map(({ id, name, detailId, detailLabel }) => ({
          label: name,
          detail: detailLabel,
          apply: (view: EditorView, _: any, from: number, to: number) => {
            const content = `${name}${detailLabel ? `#${detailLabel}` : ""}|${id}${detailId ? `#${detailId}` : ""}`;
            view.dispatch({
              changes: { from, to, insert: content },
              selection: {
                anchor: from + content.length,
                head: from + content.length,
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
