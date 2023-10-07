import {
  GridActionsCellItem,
  GridRowParams,
  GridSortModel,
} from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "@mui/material";

import { LinearProgress } from "../LinearProgress";

import { DataGrid } from "./DataGrid";
import { DataGridProps, GridFetchRowsParams } from "./models";
import mock from "./story-data.json";
import { useGridApiRef } from "./hooks";

import type { Meta, StoryObj } from "@storybook/react";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "website", headerName: "Website", flex: 1, sortable: false },
  { field: "rating", headerName: "Rating", flex: 0.5, sortable: false },
  { field: "email", headerName: "Email", flex: 1, sortable: false },
  {
    field: "actions",
    type: "actions",
    width: 24,
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem showInMenu label="Edit" />,
      <GridActionsCellItem showInMenu label="Delete" />,
    ],
  },
];

const meta: Meta<DataGridProps> = {
  title: "Components/Data Grid",
  component: DataGrid,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DataGridProps> = {
  args: {},
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid
        {...props}
        columns={columns}
        rows={mock.returnedRows.splice(0, 10)}
      />
    </div>
  ),
};

export const Loading: StoryObj<DataGridProps> = {
  args: {
    loading: true,
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid {...props} columns={columns} rows={[]} />
    </div>
  ),
};

export const NoRows: StoryObj<DataGridProps> = {
  args: {
    loading: false,
    localeText: {
      noRowsLabel: "No rows found",
    },
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid {...props} columns={columns} rows={[]} />
    </div>
  ),
};

export const PinnedColumns: StoryObj<DataGridProps> = {
  args: {
    disableColumnPinning: false,
    initialState: {
      pinnedColumns: { left: ["name"], right: ["rating"] },
    },
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid
        {...props}
        columns={columns}
        rows={mock.returnedRows.splice(0, 10)}
      />
    </div>
  ),
};

export const ResizeColumns: StoryObj<DataGridProps> = {
  args: {
    disableColumnResize: false,
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid
        {...props}
        columns={columns}
        rows={mock.returnedRows.splice(0, 10)}
      />
    </div>
  ),
};

export const ReorderColumns: StoryObj<DataGridProps> = {
  args: {
    disableColumnReorder: false,
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid
        {...props}
        columns={columns}
        rows={mock.returnedRows.splice(0, 10)}
      />
    </div>
  ),
};

export const LazyLoading: StoryObj<DataGridProps> = {
  args: {},
  render: (props) => {
    const apiRef = useGridApiRef();
    const [initialRows, setInitialRows] = useState<any[]>([]);
    const [rowCount, setRowCount] = useState(0);

    const fetchRow = useCallback(
      async (params: GridFetchRowsParams) => {
        return {
          slice: mock.returnedRows.slice(
            params.firstRowToRender,
            params.lastRowToRender,
          ),
          total: mock.returnedRows.length,
        };
      },
      [mock],
    );

    // The initial fetch request of the viewport.
    useEffect(() => {
      if (mock.returnedRows.length === 0) {
        return;
      }

      (async () => {
        const { slice, total } = await fetchRow({
          firstRowToRender: 0,
          lastRowToRender: 10,
          sortModel: [],
          filterModel: {
            items: [],
          },
        });

        setInitialRows(slice);
        setRowCount(total);
      })();
    }, [mock, fetchRow]);

    // Fetch rows as they become visible in the viewport
    const handleFetchRows = useCallback(
      async (params: GridFetchRowsParams) => {
        console.log("handleFetchRows", params);
        const { slice, total } = await fetchRow(params);

        apiRef.current.unstable_replaceRows(params.firstRowToRender, slice);
        setRowCount(total);
      },
      [apiRef, fetchRow],
    );

    const debouncedHandleFetchRows = useMemo(
      () => debounce(handleFetchRows, 200),
      [handleFetchRows],
    );

    const handleSortModelChange = (model: GridSortModel) => {
      console.log(model);
    };

    return (
      <div style={{ height: 300 }}>
        <DataGrid
          {...props}
          apiRef={apiRef}
          columns={columns}
          rows={initialRows}
          rowCount={rowCount}
          onSortModelChange={handleSortModelChange}
          sortingMode="server"
          rowsLoadingMode="server"
          onFetchRows={debouncedHandleFetchRows}
        />
      </div>
    );
  },
};

export const InfinitiveLoading: StoryObj<DataGridProps> = {
  args: {},
  render: (props) => {
    const MAX_ROW_LENGTH = mock.totalRowCount;

    function sleep(duration: number) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }

    const [loading, setLoading] = useState(false);
    const [loadedRows, setLoadedRows] = useState<any>([]);
    const mounted = useRef(true);

    const loadServerRows = async () => {
      setLoading(true);
      const newData = [...mock.returnedRows].splice(loadedRows.length, 10);
      // Simulate network throttle
      await sleep(Math.random() * 500 + 100);

      if (mounted.current) {
        setLoading(false);
        setLoadedRows(loadedRows.concat(newData));
      }
    };

    const handleOnRowsScrollEnd: DataGridProps["onRowsScrollEnd"] = () => {
      if (loadedRows.length <= MAX_ROW_LENGTH) {
        loadServerRows();
      }
    };

    useEffect(() => {
      return () => {
        mounted.current = true;
      };
    }, []);

    return (
      <div style={{ height: 300 }}>
        <DataGrid
          {...props}
          columns={columns}
          rows={loadedRows}
          loading={loading}
          hideFooter={false}
          hideFooterRowCount={false}
          onRowsScrollEnd={handleOnRowsScrollEnd}
          slots={{
            loadingOverlay: LinearProgress,
          }}
        />
      </div>
    );
  },
};
