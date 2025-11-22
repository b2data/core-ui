import { useState } from "react";
import { Box, Stack, Typography, Chip } from "@mui/material";
import {
  TreeView,
  TreeViewProps,
  TreeViewAction,
  TreeViewItemId,
  TreeViewItem,
} from "./index";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Meta } from "@storybook/react";

const meta: Meta<TreeViewProps> = {
  title: "Components/TreeView",
  component: TreeView,
  tags: ["autodocs"],
};

export default meta;

const mockItems = [
  { id: "1", parentId: null, childrenCount: 2 },
  { id: "2", parentId: null, childrenCount: 1 },
  { id: "3", parentId: null, childrenCount: 0 },
  { id: "1-1", parentId: "1", childrenCount: 2 },
  { id: "1-2", parentId: "1", childrenCount: 0 },
  { id: "1-1-1", parentId: "1-1", childrenCount: 0 },
  { id: "1-1-2", parentId: "1-1", childrenCount: 0 },
  { id: "2-1", parentId: "2", childrenCount: 0 },
];

export const Basic = () => {
  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView</Typography>
        <TreeView
          items={mockItems}
          getItemLabel={(item) => `Item ${item.id}`}
          getItemIcon={(item) =>
            item.childrenCount > 0 ? (
              <FolderIcon fontSize="small" />
            ) : (
              <DescriptionIcon fontSize="small" />
            )
          }
          onItemClick={(item) => {
            console.log("Clicked:", item);
          }}
        />
      </Stack>
    </Box>
  );
};

export const WithActions = () => {
  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Actions</Typography>
        <Typography variant="caption" color="text.secondary">
          Hover over items to see action menu (three dots icon)
        </Typography>
        <TreeView
          items={mockItems}
          getItemLabel={(item) => `Item ${item.id}`}
          getItemIcon={(item) =>
            item.childrenCount > 0 ? (
              <FolderIcon fontSize="small" />
            ) : (
              <DescriptionIcon fontSize="small" />
            )
          }
          getItemActions={(item): TreeViewAction[] => [
            {
              label: "Edit",
              icon: <EditIcon fontSize="small" />,
              onClick: () => {
                console.log("Edit:", item);
              },
            },
            {
              label: "Delete",
              icon: <DeleteIcon fontSize="small" />,
              onClick: () => {
                console.log("Delete:", item);
              },
            },
          ]}
          onItemClick={(item) => {
            console.log("Clicked:", item);
          }}
        />
      </Stack>
    </Box>
  );
};

export const WithSelection = () => {
  const [selectedItemId, setSelectedItemId] = useState<TreeViewItemId | null>(
    null,
  );

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Selection</Typography>
        <Box sx={{ height: "40px" }}>
          <Typography variant="caption" color="text.secondary">
            Selected:{" "}
          </Typography>
          {selectedItemId ? (
            <Chip label={selectedItemId} size="small" />
          ) : (
            <Typography variant="caption" color="text.secondary">
              None
            </Typography>
          )}
        </Box>
        <Box></Box>
        <TreeView
          items={mockItems}
          getItemLabel={(item) => `Item ${item.id}`}
          getItemIcon={(item) =>
            item.childrenCount > 0 ? (
              <FolderIcon fontSize="small" />
            ) : (
              <DescriptionIcon fontSize="small" />
            )
          }
          selectedItemId={selectedItemId ?? undefined}
          onSelectedItemChange={(itemId) => {
            setSelectedItemId(itemId);
            console.log("Selected:", itemId);
          }}
          onItemClick={(item) => {
            console.log("Clicked:", item);
          }}
        />
      </Stack>
    </Box>
  );
};

