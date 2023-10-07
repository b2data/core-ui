import { GridIconSlotsComponent as GridIconSlotsComponentCustom } from "../models/gridIconSlotsComponent";

import type { GridFetchRowsParams, GridRowScrollEndParams } from "../models";
import type {
  GridColumnPinningInternalCache,
  GridPinnedColumns,
} from "../hooks/features/columnPinning/gridColumnPinningInterface";
import type { GridCanBeReorderedPreProcessingContext } from "../hooks/features/columnReorder/columnReorderInterfaces";

interface GridEventLookupCustom {
  rowsScrollEnd: { params: GridRowScrollEndParams };
  fetchRows: { params: GridFetchRowsParams };
}

interface GridControlledStateEventLookupCustom {
  pinnedColumnsChange: { params: GridPinnedColumns };
}

interface GridPipeProcessingLookupCustom {
  canBeReordered: {
    value: boolean;
    context: GridCanBeReorderedPreProcessingContext;
  };
}

interface GridApiCachesCustom {
  columnPinning: GridColumnPinningInternalCache;
}

export interface GridEventLookup extends GridEventLookupCustom {}
export interface GridControlledStateEventLookup
  extends GridControlledStateEventLookupCustom {}
export interface GridPipeProcessingLookup
  extends GridPipeProcessingLookupCustom {}
export interface GridIconSlotsComponent extends GridIconSlotsComponentCustom {}

export interface GridApiCaches extends GridApiCachesCustom {}

declare module "@mui/x-data-grid" {
  interface GridEventLookup extends GridEventLookupCustom {}
  interface GridControlledStateEventLookup
    extends GridControlledStateEventLookupCustom {}
  interface GridPipeProcessingLookup extends GridPipeProcessingLookupCustom {}
  interface GridIconSlotsComponent extends GridIconSlotsComponentCustom {}
}

declare module "@mui/x-data-grid/internals" {
  interface GridApiCaches extends GridApiCachesCustom {}
}
