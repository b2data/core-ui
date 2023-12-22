import { GridState } from "../../../models";

export const gridCellSelectionStateSelector = (state: GridState) =>
  state.cellSelection;
