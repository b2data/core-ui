import { GridState } from "../../../models";

export const gridPinnedColumnsSelector = (state: GridState) =>
  state.pinnedColumns;
