import { useDemoData } from "@mui/x-data-grid-generator";

import { Box } from "../Box";

import { DataTable, DataTableProps } from "./DataTable";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DataTableProps> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<DataTableProps> = {
  render: (props) => {
    const rows = [
      { id: 1, col1: "Hello", col2: "World" },
      { id: 2, col1: "DataGridPro", col2: "is Awesome" },
      { id: 3, col1: "MUI", col2: "is Amazing" }
    ];

    const columns = [
      { field: "col1", headerName: "Column 1", width: 150 },
      { field: "col2", headerName: "Column 2", width: 150 }
    ];

    return <DataTable {...props} columns={columns} rows={rows} />;
  }
};

export const Virtual: StoryObj<DataTableProps> = {
  render: (props) => {
    const { data } = useDemoData({
      dataSet: "Commodity",
      rowLength: 500,
      editable: true
    });

    return (
      <Box sx={{ height: 520, width: "100%" }}>
        <DataTable
          {...props}
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  }
};
