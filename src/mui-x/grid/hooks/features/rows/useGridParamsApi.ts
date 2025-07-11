import * as React from "react";
import { RefObject } from "@mui/x-internals/types";
import { GridPrivateApiCommunity } from "../../../models/api/gridApiCommunity";
import {
  GridParamsApi,
  GridParamsPrivateApi,
} from "../../../models/api/gridParamsApi";
import { GridCellParams } from "../../../models/params/gridCellParams";
import { GridRowParams } from "../../../models/params/gridRowParams";
import {
  getGridCellElement,
  getGridColumnHeaderElement,
  getGridRowElement,
} from "../../../utils/domUtils";
import { useGridApiMethod } from "../../utils/useGridApiMethod";
import {
  gridFocusCellSelector,
  gridTabIndexCellSelector,
} from "../focus/gridFocusStateSelector";
import { DataGridProcessedProps } from "../../../models/props/DataGridProps";
import { gridListColumnSelector } from "../listView/gridListViewSelectors";
import { gridRowNodeSelector } from "./gridRowsSelector";
import { getRowValue as getRowValueFn } from "./gridRowsUtils";

export class MissingRowIdError extends Error {}

/**
 * @requires useGridColumns (method)
 * @requires useGridRows (method)
 * @requires useGridFocus (state)
 * @requires useGridEditing (method)
 * TODO: Impossible priority - useGridEditing also needs to be after useGridParamsApi
 * TODO: Impossible priority - useGridFocus also needs to be after useGridParamsApi
 */
export function useGridParamsApi(
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: DataGridProcessedProps,
) {
  const getColumnHeaderParams = React.useCallback<
    GridParamsApi["getColumnHeaderParams"]
  >(
    (field) => ({
      field,
      colDef: apiRef.current.getColumn(field),
    }),
    [apiRef],
  );

  const getRowParams = React.useCallback<GridParamsApi["getRowParams"]>(
    (id) => {
      const row = apiRef.current.getRow(id);

      if (!row) {
        throw new MissingRowIdError(`No row with id #${id} found`);
      }

      const params: GridRowParams = {
        id,
        columns: apiRef.current.getAllColumns(),
        row,
      };
      return params;
    },
    [apiRef],
  );

  const getCellParamsForRow = React.useCallback<
    GridParamsPrivateApi["getCellParamsForRow"]
  >(
    (id, field, row, { cellMode, colDef, hasFocus, rowNode, tabIndex }) => {
      const rawValue = row[field];
      const value = colDef?.valueGetter
        ? colDef.valueGetter(rawValue as never, row, colDef, apiRef)
        : rawValue;

      const params: GridCellParams<any, any, any, any> = {
        id,
        field,
        row,
        rowNode,
        colDef,
        cellMode,
        hasFocus,
        tabIndex,
        value,
        formattedValue: value,
        isEditable: false,
        api: apiRef.current,
      };
      if (colDef && colDef.valueFormatter) {
        params.formattedValue = colDef.valueFormatter(
          value as never,
          row,
          colDef,
          apiRef,
        );
      }
      params.isEditable = colDef && apiRef.current.isCellEditable(params);

      return params;
    },
    [apiRef],
  );

  const getCellParams = React.useCallback<GridParamsApi["getCellParams"]>(
    (id, field) => {
      const row = apiRef.current.getRow(id);
      const rowNode = gridRowNodeSelector(apiRef, id);

      if (!row || !rowNode) {
        throw new MissingRowIdError(`No row with id #${id} found`);
      }

      const cellFocus = gridFocusCellSelector(apiRef);
      const cellTabIndex = gridTabIndexCellSelector(apiRef);
      const cellMode = apiRef.current.getCellMode(id, field);

      return apiRef.current.getCellParamsForRow<any, any, any, any>(
        id,
        field,
        row,
        {
          colDef:
            props.listView && props.listViewColumn?.field === field
              ? gridListColumnSelector(apiRef)!
              : apiRef.current.getColumn(field),
          rowNode,
          hasFocus:
            cellFocus !== null &&
            cellFocus.field === field &&
            cellFocus.id === id,
          tabIndex:
            cellTabIndex &&
            cellTabIndex.field === field &&
            cellTabIndex.id === id
              ? 0
              : -1,
          cellMode,
        },
      );
    },
    [apiRef, props.listView, props.listViewColumn?.field],
  );

  const getCellValue = React.useCallback<GridParamsApi["getCellValue"]>(
    (id, field) => {
      const colDef = apiRef.current.getColumn(field);

      const row = apiRef.current.getRow(id);
      if (!row) {
        throw new MissingRowIdError(`No row with id #${id} found`);
      }

      if (!colDef || !colDef.valueGetter) {
        return row[field];
      }

      return colDef.valueGetter(
        row[colDef.field] as never,
        row,
        colDef,
        apiRef,
      );
    },
    [apiRef],
  );

  const getRowValue = React.useCallback<GridParamsApi["getRowValue"]>(
    (row, colDef) => getRowValueFn(row, colDef, apiRef),
    [apiRef],
  );

  const getRowFormattedValue = React.useCallback<
    GridParamsApi["getRowFormattedValue"]
  >(
    (row, colDef) => {
      const value = getRowValue(row, colDef);

      if (!colDef || !colDef.valueFormatter) {
        return value;
      }

      return colDef.valueFormatter(value as never, row, colDef, apiRef);
    },
    [apiRef, getRowValue],
  );

  const getColumnHeaderElement = React.useCallback<
    GridParamsApi["getColumnHeaderElement"]
  >(
    (field) => {
      if (!apiRef.current.rootElementRef!.current) {
        return null;
      }
      return getGridColumnHeaderElement(
        apiRef.current.rootElementRef!.current!,
        field,
      );
    },
    [apiRef],
  );
  const getRowElement = React.useCallback<GridParamsApi["getRowElement"]>(
    (id) => {
      if (!apiRef.current.rootElementRef!.current) {
        return null;
      }
      return getGridRowElement(apiRef.current.rootElementRef!.current!, id);
    },
    [apiRef],
  );

  const getCellElement = React.useCallback<GridParamsApi["getCellElement"]>(
    (id, field) => {
      if (!apiRef.current.rootElementRef!.current) {
        return null;
      }
      return getGridCellElement(apiRef.current.rootElementRef!.current!, {
        id,
        field,
      });
    },
    [apiRef],
  );

  const paramsApi: GridParamsApi = {
    getCellValue,
    getCellParams,
    getCellElement,
    getRowValue,
    getRowFormattedValue,
    getRowParams,
    getRowElement,
    getColumnHeaderParams,
    getColumnHeaderElement,
  };

  const paramsPrivateApi: GridParamsPrivateApi = {
    getCellParamsForRow,
  };

  useGridApiMethod(apiRef, paramsApi, "public");
  useGridApiMethod(apiRef, paramsPrivateApi, "private");
}
