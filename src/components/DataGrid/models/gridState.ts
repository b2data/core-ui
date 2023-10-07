import {
  GridInitialState as GridInitialStateCommunity,
  GridState as GridStateCommunity,
} from "@mui/x-data-grid";

import type {
  GridColumnPinningState,
  GridColumnReorderState,
  GridColumnResizeState,
} from "../hooks";

export interface GridState extends GridStateCommunity {
  columnReorder: GridColumnReorderState;
  columnResize: GridColumnResizeState;
  pinnedColumns: GridColumnPinningState;
}

export interface GridInitialState extends GridInitialStateCommunity {
  pinnedColumns?: GridColumnPinningState;
}
