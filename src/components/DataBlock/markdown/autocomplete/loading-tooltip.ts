import { StateEffect, StateField } from "@codemirror/state";
import { showTooltip, Tooltip } from "@codemirror/view";

// Define a custom effect to add tooltip
export const showLoadingTooltipEffect = StateEffect.define<Tooltip>();

// Define a custom effect to remove tooltip
export const hideLoadingTooltipEffect = StateEffect.define<Tooltip>();

export const loadingTooltipField = StateField.define<Tooltip | null>({
  create() {
    return null; // No tooltip initially
  },
  update(tooltip, tr) {
    let updatedTooltip = tooltip;

    if (updatedTooltip) {
      updatedTooltip = {
        ...updatedTooltip,
        pos: tr.changes.mapPos(updatedTooltip.pos), // Update the position if the document changes
      };
    }

    // Handle effects to add or remove tooltips
    for (const effect of tr.effects) {
      if (effect.is(showLoadingTooltipEffect)) {
        updatedTooltip = effect.value;
      } else if (effect.is(hideLoadingTooltipEffect)) {
        updatedTooltip = null;
      }
    }

    return updatedTooltip;
  },
  provide: (f) => showTooltip.from(f),
});

export const getLoadingTooltip = (pos: number): Tooltip => ({
  pos,
  above: true,
  create() {
    const dom = document.createElement("div");
    dom.className = "cm-tooltip cm-tooltip-loading";
    dom.innerHTML =
      '<svg viewBox="22 22 44 44"><circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>';
    return { dom };
  },
});
