import * as React from "react";
import {
  gridColumnFieldsSelector,
  gridColumnPositionsSelector,
  gridColumnsTotalWidthSelector,
  GridEventListener,
  gridVisibleColumnDefinitionsSelector,
  gridVisibleColumnFieldsSelector,
  useGridApiEventHandler,
  useGridApiMethod,
  useGridSelector,
} from "@mui/x-data-grid";
import {
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
  GridStateInitializer,
  useGridRegisterPipeProcessor,
} from "@mui/x-data-grid/internals";

import { GridPrivateApi } from "../../../models/gridApi";
import { GridInitialState, GridState } from "../../../models/gridState";
import { DataGridProcessedProps } from "../../../models/dataGridProps";
import { filterColumns } from "../../../components/DataGridVirtualScroller";

import {
  GridColumnPinningApi,
  GridPinnedColumns,
  GridPinnedPosition,
} from "./gridColumnPinningInterface";
import { gridPinnedColumnsSelector } from "./gridColumnPinningSelector";

export const columnPinningStateInitializer: GridStateInitializer<
  Pick<
    DataGridProcessedProps,
    "pinnedColumns" | "initialState" | "disableColumnPinning"
  >
> = (state, props, apiRef) => {
  apiRef.current.caches.columnPinning = {
    orderedFieldsBeforePinningColumns: null,
  };

  let model: GridPinnedColumns;
  if (props.disableColumnPinning) {
    model = {};
  } else if (props.pinnedColumns) {
    model = props.pinnedColumns;
  } else if (props.initialState?.pinnedColumns) {
    model = props.initialState?.pinnedColumns;
  } else {
    model = {};
  }

  return {
    ...state,
    pinnedColumns: model,
  };
};

const mergeStateWithPinnedColumns =
  (pinnedColumns: GridPinnedColumns) =>
  (state: GridState): GridState => ({ ...state, pinnedColumns });

