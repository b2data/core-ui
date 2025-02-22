import * as React from "react";
import {
  enUS,
  GridBody,
  GridContextProvider,
  GridFooterPlaceholder,
  GridHeader,
  GridRoot,
  GridValidRowModel,
  ruRU,
  useGridSelector,
} from "@mui/x-data-grid";

import { useTheme } from "../../theming";

import { DataGridProps } from "./models";
import { DataGridVirtualScroller } from "./components";
import { gridPinnedColumnsSelector } from "./hooks";
import { useDataGridProps } from "./useDataGridProps";
import { useDataGridComponent } from "./useDataGridComponent";

const DataGridRaw = React.forwardRef(function DataGrid<
  R extends GridValidRowModel,
>(inProps: DataGridProps<R>, ref: React.Ref<HTMLDivElement>) {
  const theme = useTheme();
  const localeText = (localStorage.getItem("i18nextLng") === "ru" ? ruRU : enUS)
    .components.MuiDataGrid.defaultProps.localeText;
  const props = useDataGridProps({
    ...inProps,
    localeText: { ...localeText, ...inProps.localeText },
  });
  const privateApiRef = useDataGridComponent(props.apiRef, props);

  const pinnedColumns = useGridSelector(
    privateApiRef,
    gridPinnedColumnsSelector,
  );

  return (
    <GridContextProvider privateApiRef={privateApiRef} props={props}>
      <GridRoot
        className={props.className}
        style={props.style}
        sx={{
          ...(props.disableColumnResize
            ? { ".MuiDataGrid-columnSeparator": { display: "none" } }
            : {}),
          '& [data-field="actions"] > [role="menu"]': {
            opacity: 0,
            [theme.breakpoints.down("tablet")]: { opacity: 1 },
          },
          "& .MuiDataGrid-rowReorderCell": {
            opacity: 0,
            [theme.breakpoints.down("tablet")]: { opacity: 1 },
          },
          "& .MuiDataGrid-root": { lineHeight: 1.2 },
          "& .MuiDataGrid-row.Mui-selected": { bgcolor: "#eff5ff" },
          "& .MuiDataGrid-row:hover": { bgcolor: "#f5f5f5" },
          "& .MuiDataGrid-row.Mui-hovered": { bgcolor: "#f5f5f5" },
          "& .Mui-hovered": {
            '& [data-field="actions"] > [role="menu"]': { opacity: 1 },
            "& .MuiDataGrid-rowReorderCell": { opacity: 1 },
          },
          "& .MuiDataGrid-sortIcon": { fontSize: 18 },
          "& .MuiDataGrid-filterIcon": { fontSize: 18 },
          "& .MuiDataGrid-cellContent": { lineHeight: 1.1 },
          bgcolor: theme.palette.background.paper,
          ...props.sx,
        }}
        ref={ref}
        {...props.forwardedProps}
      >
        <GridHeader />
        <GridBody
          VirtualScrollerComponent={DataGridVirtualScroller}
          ColumnHeadersProps={{ pinnedColumns }}
        />
        <GridFooterPlaceholder />
      </GridRoot>
    </GridContextProvider>
  );
});

interface DataGridComponent {
  <R extends GridValidRowModel = any>(
    props: DataGridProps<R> & React.RefAttributes<HTMLDivElement>,
  ): React.JSX.Element;
}

export const DataGrid = React.memo(DataGridRaw) as DataGridComponent;
