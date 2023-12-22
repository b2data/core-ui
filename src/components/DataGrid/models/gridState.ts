import {
  GridInitialState as GridInitialStateCommunity,
  GridState as GridStateCommunity,
} from "@mui/x-data-grid";

import type {
  GridCellSelectionModel,
  GridColumnPinningState,
  GridColumnReorderState,
  GridColumnResizeState,
} from "../hooks";

export interface GridState extends GridStateCommunity {
  columnReorder: GridColumnReorderState;
  columnResize: GridColumnResizeState;
  pinnedColumns: GridColumnPinningState;
  cellSelection: GridCellSelectionModel;
}

export interface GridInitialState extends GridInitialStateCommunity {
  pinnedColumns?: GridColumnPinningState;
  cellSelection?: GridCellSelectionModel;
}
