import * as React from "react";
import {
  GridCallbackDetails,
  GridEventListener,
  GridFeatureMode,
  GridGroupNode,
  GridSlotsComponent,
  GridValidRowModel,
  UncapitalizedGridSlotsComponent,
} from "@mui/x-data-grid";
import {
  DataGridPropsWithComplexDefaultValueAfterProcessing as DataGridPropsWithComplexDefaultValueAfterProcessingCommunity,
  DataGridPropsWithComplexDefaultValueBeforeProcessing as DataGridPropsWithComplexDefaultValueBeforeProcessingCommunity,
  DataGridPropsWithDefaultValues,
  DataGridPropsWithoutDefaultValue as DataGridPropsWithoutDefaultValueCommunity,
  GridSlotsComponentsProps,
} from "@mui/x-data-grid/internals";

import {
  GridAutosizeOptions,
  GridPinnedColumns,
  GridPinnedRowsProp,
} from "../hooks";
import { GridCellSelectionModel } from "../hooks/features/cellSelection";

import { GridApi } from "./gridApi";
import { GridInitialState } from "./gridState";
import {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from "./gridGroupingColDefOverride";

interface DataGridPropsWithComplexDefaultValueBeforeProcessing
  extends Omit<
    DataGridPropsWithComplexDefaultValueBeforeProcessingCommunity,
    "components"
  > {
  /**
   * Overridable components.
   * @deprecated Use the `slots` prop instead.
   */
  components?: Partial<GridSlotsComponent>;
  /**
   * Overridable components.
   */
  slots?: Partial<UncapitalizedGridSlotsComponent>;
}

export interface DataGridProps<R extends GridValidRowModel = any>
  extends Omit<
    Partial<DataGridPropsWithDefaultValue> &
      DataGridPropsWithComplexDefaultValueBeforeProcessing &
      DataGridPropsWithoutDefaultValue<R>,
    DataGridForcedPropsKey
  > {}

interface DataGridPropsWithComplexDefaultValueAfterProcessing
  extends Omit<
    DataGridPropsWithComplexDefaultValueAfterProcessingCommunity,
    "slots"
  > {
  slots: UncapitalizedGridSlotsComponent;
}

/**
 * The props of the `DataGrid` component after the pre-processing phase.
 */
export interface DataGridProcessedProps<R extends GridValidRowModel = any>
  extends DataGridPropsWithDefaultValue,
    DataGridPropsWithComplexDefaultValueAfterProcessing,
    Omit<DataGridPropsWithoutDefaultValue<R>, "componentsProps"> {}

export type DataGridForcedPropsKey =
  | "classes"
  | "autoPageSize"
  | "density"
  | "disableColumnSelector"
  | "disableDensitySelector"
  | "disableMultipleColumnsFiltering"
  | "disableVirtualization"
  | "editMode"
  | "filterMode"
  | "filterDebounceMs"
  | "keepNonExistentRowsSelected"
  | "logger"
  | "logLevel"
  | "pagination"
  | "paginationMode"
  | "pageSizeOptions"
  | "rowSpacingType"
  | "keepColumnPositionIfDraggedOutside"
  | "unstable_ignoreValueFormatterDuringExport"
  | "clipboardCopyCellDelimiter"
  | "scrollbarSize"
  | "getCellClassName"
  | "getRowClassName"
  | "getEstimatedRowHeight"
  | "getRowSpacing"
  | "getDetailPanelContent"
  | "onRowEditCommit"
  | "onRowEditStart"
  | "onRowEditStop"
  | "onColumnHeaderOver"
  | "onColumnHeaderOut"
  | "onColumnHeaderEnter"
  | "onColumnHeaderLeave"
  | "paginationModel"
  | "onPaginationModelChange"
  | "onPreferencePanelClose"
  | "onPreferencePanelOpen"
  | "cellModesModel"
  | "onCellModesModelChange"
  | "rowModesModel"
  | "onRowModesModelChange"
  | "rowSelectionModel"
  | "onRowSelectionModelChange"
  | "columnVisibilityModel"
  | "onColumnVisibilityModelChange"
  | "nonce"
  | "experimentalFeatures"
  | "columnGroupingModel"
  | "className"
  | "style";

/**
 * The `DataGrid` options with a default value overridable through props
 * None of the entry of this interface should be optional, they all have default values and `DataGridProps` already applies a `Partial<DataGridSimpleOptions>` for the public interface
 * The controlled model do not have a default value at the prop processing level, so they must be defined in `DataGridOtherProps`
 */
export interface DataGridPropsWithDefaultValue
  extends DataGridPropsWithDefaultValues {
  /**
   * Set the area in `px` at the bottom of the grid viewport where onRowsScrollEnd is called.
   * @default 80
   */
  scrollEndThreshold: number;
  /**
   * If `true`, columns are autosized after the datagrid is mounted.
   * @default false
   */
  autosizeOnMount: boolean;
  /**
   * If `true`, column autosizing on header separator double-click is disabled.
   * @default true
   */
  disableAutosize: boolean;
  /**
   * If `true`, the column pinning is disabled.
   * @default true
   */
  disableColumnPinning: boolean;
  /**
   * If `true`, the reordering of rows is enabled.
   * @default false
   */
  rowReordering: boolean;
  /**
   * Loading rows can be processed on the server or client-side.
   * Set it to 'client' if you would like enable infnite loading.
   * Set it to 'server' if you would like to enable lazy loading.
   * * @default client
   */
  rowsLoadingMode: GridFeatureMode;
  /**
   * @default client
   */
  sortingMode: DataGridPropsWithDefaultValues["sortingMode"];
  /**
   * @default true
   */
  disableColumnFilter: DataGridPropsWithDefaultValues["disableColumnFilter"];
  /**
   * @default true
   */
  disableColumnMenu: DataGridPropsWithDefaultValues["disableColumnMenu"];
  /**
   * @default true
   */
  disableColumnResize: DataGridPropsWithDefaultValues["disableColumnResize"];
  /**
   * @default 36
   */
  rowHeight: DataGridPropsWithDefaultValues["rowHeight"];
  /**
   * @default 42
   */
  columnHeaderHeight: DataGridPropsWithDefaultValues["columnHeaderHeight"];
  /**
   * @default true
   */
  hideFooterSelectedRowCount: DataGridPropsWithDefaultValues["hideFooterSelectedRowCount"];
  /**
   * @default true
   */
  hideFooterPagination: DataGridPropsWithDefaultValues["hideFooterPagination"];
  /**
   * @default true
   */
  hideFooterRowCount: DataGridPropsWithDefaultValues["hideFooterRowCount"];
  /**
   * @default true
   */
  hideFooter: DataGridPropsWithDefaultValues["hideFooter"];
  /**
   * @default true
   */
  disableColumnReorder: DataGridPropsWithDefaultValues["disableColumnReorder"];
  /**
   * If `true`, the rows will be gathered in a tree structure according to the `getTreeDataPath` prop.
   * @default false
   */
  treeData: boolean;
  /**
   * If above 0, the row children will be expanded up to this depth.
   * If equal to -1, all the row children will be expanded.
   * @default 0
   */
  defaultGroupingExpansionDepth: number;
  /**
   * If `true`, the filtering will only be applied to the top level rows when grouping rows with the `treeData` prop.
   * @default false
   */
  disableChildrenFiltering: boolean;
  /**
   * If `true`, the sorting will only be applied to the top level rows when grouping rows with the `treeData` prop.
   * @default false
   */
  disableChildrenSorting: boolean;
  /**
   * If `true`, moving the mouse pointer outside the grid before releasing the mouse button
   * in a column re-order action will not cause the column to jump back to its original position.
   * @default false
   */
  keepColumnPositionIfDraggedOutside: boolean;
  /**
   * If `true`, the cell selection mode is enabled.
   * @default false
   */
  unstable_cellSelection: boolean;
  /**
   * If `true`, the clipboard paste is disabled.
   * @default false
   */
  disableClipboardPaste: boolean;
  /**
   * The function is used to split the pasted text into rows and cells.
   * @param {string} text The text pasted from the clipboard.
   * @returns {string[][] | null} A 2D array of strings. The first dimension is the rows, the second dimension is the columns.
   * @default `(pastedText) => { const text = pastedText.replace(/\r?\n$/, ''); return text.split(/\r\n|\n|\r/).map((row) => row.split('\t')); }`
   */
  unstable_splitClipboardPastedText: (text: string) => string[][] | null;
}

export interface DataGridPropsWithoutDefaultValue<
  R extends GridValidRowModel = any,
> extends Omit<
    DataGridPropsWithoutDefaultValueCommunity<R>,
    "initialState" | "componentsProps" | "slotProps"
  > {
  /**
   * The ref object that allows grid manipulation. Can be instantiated with `useGridApiRef()`.
   */
  apiRef?: React.MutableRefObject<GridApi>;
  /**
   * The options for autosize when user-initiated.
   */
  autosizeOptions?: GridAutosizeOptions;
  /**
   * The initial state of the DataGrid.
   * The data in it will be set in the state on initialization but will not be controlled.
   * If one of the data in `initialState` is also being controlled, then the control state wins.
   */
  initialState?: GridInitialState;
  /**
   * Determines the path of a row in the tree data.
   * For instance, a row with the path ["A", "B"] is the child of the row with the path ["A"].
   * Note that all paths must contain at least one element.
   * @template R
   * @param {R} row The row from which we want the path.
   * @returns {string[]} The path to the row.
   */
  getTreeDataPath?: (row: R) => string[];
  /**
   * Determines if a group should be expanded after its creation.
   * This prop takes priority over the `defaultGroupingExpansionDepth` prop.
   * @param {GridGroupNode} node The node of the group to test.
   * @returns {boolean} A boolean indicating if the group is expanded.
   */
  isGroupExpandedByDefault?: (node: GridGroupNode) => boolean;
  /**
   * Callback fired while a column is being resized.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnResize?: GridEventListener<"columnResize">;
  /**
   * Callback fired when the width of a column is changed.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnWidthChange?: GridEventListener<"columnWidthChange">;
  /**
   * Callback fired when scrolling to the bottom of the grid viewport.
   * @param {GridRowScrollEndParams} params With all properties from [[GridRowScrollEndParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowsScrollEnd?: GridEventListener<"rowsScrollEnd">;
  /**
   * The column fields to display pinned to left or right.
   */
  pinnedColumns?: GridPinnedColumns;
  /**
   * Rows data to pin on top or bottom.
   */
  pinnedRows?: GridPinnedRowsProp<R>;
  /**
   * Callback fired when the pinned columns have changed.
   * @param {GridPinnedColumns} pinnedColumns The changed pinned columns.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPinnedColumnsChange?: (
    pinnedColumns: GridPinnedColumns,
    details: GridCallbackDetails,
  ) => void;
  /**
   * The grouping column used by the tree data.
   */
  groupingColDef?:
    | GridGroupingColDefOverride<R>
    | ((
        params: GridGroupingColDefOverrideParams,
      ) => GridGroupingColDefOverride<R> | undefined | null);
  /**
   * Callback fired when a column is reordered.
   * @param {GridColumnOrderChangeParams} params With all properties from [[GridColumnOrderChangeParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnOrderChange?: GridEventListener<"columnOrderChange">;
  /**
   * Callback fired when a row is being reordered.
   * @param {GridRowOrderChangeParams} params With all properties from [[GridRowOrderChangeParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowOrderChange?: GridEventListener<"rowOrderChange">;
  /**
   * Callback fired when rowCount is set and the next batch of virtualized rows is rendered.
   * @param {GridFetchRowsParams} params With all properties from [[GridFetchRowsParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onFetchRows?: GridEventListener<"fetchRows">;
  /**
   * Overridable components props dynamically passed to the component at rendering.
   */
  slotProps?: GridSlotsComponentsProps;
  /**
   * Overridable components props dynamically passed to the component at rendering.
   * @deprecated Use the `slotProps` prop instead.
   */
  componentsProps?: GridSlotsComponentsProps;
  /**
   * Set the cell selection model of the grid.
   */
  unstable_cellSelectionModel?: GridCellSelectionModel;
  /**
   * Callback fired when the selection state of one or multiple cells changes.
   * @param {GridCellSelectionModel} cellSelectionModel Object in the shape of [[GridCellSelectionModel]] containing the selected cells.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  unstable_onCellSelectionModelChange?: (
    cellSelectionModel: GridCellSelectionModel,
    details: GridCallbackDetails,
  ) => void;
  /**
   * Callback fired when the clipboard paste operation starts.
   */
  onClipboardPasteStart?: GridEventListener<"clipboardPasteStart">;
  /**
   * Callback fired when the clipboard paste operation ends.
   */
  onClipboardPasteEnd?: GridEventListener<"clipboardPasteEnd">;
  /**
   * If `true`, the grid will allow to paste data from clipboard.
   */
  clipboardPaste?: boolean;
}
