import { useMemo, useState } from "react";
import { Autocomplete } from "../Autocomplete";
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridColDef,
  useGridApiRef,
  useGridRowKeyboardSelection,
} from "./index";

import mock from "./story-data.json";

import type { Meta, StoryObj } from "@storybook/react";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1, editable: true },
  { field: "website", headerName: "Website", flex: 1, sortable: false },
  {
    field: "rating",
    headerName: "Rating",
    flex: 0.5,
    editable: true,
    type: "singleSelect",
    renderEditCell: (params) => (
      <Autocomplete
        options={[
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
        ]}
        disableClearable
        value={params.value}
        onChange={(v) => {
          params.api.setEditCellValue({
            id: params.id,
            field: "status",
            value: v,
          });
          params.api.stopCellEditMode({
            field: "status",
            id: params.id,
          });
        }}
      />
    ),
  },
  { field: "email", headerName: "Email", flex: 1, sortable: false },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    editable: true,
    type: "dateTime",
  },
  {
    field: "actions",
    type: "actions",
    width: 24,
    getActions: () => [
      <GridActionsCellItem showInMenu label="Edit" key="edit" />,
      <GridActionsCellItem showInMenu label="Delete" key="delete" />,
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
  args: {
    disableColumnResize: true,
    rowHeight: 40,
    pinnedColumns: {
      left: ["name"],
    },
  },
  render: (props) => {
    const [state, setState] = useState(0);

    const dataSource = useMemo(
      () => ({
        getRows: async () => {
          const newRows = [...mock.returnedRows].splice(
            Math.round(Math.random() * 10),
            Math.round(Math.random() * 100),
          );
          if (state === 3) {
            return { rows: [], rowCount: 0 };
          }

          return {
            rows: newRows,
            rowCount: newRows.length,
          };
        },
      }),
      [state],
    );

    return (
      <div style={{ height: 300 }}>
        <button onClick={() => setState((s) => s + 1)}>Reset</button>
        <DataGrid {...props} columns={columns} dataSource={dataSource} />
      </div>
    );
  },
};

// Component wrapper that enables keyboard row selection
function DataGridWithKeyboardSelection(
  props: DataGridProps & {
    keyboardSelectionKeys?: "Enter" | " " | ("Enter" | " ")[];
    keyboardEventType?: "rowClick" | "rowDoubleClick" | "none";
  },
) {
  const apiRef = useGridApiRef();
  useGridRowKeyboardSelection(apiRef, {
    keys: props.keyboardSelectionKeys,
    eventType: props.keyboardEventType,
  });
  return <DataGrid {...props} apiRef={apiRef} />;
}

export const WithKeyboardSelection: StoryObj<DataGridProps> = {
  args: {
    disableColumnResize: true,
    rowHeight: 40,
    pinnedColumns: {
      left: ["name"],
    },
  },
  render: (props) => {
    const [state, setState] = useState(0);
    const [selectedRow, setSelectedRow] = useState<string | null>(null);

    const dataSource = useMemo(
      () => ({
        getRows: async () => {
          const newRows = [...mock.returnedRows].splice(
            Math.round(Math.random() * 10),
            Math.round(Math.random() * 100),
          );
          if (state === 3) {
            return { rows: [], rowCount: 0 };
          }

          return {
            rows: newRows,
            rowCount: newRows.length,
          };
        },
      }),
      [state],
    );

    return (
      <div style={{ height: 300 }}>
        <div style={{ marginBottom: 8 }}>
          <button onClick={() => setState((s) => s + 1)}>Reset</button>
          <span style={{ marginLeft: 16 }}>
            {selectedRow
              ? `Selected row: ${selectedRow}`
              : "Use Arrow keys to navigate, Enter/Space to select row"}
          </span>
        </div>
        <DataGridWithKeyboardSelection
          {...props}
          columns={columns}
          dataSource={dataSource}
          onRowClick={(params) => {
            setSelectedRow(params.id as string);
            console.log("Row clicked:", params);
          }}
        />
      </div>
    );
  },
};
