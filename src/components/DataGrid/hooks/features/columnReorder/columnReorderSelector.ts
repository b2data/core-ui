import { createSelector } from "@mui/x-data-grid/internals";

import { GridState } from "../../../models";

export const gridColumnReorderSelector = (state: GridState) =>
  state.columnReorder;

export const gridColumnReorderDragColSelector = createSelector(
  gridColumnReorderSelector,
  (columnReorder) => columnReorder.dragCol,
);