export const WithDragAndDrop = () => {
  const [items, setItems] = useState<TreeViewItem[]>([
    { id: "1", parentId: null, childrenCount: 2 },
    { id: "2", parentId: null, childrenCount: 1 },
    { id: "3", parentId: null, childrenCount: 0 },
    { id: "1-1", parentId: "1", childrenCount: 2 },
    { id: "1-2", parentId: "1", childrenCount: 0 },
    { id: "1-1-1", parentId: "1-1", childrenCount: 0 },
    { id: "1-1-2", parentId: "1-1", childrenCount: 0 },
    { id: "2-1", parentId: "2", childrenCount: 0 },
  ]);

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Drag & Drop</Typography>
        <Typography variant="caption" color="text.secondary">
          Drag items to reorder or move them into other items. Item "3" cannot
          be dragged, and items cannot be moved inside item "2".
        </Typography>
        <TreeView
          items={items}
          enableDragAndDrop={true}
          getItemLabel={(item) => `Item ${item.id}`}
          getItemIcon={(item) =>
            item.childrenCount > 0 ? (
              <FolderIcon fontSize="small" />
            ) : (
              <DescriptionIcon fontSize="small" />
            )
          }
          canDragItem={(item) => {
            return item.id !== "3";
          }}
          canDropOnItem={(_draggedItem, targetItem, position) => {
            if (targetItem?.id === "2" && position === "inside") {
              return false;
            }
            return true;
          }}
          onItemsReorder={({
            draggedItemId,
            targetItemId,
            position,
            newItems,
          }) => {
            console.log("Reorder:", {
              draggedItemId,
              targetItemId,
              position,
            });
            setItems(newItems);
          }}
          onItemClick={(item) => {
            console.log("Clicked:", item);
          }}
        />
      </Stack>
    </Box>
  );
};

export const WithLazyLoadingAndStateRestoration = () => {
  const allItems: TreeViewItem[] = [
    { id: "1", parentId: null, childrenCount: 2 },
    { id: "2", parentId: null, childrenCount: 1 },
    { id: "3", parentId: null, childrenCount: 0 },
    { id: "1-1", parentId: "1", childrenCount: 2 },
    { id: "1-2", parentId: "1", childrenCount: 0 },
    { id: "1-1-1", parentId: "1-1", childrenCount: 0 },
    { id: "1-1-2", parentId: "1-1", childrenCount: 0 },
    { id: "2-1", parentId: "2", childrenCount: 0 },
    { id: "4", parentId: null, childrenCount: 1 },
    { id: "4-1", parentId: "4", childrenCount: 0 },
  ];

  const savedExpandedItems: TreeViewItemId[] = ["1", "1-1"];

  const fetchItems = async (
    parentIds: (TreeViewItemId | null)[],
  ): Promise<TreeViewItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const result: TreeViewItem[] = [];

    parentIds.forEach((parentId) => {
      const children = allItems.filter((item) => item.parentId === parentId);
      result.push(...children);
    });

    parentIds.forEach((parentId) => {
      if (parentId !== null) {
        const item = allItems.find((item) => item.id === parentId);
        if (item && !result.find((r) => r.id === item.id)) {
          result.push(item);
        }
      }
    });

    console.log("API Request - parentIds:", parentIds);
    console.log("API Response - items:", result);

    return result;
  };

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with State Restoration</Typography>
        <Typography variant="caption" color="text.secondary">
          Tree is restored with expanded items: {savedExpandedItems.join(", ")}.
          This simulates restoring state from localStorage after page reload.
        </Typography>
        <TreeView
          dataSource={{
            fetchItems,
            onItemsLoaded: (items) => {
              console.log("Items loaded:", items);
            },
            onLoadError: (error, parentIds) => {
              console.error("Load error:", error, "for parentIds:", parentIds);
            },
          }}
          initialExpandedItems={savedExpandedItems}
          getItemLabel={(item) => `Item ${item.id}`}
          getItemIcon={(item) =>
            item.childrenCount > 0 ? (
              <FolderIcon fontSize="small" />
            ) : (
              <DescriptionIcon fontSize="small" />
            )
          }
          onItemClick={(item) => {
            console.log("Clicked:", item);
          }}
        />
      </Stack>
    </Box>
  );
};
