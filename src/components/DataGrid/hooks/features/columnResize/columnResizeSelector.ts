import { createSelector } from '@mui/x-data-grid/internals';

import { GridState } from '../../../models/gridState';

export const gridColumnResizeSelector = (state: GridState) => state.columnResize;

export const gridResizingColumnFieldSelector = createSelector(
  gridColumnResizeSelector,
  (columnResize) => columnResize.resizingColumnField,
);