export const useGridColumnPinning = (
  apiRef: React.MutableRefObject<GridPrivateApi>,
  props: Pick<
    DataGridProcessedProps,
    | "disableColumnPinning"
    | "initialState"
    | "pinnedColumns"
    | "onPinnedColumnsChange"
    | "slotProps"
    | "slots"
  >,
): void => {
  const pinnedColumns = useGridSelector(apiRef, gridPinnedColumnsSelector);

  /**
   * PRE-PROCESSING
   */
  const calculateScrollLeft = React.useCallback<
    GridPipeProcessor<"scrollToIndexes">
  >(
    (initialValue, params) => {
      if (props.disableColumnPinning) {
        return initialValue;
      }

      const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
      const [leftPinnedColumns, rightPinnedColumns] = filterColumns(
        pinnedColumns,
        visibleColumnFields,
      );

      if (
        !params.colIndex ||
        (leftPinnedColumns.length === 0 && rightPinnedColumns.length === 0)
      ) {
        return initialValue;
      }

      const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
      const columnsTotalWidth = gridColumnsTotalWidthSelector(apiRef);
      const columnPositions = gridColumnPositionsSelector(apiRef);
      const clientWidth =
        apiRef.current.virtualScrollerRef!.current!.clientWidth;

      // When using RTL, `scrollLeft` becomes negative, so we must ensure that we only compare values.
      const scrollLeft = Math.abs(
        apiRef.current.virtualScrollerRef!.current!.scrollLeft,
      );
      const offsetWidth = visibleColumns[params.colIndex].computedWidth;
      const offsetLeft = columnPositions[params.colIndex];

      const leftPinnedColumnsWidth = columnPositions[leftPinnedColumns.length];
      const rightPinnedColumnsWidth =
        columnsTotalWidth -
        columnPositions[columnPositions.length - rightPinnedColumns.length];

      const elementBottom = offsetLeft + offsetWidth;
      if (
        elementBottom - (clientWidth - rightPinnedColumnsWidth) >
        scrollLeft
      ) {
        const left = elementBottom - (clientWidth - rightPinnedColumnsWidth);
        return { ...initialValue, left };
      }
      if (offsetLeft < scrollLeft + leftPinnedColumnsWidth) {
        const left = offsetLeft - leftPinnedColumnsWidth;
        return { ...initialValue, left };
      }
      return initialValue;
    },
    [apiRef, pinnedColumns, props.disableColumnPinning],
  );

  const addColumnMenuItems = React.useCallback<GridPipeProcessor<"columnMenu">>(
    (columnMenuItems, colDef) => {
      if (props.disableColumnPinning) {
        return columnMenuItems;
      }

      if (colDef.pinnable === false) {
        return columnMenuItems;
      }

      return [...columnMenuItems, "columnMenuPinningItem"];
    },
    [props.disableColumnPinning],
  );

  const checkIfCanBeReordered = React.useCallback<
    GridPipeProcessor<"canBeReordered">
  >(
    (initialValue, { targetIndex }) => {
      const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
      const [leftPinnedColumns, rightPinnedColumns] = filterColumns(
        pinnedColumns,
        visibleColumnFields,
      );

      if (leftPinnedColumns.length === 0 && rightPinnedColumns.length === 0) {
        return initialValue;
      }

      if (
        leftPinnedColumns.length > 0 &&
        targetIndex < leftPinnedColumns.length
      ) {
        return false;
      }

      if (rightPinnedColumns.length > 0) {
        const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
        const firstRightPinnedColumnIndex =
          visibleColumns.length - rightPinnedColumns.length;
        return targetIndex >= firstRightPinnedColumnIndex
          ? false
          : initialValue;
      }

      return initialValue;
    },
    [apiRef, pinnedColumns],
  );

  const stateExportPreProcessing = React.useCallback<
    GridPipeProcessor<"exportState">
  >(
    (prevState, context) => {
      const pinnedColumnsToExport = gridPinnedColumnsSelector(
        apiRef.current.state,
      );

      const shouldExportPinnedColumns =
        // Always export if the `exportOnlyDirtyModels` property is not activated
        !context.exportOnlyDirtyModels ||
        // Always export if the model is controlled
        props.pinnedColumns != null ||
        // Always export if the model has been initialized
        props.initialState?.pinnedColumns != null ||
        // Export if the model is not empty
        (pinnedColumnsToExport.left ?? []).length > 0 ||
        (pinnedColumnsToExport.right ?? []).length > 0;

      if (!shouldExportPinnedColumns) {
        return prevState;
      }

      return {
        ...prevState,
        pinnedColumns: pinnedColumnsToExport,
      };
    },
    [apiRef, props.pinnedColumns, props.initialState?.pinnedColumns],
  );

  const stateRestorePreProcessing = React.useCallback<
    GridPipeProcessor<"restoreState">
  >(
    (
      params,
      context: GridRestoreStatePreProcessingContext<GridInitialState>,
    ) => {
      const newPinnedColumns = context.stateToRestore.pinnedColumns;
      if (newPinnedColumns != null) {
        apiRef.current.setState(mergeStateWithPinnedColumns(newPinnedColumns));
      }

      return params;
    },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, "scrollToIndexes", calculateScrollLeft);
  useGridRegisterPipeProcessor(apiRef, "columnMenu", addColumnMenuItems);
  useGridRegisterPipeProcessor(apiRef, "canBeReordered", checkIfCanBeReordered);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(
    apiRef,
    "restoreState",
    stateRestorePreProcessing,
  );

  apiRef.current.registerControlState({
    stateId: "pinnedColumns",
    propModel: props.pinnedColumns,
    propOnChange: props.onPinnedColumnsChange,
    stateSelector: gridPinnedColumnsSelector,
    changeEvent: "pinnedColumnsChange",
  });

  const checkIfEnabled = React.useCallback(
    (methodName: keyof GridColumnPinningApi) => {
      if (props.disableColumnPinning) {
        throw new Error(
          `MUI: You cannot call \`apiRef.current.${methodName}\` when \`disableColumnPinning\` is true.`,
        );
      }
    },
    [props.disableColumnPinning],
  );

  const pinColumn = React.useCallback<GridColumnPinningApi["pinColumn"]>(
    (field: string, side: GridPinnedPosition) => {
      checkIfEnabled("pinColumn");

      if (apiRef.current.isColumnPinned(field) === side) {
        return;
      }

      const otherSide =
        side === GridPinnedPosition.right
          ? GridPinnedPosition.left
          : GridPinnedPosition.right;

      const newPinnedColumns = {
        [side]: [...(pinnedColumns[side] || []), field],
        [otherSide]: (pinnedColumns[otherSide] || []).filter(
          (column) => column !== field,
        ),
      };

      apiRef.current.setPinnedColumns(newPinnedColumns);
    },
    [apiRef, checkIfEnabled, pinnedColumns],
  );

  const unpinColumn = React.useCallback<GridColumnPinningApi["unpinColumn"]>(
    (field: string) => {
      checkIfEnabled("unpinColumn");
      apiRef.current.setPinnedColumns({
        left: (pinnedColumns.left || []).filter((column) => column !== field),
        right: (pinnedColumns.right || []).filter((column) => column !== field),
      });
    },
    [apiRef, checkIfEnabled, pinnedColumns.left, pinnedColumns.right],
  );

  const getPinnedColumns = React.useCallback<
    GridColumnPinningApi["getPinnedColumns"]
  >(() => {
    checkIfEnabled("getPinnedColumns");
    return gridPinnedColumnsSelector(apiRef.current.state);
  }, [apiRef, checkIfEnabled]);

  const setPinnedColumns = React.useCallback<
    GridColumnPinningApi["setPinnedColumns"]
  >(
    (newPinnedColumns) => {
      checkIfEnabled("setPinnedColumns");
      apiRef.current.setState(mergeStateWithPinnedColumns(newPinnedColumns));
      apiRef.current.forceUpdate();
    },
    [apiRef, checkIfEnabled],
  );

  const isColumnPinned = React.useCallback<
    GridColumnPinningApi["isColumnPinned"]
  >(
    (field) => {
      checkIfEnabled("isColumnPinned");
      const leftPinnedColumns = pinnedColumns.left || [];
      if (leftPinnedColumns.includes(field)) {
        return GridPinnedPosition.left;
      }
      const rightPinnedColumns = pinnedColumns.right || [];
      if (rightPinnedColumns.includes(field)) {
        return GridPinnedPosition.right;
      }
      return false;
    },
    [pinnedColumns.left, pinnedColumns.right, checkIfEnabled],
  );

  const columnPinningApi: GridColumnPinningApi = {
    pinColumn,
    unpinColumn,
    getPinnedColumns,
    setPinnedColumns,
    isColumnPinned,
  };

  useGridApiMethod(apiRef, columnPinningApi, "public");

  const handleColumnOrderChange = React.useCallback<
    GridEventListener<"columnOrderChange">
  >(
    (params) => {
      if (
        !apiRef.current.caches.columnPinning.orderedFieldsBeforePinningColumns
      ) {
        return;
      }

      const { column, targetIndex, oldIndex } = params;
      const delta = targetIndex > oldIndex ? 1 : -1;

      const latestColumnFields = gridColumnFieldsSelector(apiRef);

      const siblingField = latestColumnFields[targetIndex - delta];

      const newOrderedFieldsBeforePinningColumns = [
        ...apiRef.current.caches.columnPinning
          .orderedFieldsBeforePinningColumns,
      ];

      // The index to start swapping fields
      let i = newOrderedFieldsBeforePinningColumns.findIndex(
        (currentColumn) => currentColumn === column.field,
      );
      // The index of the field to swap with
      let j = i + delta;

      // When to stop swapping fields.
      // We stop one field before because the swap is done with i + 1 (if delta=1)
      const stop = newOrderedFieldsBeforePinningColumns.findIndex(
        (currentColumn) => currentColumn === siblingField,
      );

      while (delta > 0 ? i < stop : i > stop) {
        // If the field to swap with is a pinned column, jump to the next
        while (
          apiRef.current.isColumnPinned(newOrderedFieldsBeforePinningColumns[j])
        ) {
          j += delta;
        }

        const temp = newOrderedFieldsBeforePinningColumns[i];
        newOrderedFieldsBeforePinningColumns[i] =
          newOrderedFieldsBeforePinningColumns[j];
        newOrderedFieldsBeforePinningColumns[j] = temp;

        i = j;
        j = i + delta;
      }

      apiRef.current.caches.columnPinning.orderedFieldsBeforePinningColumns =
        newOrderedFieldsBeforePinningColumns;
    },

    [apiRef],
  );

  useGridApiEventHandler(apiRef, "columnOrderChange", handleColumnOrderChange);

  React.useEffect(() => {
    if (props.pinnedColumns) {
      apiRef.current.setPinnedColumns(props.pinnedColumns);
    }
  }, [apiRef, props.pinnedColumns]);
};
