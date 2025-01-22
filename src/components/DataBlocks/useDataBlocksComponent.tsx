import { MutableRefObject } from "react";


export const useDataBlocksComponent = (
  inputApiRef: MutableRefObject<GridApiCommunity> | undefined,
  props: DataGridProcessedProps,
) => {
  const apiRef = useGridInitialization<GridPrivateApiCommunity, GridApiCommunity>(
    inputApiRef,
    props,
  );

  // /**
  //  * Register all pre-processors called during state initialization here.
  //  */
  // useGridRowSelectionPreProcessors(apiRef, props);
  // useGridRowsPreProcessors(apiRef);

  // /**
  //  * Register all state initializers here.
  //  */
  // useGridInitializeState(dimensionsStateInitializer, apiRef, props);
  // useGridInitializeState(rowSelectionStateInitializer, apiRef, props);
  // useGridInitializeState(columnsStateInitializer, apiRef, props);
  // useGridInitializeState(rowsStateInitializer, apiRef, props);
  // useGridInitializeState(editingStateInitializer, apiRef, props);
  // useGridInitializeState(focusStateInitializer, apiRef, props);
  // useGridInitializeState(sortingStateInitializer, apiRef, props);
  // useGridInitializeState(preferencePanelStateInitializer, apiRef, props);
  // useGridInitializeState(filterStateInitializer, apiRef, props);
  // useGridInitializeState(rowSpanningStateInitializer, apiRef, props);
  // useGridInitializeState(densityStateInitializer, apiRef, props);
  // useGridInitializeState(columnResizeStateInitializer, apiRef, props);
  // useGridInitializeState(paginationStateInitializer, apiRef, props);
  // useGridInitializeState(rowsMetaStateInitializer, apiRef, props);
  // useGridInitializeState(columnMenuStateInitializer, apiRef, props);
  // useGridInitializeState(columnGroupsStateInitializer, apiRef, props);
  // useGridInitializeState(virtualizationStateInitializer, apiRef, props);
  // useGridInitializeState(listViewStateInitializer, apiRef, props);

  // useGridKeyboardNavigation(apiRef, props);
  // useGridRowSelection(apiRef, props);
  // useGridColumns(apiRef, props);
  // useGridRows(apiRef, props);
  // useGridRowSpanning(apiRef, props);
  // useGridParamsApi(apiRef, props);
  // useGridColumnSpanning(apiRef);
  // useGridColumnGrouping(apiRef, props);
  // useGridEditing(apiRef, props);
  // useGridFocus(apiRef, props);
  // useGridPreferencesPanel(apiRef, props);
  // useGridFilter(apiRef, props);
  // useGridSorting(apiRef, props);
  // useGridDensity(apiRef, props);
  // useGridColumnResize(apiRef, props);
  // useGridPagination(apiRef, props);
  // useGridRowsMeta(apiRef, props);
  // useGridScroll(apiRef, props);
  // useGridColumnMenu(apiRef);
  // useGridCsvExport(apiRef, props);
  // useGridPrintExport(apiRef, props);
  // useGridClipboard(apiRef, props);
  // useGridDimensions(apiRef, props);
  // useGridEvents(apiRef, props);
  // useGridStatePersistence(apiRef);
  // useGridVirtualization(apiRef, props);
  // useGridListView(apiRef, props);

  return apiRef;
};
