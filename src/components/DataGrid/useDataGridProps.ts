import * as React from "react";
import { useThemeProps } from "@mui/material/styles";
import {
  DATA_GRID_PROPS_DEFAULT_VALUES as DATA_GRID_PROPS_DEFAULT_VALUES_COMMUNITY,
  GRID_DEFAULT_LOCALE_TEXT,
  GridSlotsComponent,
  GridValidRowModel,
  UncapitalizedGridSlotsComponent,
} from "@mui/x-data-grid";
import {
  computeSlots,
  uncapitalizeObjectKeys,
  useProps,
} from "@mui/x-data-grid/internals";

import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from "./constants/dataGridDefaultSlotsComponents";
import {
  DataGridProcessedProps,
  DataGridProps,
  DataGridPropsWithDefaultValue,
} from "./models/dataGridProps";

export const DATA_GRID_PROPS_DEFAULT_VALUES: DataGridPropsWithDefaultValue = {
  ...DATA_GRID_PROPS_DEFAULT_VALUES_COMMUNITY,
  scrollEndThreshold: 80,
  autosizeOnMount: false,
  disableAutosize: true,
  disableColumnPinning: true,
  rowsLoadingMode: "client",
  sortingMode: "client",

  disableColumnFilter: true,
  disableColumnMenu: true,
  disableColumnResize: true,
  disableColumnSelector: true,
  disableDensitySelector: true,
  disableMultipleColumnsFiltering: true,
  disableColumnReorder: true,

  rowHeight: 36,
  columnHeaderHeight: 42,
  keepNonExistentRowsSelected: true,

  hideFooterSelectedRowCount: true,
  hideFooterPagination: true,
  hideFooterRowCount: true,
  hideFooter: true,
};

const defaultSlots = uncapitalizeObjectKeys(
  DATA_GRID_DEFAULT_SLOTS_COMPONENTS,
)!;

export const useDataGridProps = <R extends GridValidRowModel>(
  inProps: DataGridProps<R>,
) => {
  const [components, componentsProps, themedProps] = useProps(
    useThemeProps({
      props: inProps,
      name: "MuiDataGrid",
    }),
  );

  const localeText = React.useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...themedProps.localeText }),
    [themedProps.localeText],
  );

  const slots = React.useMemo<UncapitalizedGridSlotsComponent>(
    () =>
      computeSlots<GridSlotsComponent>({
        defaultSlots,
        slots: themedProps.slots,
        components,
      }),
    [components, themedProps.slots],
  );

  return React.useMemo<DataGridProcessedProps<R>>(
    () => ({
      ...DATA_GRID_PROPS_DEFAULT_VALUES,
      ...themedProps,
      localeText,
      slots,
      slotProps: themedProps.slotProps ?? componentsProps,
    }),
    [themedProps, localeText, slots, componentsProps],
  );
};
