import { GridCellParams, GridValidRowModel } from "@mui/x-data-grid";

import type {
  GridFetchRowsParams,
  GridIconSlotsComponentCustom,
  GridRowOrderChangeParams,
  GridRowScrollEndParams,
} from "../models";
import type {
  GridCanBeReorderedPreProcessingContext,
  GridCellSelectionModel,
  GridColumnPinningInternalCache,
  GridPinnedColumns,
  GridRowPinningInternalCache,
} from "../hooks";

interface GridEventLookupCustom {
  rowsScrollEnd: { params: GridRowScrollEndParams };
  fetchRows: { params: GridFetchRowsParams };
  rowOrderChange: { params: GridRowOrderChangeParams };
  clipboardPasteStart: { params: { data: string[][] } };
  clipboardPasteEnd: { params: { status: "success" | "error" } };
}

interface GridControlledStateEventLookupCustom {
  pinnedColumnsChange: { params: GridPinnedColumns };
  cellSelectionChange: { params: GridCellSelectionModel };
}

interface GridPipeProcessingLookupCustom {
  canBeReordered: {
    value: boolean;
    context: GridCanBeReorderedPreProcessingContext;
  };
}

interface GridApiCachesCustom {
  columnPinning: GridColumnPinningInternalCache;
  pinnedRows: GridRowPinningInternalCache;
}

export interface GridEventLookup extends GridEventLookupCustom {}

export interface GridControlledStateEventLookup
  extends GridControlledStateEventLookupCustom {}

export interface GridPipeProcessingLookup
  extends GridPipeProcessingLookupCustom {}

export interface GridIconSlotsComponent extends GridIconSlotsComponentCustom {}

export interface GridApiCaches extends GridApiCachesCustom {}

export interface GridColDefCustom<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  pastedValueParser?: (
    value: string,
    params: GridCellParams<R, V, F>,
  ) => V | undefined;
}

declare module "@mui/x-data-grid" {
  interface GridEventLookup extends GridEventLookupCustom {}
  interface GridControlledStateEventLookup
    extends GridControlledStateEventLookupCustom {}
  interface GridPipeProcessingLookup extends GridPipeProcessingLookupCustom {}
  interface GridIconSlotsComponent extends GridIconSlotsComponentCustom {}
}

declare module "@mui/x-data-grid/internals" {
  interface GridApiCaches extends GridApiCachesCustom {}
  interface GridBaseColDef<R, V, F> extends GridColDefCustom<R, V, F> {}
}
