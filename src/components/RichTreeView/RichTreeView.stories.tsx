import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import {
  RichTreeView,
  RichTreeViewProps,
  TreeViewBaseItem,
  useTreeViewApiRef,
} from "./index";
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

const initialItems: ItemType[] = [
  {
    id: "1",
    label: "Amy Harris",
    childrenCount: Math.round(Math.random() * 10),
  },
  {
    id: "2",
    label: "Sam Smith",
    childrenCount: Math.round(Math.random() * 10),
  },
  {
    id: "3",
    label: "Jordan Miles",
    childrenCount: Math.round(Math.random() * 10),
  },
  {
    id: "4",
    label: "Amalia Brown",
    childrenCount: Math.round(Math.random() * 10),
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

// Base story with lazy loading
export const Base: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 400, width: 400 }}>
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
          items={initialItems}
          itemsReordering
          defaultExpandedItems={["1", "2", "3", "4"]}
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
            items={initialItems}
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
            defaultExpandedItems={["1", "2", "3", "4"]}
          />
        </Stack>
      </Box>
    );
  },
};

// API usage
export const WithAPI: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const apiRef = useTreeViewApiRef();
    const [info, setInfo] = useState<string>("");

    const handleAction = (action: string) => {
      if (!apiRef.current) return;

      switch (action) {
        case "expand-all": {
          const allIds = initialItems.map((item) => item.id);
          allIds.forEach((id) => {
            apiRef.current?.setItemExpansion({
              itemId: id,
              shouldBeExpanded: true,
            });
          });
          setInfo("Expanded all items");
          break;
        }
        case "collapse-all": {
          initialItems.forEach((item) => {
            apiRef.current?.setItemExpansion({
              itemId: item.id,
              shouldBeExpanded: false,
            });
          });
          setInfo("Collapsed all items");
          break;
        }
        case "focus-first": {
          const syntheticEvent = new Event(
            "focus",
          ) as unknown as React.SyntheticEvent;
          apiRef.current?.focusItem(syntheticEvent, initialItems[0].id);
          setInfo(`Focused: ${initialItems[0].label}`);
          break;
        }
        case "get-item": {
          const item = apiRef.current?.getItem(initialItems[0].id);
          setInfo(`Item: ${item ? JSON.stringify(item) : "Not found"}`);
          break;
        }
      }
    };

    return (
      <Box sx={{ height: 500, width: 500 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Button size="small" onClick={() => handleAction("expand-all")}>
              Expand All
            </Button>
            <Button size="small" onClick={() => handleAction("collapse-all")}>
              Collapse All
            </Button>
            <Button size="small" onClick={() => handleAction("focus-first")}>
              Focus First
            </Button>
            <Button size="small" onClick={() => handleAction("get-item")}>
              Get First Item
            </Button>
          </Stack>
          {info && (
            <Typography variant="body2" color="primary">
              {info}
            </Typography>
          )}
          <RichTreeView
            apiRef={apiRef}
            items={initialItems}
            dataSource={{
              getChildrenCount: (item) => item?.childrenCount as number,
              getTreeItems: fetchData,
            }}
            defaultExpandedItems={["1", "2"]}
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
          items={initialItems}
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
          defaultExpandedItems={["1", "2", "3", "4"]}
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
    const itemsWithType: (ItemType & {
      type?: "folder" | "file" | "image" | "video";
    })[] = [
      {
        id: "1",
        label: "Documents",
        type: "folder",
        childrenCount: 5,
      },
      {
        id: "2",
        label: "Pictures",
        type: "folder",
        childrenCount: 3,
      },
      {
        id: "3",
        label: "Videos",
        type: "folder",
        childrenCount: 2,
      },
      {
        id: "4",
        label: "README.txt",
        type: "file",
        childrenCount: 0,
      },
    ];

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
          items={itemsWithType}
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
          defaultExpandedItems={["1", "2", "3"]}
        />
      </Box>
    );
  },
};
