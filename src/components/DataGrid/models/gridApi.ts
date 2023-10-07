import {
  GridApiCommon,
  GridColumnReorderApi,
  GridRowMultiSelectionApi,
  GridRowProApi,
} from "@mui/x-data-grid";
import { GridPrivateOnlyApiCommon } from "@mui/x-data-grid/internals";

import { GridInitialState, GridState } from "./gridState";

import type { GridColumnPinningApi, GridColumnResizeApi } from "../hooks";

export interface GridApi
  extends GridApiCommon<GridState, GridInitialState>,
    GridRowProApi,
    GridColumnPinningApi,
    GridColumnResizeApi,
    GridRowMultiSelectionApi,
    GridColumnReorderApi {}

export interface GridPrivateApi
  extends GridApi,
    GridPrivateOnlyApiCommon<GridApi, GridPrivateApi> {}
