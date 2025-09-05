import Box from "@mui/material/Box";
import { RichTreeView, RichTreeViewProps, TreeViewBaseItem } from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { v4 as uuidv4 } from "uuid";

const meta: Meta<RichTreeViewProps<any, any>> = {
  title: "Components/Rich Tree View",
  component: RichTreeView,
  tags: ["autodocs"],
};

export default meta;

export type ItemType = TreeViewBaseItem<{
  id: string;
  label: string;
  childrenCount?: number;
}>;

export const initialItems: ItemType[] = [
  {
    id: "1",
    label: "Amy Harris",
    childrenCount: Math.round(Math.random() * 10) + 1,
  },
  {
    id: "2",
    label: "Sam Smith",
    childrenCount: Math.round(Math.random() * 10) + 1,
  },
  {
    id: "3",
    label: "Jordan Miles",
    childrenCount: Math.round(Math.random() * 10) + 1,
  },
  {
    id: "4",
    label: "Amalia Brown",
    childrenCount: Math.round(Math.random() * 10) + 1,
  },
];

const fetchData = async (): Promise<ItemType[]> => {
  const length: number = Math.round(Math.random() * 10) + 1;
  const rows = Array.from({ length }, () => ({
    id: uuidv4(),
    label: `Row ${Math.round(Math.random() * 1000) + 1}`,
    childrenCount: length,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rows);
    }, 1000);
  });
};

export const Base: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 300 }}>
        <RichTreeView
          items={initialItems}
          dataSource={{
            getChildrenCount: (item) => item?.childrenCount as number,
            getTreeItems: fetchData,
          }}
        />
      </Box>
    );
  },
};

export const DragAndDrop: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: (props: RichTreeViewProps<any, any>) => (
    <Box sx={{ minHeight: 352, minWidth: 300 }}>
      <RichTreeView
        {...props}
        items={initialItems}
        itemsReordering
        defaultExpandedItems={["1", "2", "3", "4"]}
      />
    </Box>
  ),
};
