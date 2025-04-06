import React, { useMemo } from "react";

import { useTheme } from "../../theming";
import { forwardRef } from "@mui/x-internals/forwardRef";
import { GridValidRowModel } from "@mui/x-data-grid";
import { ruRU, enUS } from "@mui/x-data-grid/locales";

import "../../mui-x/premium/typeOverloads";

import { DataGridPremium } from "../../mui-x/premium/DataGridPremium";
import type { DataGridPremiumProps } from "../../mui-x/premium/models/dataGridPremiumProps";

export * from "@mui/x-data-grid/components";
export * from "@mui/x-data-grid-pro/components";
export * from "@mui/x-data-grid/constants";
export * from "@mui/x-data-grid/hooks";
export * from "@mui/x-data-grid-pro/hooks";
export * from "@mui/x-data-grid/models";
export * from "@mui/x-data-grid-pro/models";
export * from "@mui/x-data-grid/context";
export * from "@mui/x-data-grid/colDef";
export * from "@mui/x-data-grid/utils";
export * from "@mui/x-data-grid-pro/utils";

export * from "../../mui-x/premium/hooks";
export * from "../../mui-x/premium/models";
export * from "../../mui-x/premium/components";

export { GridColumnHeaders } from "@mui/x-data-grid-pro";
export type { GridColumnHeadersProps } from "@mui/x-data-grid-pro";

export {
  useGridApiContext,
  useGridApiRef,
  useGridRootProps,
} from "../../mui-x/premium/typeOverloads/reexports";

export type {
  GridApi,
  GridInitialState,
  GridState,
} from "../../mui-x/premium/typeOverloads/reexports";

export {
  GridColumnMenu,
  GRID_COLUMN_MENU_SLOTS,
  GRID_COLUMN_MENU_SLOT_PROPS,
} from "../../mui-x/premium/components/reexports";

export type {
  GridGetRowsParamsPremium as GridGetRowsParams,
  GridGetRowsResponsePremium as GridGetRowsResponse,
  GridDataSourcePremium as GridDataSource,
  GridDataSourceApiPremium as GridDataSourceApi,
  GridDataSourceApiBasePremium as GridDataSourceApiBase,
  GridDataSourcePremiumPrivateApi as GridDataSourcePrivateApi,
} from "../../mui-x/premium/hooks/features/dataSource/models";

const DataGridRaw = forwardRef(function DataGrid<R extends GridValidRowModel>(
  inProps: DataGridPremiumProps<R>,
  ref: React.Ref<HTMLDivElement>,
) {
  const theme = useTheme();

  const allProps = useMemo(
    () => ({
      localeText: (localStorage.getItem("i18nextLng") === "ru" ? ruRU : enUS)
        .components.MuiDataGrid.defaultProps.localeText,
      disableColumnReorder: true,
      disableAutosize: true,
      disableColumnPinning: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      disableColumnResize: true,
      disableColumnSelector: true,
      disableDensitySelector: true,
      disableChildrenFiltering: true,
      disableChildrenSorting: true,
      hideFooterSelectedRowCount: true,
      hideFooterPagination: true,
      hideFooterRowCount: true,
      hideFooter: true,
      rowHeight: 36,
      columnHeaderHeight: 42,
      keepNonExistentRowsSelected: true,
      rowReordering: false,
      treeData: false,
      cellSelection: false,
      disableClipboardPaste: true,
      ...inProps,
    }),
    [inProps],
  );

  return (
    <DataGridPremium
      ref={ref}
      {...allProps}
      sx={{
        ...(inProps.disableColumnResize
          ? { ".MuiDataGrid-columnSeparator": { display: "none" } }
          : {}),
        '& [data-field="actions"] > [role="menu"] > button': {
          opacity: 0,
          [theme.breakpoints.down("tablet")]: { opacity: 1 },
        },
        "& .MuiDataGrid-rowReorderCell": {
          opacity: 0,
          [theme.breakpoints.down("tablet")]: { opacity: 1 },
        },
        "& .MuiDataGrid-root": { lineHeight: 1.2 },
        "& .MuiDataGrid-row.Mui-selected": { bgcolor: "#eff5ff" },
        "& .MuiDataGrid-row:hover": {
          bgcolor: "#f5f5f5",
          '& [data-field="actions"] > [role="menu"] > button': { opacity: 1 },
          "& .MuiDataGrid-rowReorderCell": { opacity: 1 },
        },
        '& [data-field="actions"] > [role="menu"] > button[aria-controls]': {
          opacity: 1,
        },
        "& .MuiDataGrid-sortIcon": { fontSize: 18 },
        "& .MuiDataGrid-filterIcon": { fontSize: 18 },
        "& .MuiDataGrid-cell--editing": { padding: "0 !important" },
        "& .MuiDataGrid-cell--editing .MuiFormControl-root": { height: 1 },
        "& .MuiDataGrid-cell--editing .MuiFormControl-root .MuiInputBase-root":
          { height: 1 },
        "& .MuiAutocomplete-root .MuiInput-root": {
          padding: "12px 30px 12px 10px !important",
          alignItems: "center !important",
          "& .MuiAutocomplete-endAdornment": { top: "50%" },
        },

        ...inProps.sx,
      }}
    />
  );
});

interface DataGridComponent {
  <R extends GridValidRowModel = any>(
    props: DataGridPremiumProps<R> & React.RefAttributes<HTMLDivElement>,
  ): React.JSX.Element;
  propTypes?: any;
}

export type { DataGridPremiumProps as DataGridProps };
export const DataGrid = React.memo(DataGridRaw) as DataGridComponent;
