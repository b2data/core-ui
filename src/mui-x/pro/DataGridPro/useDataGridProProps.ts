import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { getThemeProps } from "@mui/system";
import {
  GRID_DEFAULT_LOCALE_TEXT,
  DATA_GRID_PROPS_DEFAULT_VALUES,
  GridValidRowModel,
} from "@mui/x-data-grid";
import {
  computeSlots,
  ROW_SELECTION_PROPAGATION_DEFAULT,
} from "@mui/x-data-grid/internals";
import {
  DataGridProProps,
  DataGridProProcessedProps,
  DataGridProPropsWithDefaultValue,
} from "../models/dataGridProProps";
import { GridProSlotsComponent } from "../models";
import { DATA_GRID_PRO_DEFAULT_SLOTS_COMPONENTS } from "../constants/dataGridProDefaultSlotsComponents";

interface GetDataGridProPropsDefaultValues extends DataGridProProps {}

type DataGridProForcedProps = {
  [key in keyof DataGridProProps]?: DataGridProProcessedProps[key];
};
type GetDataGridProForcedProps = (
  themedProps: GetDataGridProPropsDefaultValues,
) => DataGridProForcedProps;

const getDataGridProForcedProps: GetDataGridProForcedProps = (themedProps) => ({
  signature: "DataGridPro",
  ...(themedProps.dataSource
    ? {
        filterMode: "server",
        sortingMode: "server",
        paginationMode: "server",
      }
    : {}),
});

/**
 * The default values of `DataGridProPropsWithDefaultValue` to inject in the props of DataGridPro.
 */
export const DATA_GRID_PRO_PROPS_DEFAULT_VALUES: DataGridProPropsWithDefaultValue =
  {
    ...DATA_GRID_PROPS_DEFAULT_VALUES,
    autosizeOnMount: false,
    defaultGroupingExpansionDepth: 0,
    disableAutosize: false,
    disableChildrenFiltering: false,
    disableChildrenSorting: false,
    disableColumnPinning: false,
    getDetailPanelHeight: () => 500,
    headerFilters: false,
    keepColumnPositionIfDraggedOutside: false,
    rowSelectionPropagation: ROW_SELECTION_PROPAGATION_DEFAULT,
    rowReordering: false,
    rowsLoadingMode: "client",
    scrollEndThreshold: 80,
    treeData: false,
    lazyLoading: false,
    lazyLoadingRequestThrottleMs: 500,
    listView: false,
    multipleColumnsSortingMode: "withModifierKey",
  };

const defaultSlots = DATA_GRID_PRO_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridProProps = <R extends GridValidRowModel>(
  inProps: DataGridProProps<R>,
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

  const slots = React.useMemo<GridProSlotsComponent>(
    () =>
      computeSlots<GridProSlotsComponent>({
        defaultSlots,
        slots: themedProps.slots,
      }),
    [themedProps.slots],
  );

  return React.useMemo<DataGridProProcessedProps<R>>(
    () => ({
      ...DATA_GRID_PRO_PROPS_DEFAULT_VALUES,
      ...themedProps,
      localeText,
      slots,
      ...getDataGridProForcedProps(themedProps),
    }),
    [themedProps, localeText, slots],
  );
};
