import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import VideoFileIcon from "@mui/icons-material/VideoFile";
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
  disabled?: boolean;
}>;

const defaultExpandedIds = ["nested-1", "nested-1-1", "nested-1-1-1"];

const nestedRootItems: ItemType[] = [
  {
    id: "nested-1",
    label: "Product Roadmap",
    childrenCount: 2,
  },
  {
    id: "nested-2",
    label: "Archived Projects",
    childrenCount: 2,
  },
];

const NESTED_MAX_DEPTH = 4;

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

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const fetchNestedTreeItems = async (parentId?: string): Promise<ItemType[]> => {
  await delay(500);

  if (!parentId) {
    return nestedRootItems;
  }

  const depth = parentId.split("-").length;
  const hasChildren = depth < NESTED_MAX_DEPTH;
  const childrenCount = hasChildren ? 2 : 0;

  return Array.from({ length: childrenCount }, (_, index) => {
    const id = `${parentId}-${index + 1}`;
    return {
      id,
      label: `Node ${id.replace(/-/g, ".").toUpperCase()}`,
      childrenCount: depth + 1 < NESTED_MAX_DEPTH ? 2 : 0,
    };
  });
};

const prefetchExpandedItems = async (
  expandedIds: string[],
): Promise<Record<string, ItemType[]>> => {
  const entries = await Promise.all(
    expandedIds.map(async (id) => {
      const items = await fetchNestedTreeItems(id);
      return [id, items] as const;
    }),
  );

  return Object.fromEntries(entries);
};

// Base story with lazy loading
export const Base: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 400, width: 400 }}>
        <RichTreeView
          items={nestedRootItems}
          dataSource={{
            getChildrenCount: (item) => item?.childrenCount as number,
            getTreeItems: fetchData,
          }}
          defaultExpandedItems={defaultExpandedIds}
          prefetchExpandedItems={prefetchExpandedItems}
        />
      </Box>
    );
  },
};

// Drag and Drop (reordering)
export const DragAndDrop: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: (props: RichTreeViewProps<any, any>) => {
    return (
      <Box sx={{ minHeight: 400, minWidth: 400 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Drag items to reorder them
        </Typography>
        <RichTreeView
          {...props}
          items={nestedRootItems}
          itemsReordering
          defaultExpandedItems={defaultExpandedIds}
          prefetchExpandedItems={prefetchExpandedItems}
          onItemPositionChange={(params) => {
            console.log("Item moved:", params);
          }}
        />
      </Box>
    );
  },
};

// Multi-select with checkbox
export const MultiSelect: StoryObj<RichTreeViewProps<any, true>> = {
  args: {},
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Stack spacing={2}>
          <Typography variant="body2">
            Selected ({selectedItems.length}):{" "}
            {selectedItems.join(", ") || "None"}
          </Typography>
          <RichTreeView
            items={nestedRootItems}
            checkboxSelection
            multiSelect
            dataSource={{
              getChildrenCount: (item) => item?.childrenCount as number,
              getTreeItems: fetchData,
            }}
            selectedItems={selectedItems}
            onSelectedItemsChange={(_event, itemIds) => {
              setSelectedItems(itemIds as string[]);
            }}
            defaultExpandedItems={defaultExpandedIds}
            prefetchExpandedItems={prefetchExpandedItems}
          />
        </Stack>
      </Box>
    );
  },
};

// With actions menu
export const WithActionsMenu: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Hover over items to see the three-dot menu
        </Typography>
        <RichTreeView
          items={nestedRootItems}
          getItemActions={(item, itemId) => [
            {
              children: "Edit",
              onClick: () => {
                console.log("Edit clicked for:", itemId, item);
              },
            },
            {
              children: "Delete",
              onClick: () => {
                console.log("Delete clicked for:", itemId, item);
              },
            },
            {
              children: "Duplicate",
              onClick: () => {
                console.log("Duplicate clicked for:", itemId, item);
              },
            },
          ]}
          dataSource={{
            getChildrenCount: (item) => item?.childrenCount as number,
            getTreeItems: fetchData,
          }}
          defaultExpandedItems={defaultExpandedIds}
          prefetchExpandedItems={prefetchExpandedItems}
        />
      </Box>
    );
  },
};

// With icons, drag and drop and actions menu
export const WithIconsDragAndDropActionsMenu: StoryObj<
  RichTreeViewProps<any, any>
> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Items with custom icons based on their type
        </Typography>
        <RichTreeView
          getItemActions={(item, itemId) => [
            {
              children: "Edit",
              onClick: () => {
                console.log("Edit clicked for:", itemId, item);
              },
            },
            {
              children: "Delete",
              onClick: () => {
                console.log("Delete clicked for:", itemId, item);
              },
            },
            {
              children: "Duplicate",
              onClick: () => {
                console.log("Duplicate clicked for:", itemId, item);
              },
            },
          ]}
          items={nestedRootItems}
          itemsReordering
          getItemIcon={(item) => {
            const itemWithType = item as ItemType & {
              type?: "folder" | "file" | "image" | "video";
            };

            switch (itemWithType.type) {
              case "folder":
                return FolderIcon;
              case "image":
                return ImageIcon;
              case "video":
                return VideoFileIcon;
              case "file":
              default:
                return DescriptionIcon;
            }
          }}
          dataSource={{
            getChildrenCount: (item) => item?.childrenCount as number,
            getTreeItems: fetchData,
          }}
          defaultExpandedItems={defaultExpandedIds}
          prefetchExpandedItems={prefetchExpandedItems}
        />
      </Box>
    );
  },
};
