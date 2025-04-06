import { Autocomplete } from "../Autocomplete";
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridColDef,
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
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <DataGrid
        {...props}
        columns={columns}
        rows={[...mock.returnedRows].splice(0, 10)}
      />
    </div>
  ),
};
