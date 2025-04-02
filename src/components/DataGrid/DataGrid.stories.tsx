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
  { field: "rating", headerName: "Rating", flex: 0.5, sortable: false },
  { field: "email", headerName: "Email", flex: 1, sortable: false },
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
