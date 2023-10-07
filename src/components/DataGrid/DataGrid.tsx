import * as React from "react";
import {
  GridBody,
  GridContextProvider,
  GridFooterPlaceholder,
  GridHeader,
  GridRoot,
  GridValidRowModel,
  useGridSelector,
} from "@mui/x-data-grid";

import { DataGridProps } from "./models/dataGridProps";
import { DataGridVirtualScroller } from "./components/DataGridVirtualScroller";
import { gridPinnedColumnsSelector } from "./hooks";
import { useDataGridProps } from "./useDataGridProps";
import { useDataGridComponent } from "./useDataGridComponent";

const DataGridRaw = React.forwardRef(function DataGrid<
  R extends GridValidRowModel,
>(inProps: DataGridProps<R>, ref: React.Ref<HTMLDivElement>) {
  const props = useDataGridProps(inProps);
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
          ...props.sx,
          ...(props.disableColumnResize
            ? { ".MuiDataGrid-columnSeparator": { display: "none" } }
            : {}),
          '& [data-field="actions"] > [role="menu"]': {
            opacity: 0,
          },
          '& .Mui-hovered [data-field="actions"] > [role="menu"]': {
            opacity: 1,
          },
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
