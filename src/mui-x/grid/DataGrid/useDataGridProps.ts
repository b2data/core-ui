import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { getThemeProps } from "@mui/system";
import {
  DataGridProcessedProps,
  DataGridProps,
  DataGridForcedPropsKey,
  DataGridPropsWithDefaultValues,
} from "../models/props/DataGridProps";
import { GRID_DEFAULT_LOCALE_TEXT } from "../constants";
import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from "../constants/defaultGridSlotsComponents";
import { GridSlotsComponent, GridValidRowModel } from "../models";
import { computeSlots } from "../internals/utils";
import { DATA_GRID_PROPS_DEFAULT_VALUES } from "../constants/dataGridPropsDefaultValues";

interface GetDataGridPropsDefaultValues extends DataGridProps {}

type DataGridForcedProps = {
  [key in keyof DataGridProps]?: DataGridProcessedProps[key];
};
type GetDataGridForcedProps = (
  themedProps: GetDataGridPropsDefaultValues,
) => DataGridForcedProps;

const DATA_GRID_FORCED_PROPS: {
  [key in DataGridForcedPropsKey]?: DataGridProcessedProps[key];
} = {
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  throttleRowsMs: undefined,
  hideFooterRowCount: false,
  pagination: true,
  checkboxSelectionVisibleOnly: false,
  disableColumnReorder: true,
  keepColumnPositionIfDraggedOutside: false,
  signature: "DataGrid",
  listView: false,
};

const getDataGridForcedProps: GetDataGridForcedProps = (themedProps) => ({
  ...DATA_GRID_FORCED_PROPS,
  ...(themedProps.dataSource
    ? {
        filterMode: "server",
        sortingMode: "server",
        paginationMode: "server",
      }
    : {}),
});

const defaultSlots = DATA_GRID_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridProps = <R extends GridValidRowModel>(
  inProps: DataGridProps<R>,
) => {
  const theme = useTheme();
  const themedProps = React.useMemo(
    () => getThemeProps({ props: inProps, theme, name: "MuiDataGrid" }),
    [theme, inProps],
  );

  const localeText = React.useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...themedProps.localeText }),
    [themedProps.localeText],
  );

  const slots = React.useMemo<GridSlotsComponent>(
    () =>
      computeSlots<GridSlotsComponent>({
        defaultSlots,
        slots: themedProps.slots,
      }),
    [themedProps.slots],
  );

  const injectDefaultProps = React.useMemo(() => {
    return (
      Object.keys(DATA_GRID_PROPS_DEFAULT_VALUES) as Array<
        keyof DataGridPropsWithDefaultValues<any>
      >
    ).reduce((acc, key) => {
      // @ts-ignore
      acc[key] = themedProps[key] ?? DATA_GRID_PROPS_DEFAULT_VALUES[key];
      return acc;
    }, {} as DataGridPropsWithDefaultValues<any>);
  }, [themedProps]);

  return React.useMemo<DataGridProcessedProps<R>>(
    () => ({
      ...themedProps,
      ...injectDefaultProps,
      localeText,
      slots,
      ...getDataGridForcedProps(themedProps),
    }),
    [themedProps, localeText, slots, injectDefaultProps],
  );
};
