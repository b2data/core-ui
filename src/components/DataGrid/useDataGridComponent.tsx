import * as React from "react";
import {
  columnGroupsStateInitializer,
  columnMenuStateInitializer,
  columnsStateInitializer,
  densityStateInitializer,
  editingStateInitializer,
  filterStateInitializer,
  focusStateInitializer,
  headerFilteringStateInitializer,
  paginationStateInitializer,
  preferencePanelStateInitializer,
  rowSelectionStateInitializer,
  rowsMetaStateInitializer,
  rowsStateInitializer,
  sortingStateInitializer,
  useGridClipboard,
  useGridColumnGrouping,
  useGridColumnMenu,
  useGridColumns,
  useGridColumnSpanning,
  useGridCsvExport,
  useGridDensity,
  useGridDimensions,
  useGridEditing,
  useGridEvents,
  useGridFilter,
  useGridFocus,
  useGridHeaderFiltering,
  useGridInitialization,
  useGridInitializeState,
  useGridKeyboardNavigation,
  useGridPagination,
  useGridParamsApi,
  useGridPreferencesPanel,
  useGridPrintExport,
  useGridRows,
  useGridRowSelection,
  useGridRowSelectionPreProcessors,
  useGridRowsMeta,
  useGridRowsPreProcessors,
  useGridScroll,
  useGridSorting,
  useGridStatePersistence,
  useGridVirtualization,
  virtualizationStateInitializer,
} from "@mui/x-data-grid/internals";

import { GridApi, GridPrivateApi } from "./models/gridApi";
import { DataGridProcessedProps } from "./models/dataGridProps";
import { useGridInfiniteLoader } from "./hooks/features/infiniteLoader/useGridInfiniteLoader";
import {
  columnResizeStateInitializer,
  useGridColumnResize,
} from "./hooks/features/columnResize/useGridColumnResize";
import { columnPinningStateInitializer } from "./hooks/features/columnPinning/useGridColumnPinning";
import { useGridColumnPinningPreProcessors } from "./hooks/features/columnPinning/useGridColumnPinningPreProcessors";
import { useGridLazyLoader } from "./hooks/features/lazyLoader/useGridLazyLoader";
import { useGridLazyLoaderPreProcessors } from "./hooks/features/lazyLoader/useGridLazyLoaderPreProcessors";
import {
  columnReorderStateInitializer,
  useGridColumnReorder,
} from "./hooks/features/columnReorder/useGridColumnReorder";

export const useDataGridComponent = (
  inputApiRef: React.MutableRefObject<GridApi> | undefined,
  props: DataGridProcessedProps,
) => {
  const apiRef = useGridInitialization<GridPrivateApi, GridApi>(
    inputApiRef,
    props,
  );

  /**
   * Register all pre-processors called during state initialization here.
   */
  useGridRowSelectionPreProcessors(apiRef, props);
  useGridLazyLoaderPreProcessors(apiRef, props);
  // The column pinning `hydrateColumns` pre-processor must be after every other `hydrateColumns` pre-processors
  // Because it changes the order of the columns.
  useGridColumnPinningPreProcessors(apiRef, props);
  useGridRowsPreProcessors(apiRef);

  /**
   * Register all state initializers here.
   */
  useGridInitializeState(headerFilteringStateInitializer, apiRef, props);
  useGridInitializeState(rowSelectionStateInitializer, apiRef, props);

  useGridInitializeState(columnPinningStateInitializer, apiRef, props);
  useGridInitializeState(columnsStateInitializer, apiRef, props);

  useGridInitializeState(rowsStateInitializer, apiRef, props);
  useGridInitializeState(editingStateInitializer, apiRef, props);
  useGridInitializeState(focusStateInitializer, apiRef, props);
  useGridInitializeState(sortingStateInitializer, apiRef, props);
  useGridInitializeState(preferencePanelStateInitializer, apiRef, props);
  useGridInitializeState(filterStateInitializer, apiRef, props);
  useGridInitializeState(densityStateInitializer, apiRef, props);
  useGridInitializeState(columnReorderStateInitializer, apiRef, props);
  useGridInitializeState(columnResizeStateInitializer, apiRef, props);
  useGridInitializeState(paginationStateInitializer, apiRef, props);
  useGridInitializeState(rowsMetaStateInitializer, apiRef, props);
  useGridInitializeState(columnMenuStateInitializer, apiRef, props);
  useGridInitializeState(columnGroupsStateInitializer, apiRef, props);
  useGridInitializeState(virtualizationStateInitializer, apiRef, props);

  useGridHeaderFiltering(apiRef, props);

  useGridKeyboardNavigation(apiRef, props);
  useGridRowSelection(apiRef, props);
  useGridColumns(apiRef, props);
  useGridRows(apiRef, props);
  useGridParamsApi(apiRef, props);

  useGridColumnSpanning(apiRef);
  useGridColumnGrouping(apiRef, props);
  useGridEditing(apiRef, props);
  useGridFocus(apiRef, props);
  useGridPreferencesPanel(apiRef, props);
  useGridFilter(apiRef, props);
  useGridSorting(apiRef, props);
  useGridDensity(apiRef, props);
  useGridColumnReorder(apiRef, props);
  useGridColumnResize(apiRef, props);
  useGridPagination(apiRef, props);
  useGridRowsMeta(apiRef, props);

  useGridScroll(apiRef, props);
  useGridInfiniteLoader(apiRef, props);
  useGridLazyLoader(apiRef, props);
  useGridColumnMenu(apiRef);
  useGridCsvExport(apiRef, props);
  useGridPrintExport(apiRef, props);
  useGridClipboard(apiRef, props);
  useGridDimensions(apiRef, props);
  useGridEvents(apiRef, props);
  useGridStatePersistence(apiRef);
  useGridVirtualization(apiRef, props);

  return apiRef;
};
