import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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

// Checkbox selection (single)
export const CheckboxSelection: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string | null>(null);

    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Stack spacing={2}>
          <Typography variant="body2">
            Selected: {selectedItems || "None"}
          </Typography>
          <RichTreeView
            items={initialItems}
            checkboxSelection
            dataSource={{
              getChildrenCount: (item) => item?.childrenCount as number,
              getTreeItems: fetchData,
            }}
            selectedItems={selectedItems}
            onSelectedItemsChange={(_event, itemIds) => {
              setSelectedItems(itemIds as string);
            }}
          />
        </Stack>
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

// Multi-select with selection propagation
export const MultiSelectWithPropagation: StoryObj<
  RichTreeViewProps<any, true>
> = {
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
          <Typography variant="caption" color="text.secondary">
            Selecting a parent selects all descendants
          </Typography>
          <RichTreeView
            items={initialItems}
            checkboxSelection
            multiSelect
            selectionPropagation={{ descendants: true, parents: true }}
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

// Item editing
export const ItemEditing: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const [items, setItems] = useState(initialItems);

    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Stack spacing={2}>
          <Typography variant="body2">
            Double-click on an item to edit its label
          </Typography>
          <RichTreeView
            items={items}
            isItemEditable={() => true}
            onItemLabelChange={(itemId, newLabel) => {
              console.log("Label changed:", itemId, newLabel);
              setItems((prev) =>
                prev.map((item) =>
                  item.id === itemId ? { ...item, label: newLabel } : item,
                ),
              );
            }}
            defaultExpandedItems={["1", "2", "3", "4"]}
          />
        </Stack>
      </Box>
    );
  },
};

// Controlled expansion
export const ControlledExpansion: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              size="small"
              onClick={() => setExpandedItems(["1", "2", "3", "4"])}
            >
              Expand All
            </Button>
            <Button size="small" onClick={() => setExpandedItems([])}>
              Collapse All
            </Button>
            <Typography variant="body2">
              Expanded: {expandedItems.join(", ") || "None"}
            </Typography>
          </Stack>
          <RichTreeView
            items={initialItems}
            expandedItems={expandedItems}
            onExpandedItemsChange={(_event, itemIds) => {
              setExpandedItems(itemIds);
            }}
            dataSource={{
              getChildrenCount: (item) => item?.childrenCount as number,
              getTreeItems: fetchData,
            }}
          />
        </Stack>
      </Box>
    );
  },
};

// Disabled items
export const DisabledItems: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const itemsWithDisabled: ItemType[] = [
      { ...initialItems[0], disabled: true },
      ...initialItems.slice(1),
    ];

    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          First item is disabled
        </Typography>
        <RichTreeView
          items={itemsWithDisabled}
          isItemDisabled={(item) => item?.disabled === true}
          dataSource={{
            getChildrenCount: (item) => item?.childrenCount as number,
            getTreeItems: fetchData,
          }}
        />
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

// Custom styling
export const CustomStyling: StoryObj<RichTreeViewProps<any, any>> = {
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
          sx={{
            "& .MuiTreeItem-root": {
              "&:hover": {
                backgroundColor: "action.hover",
              },
            },
            "& .MuiTreeItem-content": {
              padding: "8px 16px",
            },
          }}
          defaultExpandedItems={["1", "2", "3", "4"]}
        />
      </Box>
    );
  },
};

// Expansion trigger on icon
export const ExpansionTriggerIcon: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 400, width: 400 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Click on the icon to expand/collapse (not the content)
        </Typography>
        <RichTreeView
          items={initialItems}
          expansionTrigger="iconContainer"
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

// Event handlers
export const EventHandlers: StoryObj<RichTreeViewProps<any, any>> = {
  args: {},
  render: () => {
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
      setLogs((prev) => [message, ...prev].slice(0, 10));
    };

    return (
      <Box sx={{ height: 500, width: 500 }}>
        <Stack spacing={2}>
          <Box
            sx={{
              maxHeight: 150,
              overflow: "auto",
              p: 1,
              bgcolor: "grey.100",
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" component="div">
              <strong>Event Log:</strong>
            </Typography>
            {logs.length === 0 ? (
              <Typography variant="caption" color="text.secondary">
                No events yet
              </Typography>
            ) : (
              logs.map((log, index) => (
                <Typography key={index} variant="caption" component="div">
                  {log}
                </Typography>
              ))
            )}
          </Box>
          <RichTreeView
            items={initialItems}
            dataSource={{
              getChildrenCount: (item) => item?.childrenCount as number,
              getTreeItems: fetchData,
            }}
            onItemClick={(_event, itemId) => {
              addLog(`Item clicked: ${itemId}`);
            }}
            onItemExpansionToggle={(_event, itemId, isExpanded) => {
              addLog(`Item ${itemId} ${isExpanded ? "expanded" : "collapsed"}`);
            }}
            onItemFocus={(_event, itemId) => {
              addLog(`Item focused: ${itemId}`);
            }}
            onSelectedItemsChange={(_event, itemIds) => {
              addLog(
                `Selection changed: ${Array.isArray(itemIds) ? itemIds.join(", ") : itemIds}`,
              );
            }}
            checkboxSelection
            defaultExpandedItems={["1", "2"]}
          />
        </Stack>
      </Box>
    );
  },
};
