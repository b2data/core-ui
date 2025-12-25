import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import {
  TreeView,
  TreeViewProps,
  TreeViewAction,
  TreeViewItemId,
  TreeViewItem,
  TreeViewRef,
  TreeViewHeader,
} from "./index";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Meta } from "@storybook/react";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  useDraggable,
  useDndMonitor,
} from "@dnd-kit/core";

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
              withDivider: true,
              onClick: () => {
                console.log("Edit:", item);
              },
            },
            {
              label: "Delete",
              sx: { color: "error.main" },
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

export const WithDragAndDropToHeader = () => {
  const [items, setItems] = useState<TreeViewItem[]>([
    { id: "1", parentId: null, childrenCount: 2, name: "Folder 1" },
    { id: "2", parentId: null, childrenCount: 1, name: "Folder 2" },
    { id: "3", parentId: null, childrenCount: 0, name: "Folder 3" },
    { id: "1-1", parentId: "1", childrenCount: 0, name: "Subfolder 1-1" },
    { id: "1-2", parentId: "1", childrenCount: 0, name: "Subfolder 1-2" },
    { id: "2-1", parentId: "2", childrenCount: 0, name: "Subfolder 2-1" },
  ]);

  const handleTreeItemDrop = useCallback(
    (itemId: TreeViewItemId) => {
      const item = items.find((i) => i.id === itemId);
      if (!item) return;

      const newItems = items.map((i) => {
        if (i.id === itemId) {
          return { ...i, parentId: null };
        }
        return i;
      });

      setItems(newItems);
      alert(`Moved "${(item as any).name || item.id}" to root`);
    },
    [items],
  );

  return (
    <Box sx={{ width: 500, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">
          TreeView with Drag & Drop to Header
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Drag folders from the tree and drop them into the header to move them
          to root level.
        </Typography>
        <List>
          <TreeViewHeader
            icon={<FolderIcon />}
            title="Root Folder"
            dropId="root"
            enableTreeItemDrops={true}
            onTreeItemDrop={handleTreeItemDrop}
            collapseButton={{
              isExpanded: true,
              onToggle: () => {},
            }}
          />
          <TreeView
            items={items}
            rootOffset={1}
            enableDragAndDrop={true}
            getItemLabel={(item) => (item as any).name || `Item ${item.id}`}
            getItemIcon={(item) =>
              item.childrenCount > 0 ? (
                <FolderIcon fontSize="small" />
              ) : (
                <FolderOpenIcon fontSize="small" />
              )
            }
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
        </List>
      </Stack>
    </Box>
  );
};

const mockUsers = [
  { id: "user-1", name: "John Doe", email: "john@example.com" },
  { id: "user-2", name: "Jane Smith", email: "jane@example.com" },
  { id: "user-3", name: "Bob Johnson", email: "bob@example.com" },
  { id: "user-4", name: "Alice Williams", email: "alice@example.com" },
];

const DraggableUserItem = ({ user }: { user: (typeof mockUsers)[0] }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: user.id,
    data: {
      type: "Users",
      data: [user],
    },
  });

  return (
    <ListItem
      ref={setNodeRef}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        mb: 1,
        bgcolor: "background.paper",
        cursor: isDragging ? "grabbing" : "grab",
        opacity: isDragging ? 0.3 : 1,
        pointerEvents: isDragging ? "none" : "auto",
      }}
    >
      <DragIndicatorIcon
        sx={{ mr: 1, color: "text.secondary", cursor: "grab" }}
        {...attributes}
        {...listeners}
      />
      <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: "primary.main" }}>
        <PersonIcon fontSize="small" />
      </Avatar>
      <ListItemText primary={user.name} secondary={user.email} />
    </ListItem>
  );
};

export const ControlledModeWithLazyLoading = () => {
  const STORAGE_KEY = "treeview-expanded-items-lazy";

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

  const loadFromStorage = (): TreeViewItemId[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
    return ["1", "1-1"];
  };

  const [expandedItemIds, setExpandedItemIds] =
    useState<TreeViewItemId[]>(loadFromStorage);

  const handleExpandedItemsChange = (itemIds: TreeViewItemId[]) => {
    setExpandedItemIds(itemIds);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemIds));
      console.log("Saved to localStorage:", itemIds);
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  };

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
        <Typography variant="h6">
          TreeView - Controlled Mode with Lazy Loading
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Combines controlled expanded state with lazy loading. Expanded state
          is persisted to localStorage and restored on page reload.
        </Typography>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Currently expanded:{" "}
          </Typography>
          {expandedItemIds.length > 0 ? (
            <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
              {expandedItemIds.map((id) => (
                <Chip key={id} label={id} size="small" />
              ))}
            </Box>
          ) : (
            <Typography variant="caption" color="text.secondary">
              None
            </Typography>
          )}
        </Box>
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
          expandedItemIds={expandedItemIds}
          onExpandedItemsChange={handleExpandedItemsChange}
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

export const WithEmptyState = () => {
  const [hasItems, setHasItems] = useState(false);

  const emptyItems: TreeViewItem[] = [];
  const itemsWithData: TreeViewItem[] = [
    { id: "1", parentId: null, childrenCount: 2 },
    { id: "2", parentId: null, childrenCount: 1 },
    { id: "1-1", parentId: "1", childrenCount: 0 },
    { id: "1-2", parentId: "1", childrenCount: 0 },
    { id: "2-1", parentId: "2", childrenCount: 0 },
  ];

  const emptyStateComponent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
        textAlign: "center",
      }}
    >
      <FolderOpenIcon
        sx={{
          fontSize: 48,
          color: "text.secondary",
          mb: 2,
          opacity: 0.5,
        }}
      />
      <Typography variant="h6" color="text.secondary" gutterBottom>
        No items found
      </Typography>
      <Typography variant="body2" color="text.secondary">
        The tree view is empty. Add items to get started.
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Empty State</Typography>
        <Typography variant="caption" color="text.secondary">
          This example demonstrates the emptyState prop. Toggle the button below
          to show/hide items.
        </Typography>
        <Box>
          <Chip
            label={hasItems ? "Hide Items" : "Show Items"}
            onClick={() => setHasItems(!hasItems)}
            clickable
            color={hasItems ? "primary" : "default"}
          />
        </Box>
        <TreeView
          items={hasItems ? itemsWithData : emptyItems}
          emptyState={emptyStateComponent}
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

export const WithLoaderDemo = () => {
  const [key, setKey] = useState(0);

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

  const fetchItems = async (
    parentIds: (TreeViewItemId | null)[],
  ): Promise<TreeViewItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

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

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Loader Demo</Typography>
        <Typography variant="caption" color="text.secondary">
          Click the "Reload" button to see the skeleton loader during initial
          loading.
        </Typography>
        <Box>
          <Button variant="contained" onClick={handleReload}>
            Reload
          </Button>
        </Box>
        <TreeView
          key={key}
          dataSource={{
            fetchItems,
            onItemsLoaded: (items) => {
              console.log("Items loaded:", items);
            },
            onLoadError: (error, parentIds) => {
              console.error("Load error:", error, "for parentIds:", parentIds);
            },
          }}
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

export const WithRefreshAPI = () => {
  const treeViewRef = useRef<TreeViewRef>(null);
  const [expandedItemIds, setExpandedItemIds] = useState<TreeViewItemId[]>([
    "1",
  ]);

  const [deletedItemIds, setDeletedItemIds] = useState<Set<TreeViewItemId>>(
    new Set(),
  );
  const [createdItems, setCreatedItems] = useState<TreeViewItem[]>([]);
  const [nextItemId, setNextItemId] = useState(100);
  const [pendingRefresh, setPendingRefresh] = useState<{
    parentIds: (TreeViewItemId | null)[];
  } | null>(null);

  const initialItems: TreeViewItem[] = [
    { id: "1", parentId: null, childrenCount: 2 },
    { id: "2", parentId: null, childrenCount: 1 },
    { id: "3", parentId: null, childrenCount: 0 },
    { id: "1-1", parentId: "1", childrenCount: 2 },
    { id: "1-2", parentId: "1", childrenCount: 0 },
    { id: "1-1-1", parentId: "1-1", childrenCount: 0 },
    { id: "1-1-2", parentId: "1-1", childrenCount: 0 },
    { id: "2-1", parentId: "2", childrenCount: 0 },
  ];

  const allItems = useMemo(() => {
    const deletedSet = deletedItemIds;
    const filtered = initialItems.filter((item) => {
      if (deletedSet.has(item.id)) {
        return false;
      }
      let currentParentId: TreeViewItemId | null = item.parentId;
      while (currentParentId !== null) {
        if (deletedSet.has(currentParentId)) {
          return false;
        }
        const parent = initialItems.find((i) => i.id === currentParentId);
        currentParentId = parent?.parentId ?? null;
      }
      return true;
    });

    const combined = [...filtered, ...createdItems];

    return combined.map((item) => {
      const actualChildrenCount = combined.filter(
        (child) => child.parentId === item.id,
      ).length;
      return {
        ...item,
        childrenCount: actualChildrenCount,
      };
    });
  }, [deletedItemIds, createdItems]);

  const fetchItems = useCallback(
    async (parentIds: (TreeViewItemId | null)[]): Promise<TreeViewItem[]> => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const result: TreeViewItem[] = [];
      const resultIds = new Set<TreeViewItemId>();

      parentIds.forEach((parentId) => {
        const children = allItems.filter((item) => item.parentId === parentId);
        children.forEach((child) => {
          if (!resultIds.has(child.id)) {
            result.push(child);
            resultIds.add(child.id);
          }
        });
      });

      parentIds.forEach((parentId) => {
        if (parentId !== null) {
          const item = allItems.find((item) => item.id === parentId);
          if (item && !resultIds.has(item.id)) {
            result.push(item);
            resultIds.add(item.id);
          }
        } else {
          const rootItems = allItems.filter((item) => item.parentId === null);
          rootItems.forEach((item) => {
            if (!resultIds.has(item.id)) {
              result.push(item);
              resultIds.add(item.id);
            }
          });
        }
      });

      console.log("API Request - parentIds:", parentIds);
      console.log("API Response - items:", result);

      return result;
    },
    [allItems],
  );

  useEffect(() => {
    if (pendingRefresh) {
      const timeoutId = setTimeout(() => {
        treeViewRef.current?.refresh(pendingRefresh.parentIds);
        setPendingRefresh(null);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [pendingRefresh, deletedItemIds]);

  const handleRefreshAll = () => {
    console.log("Refreshing all expanded items");
    treeViewRef.current?.refresh();
  };

  const handleRefreshRoot = () => {
    console.log("Refreshing root level");
    treeViewRef.current?.refresh([null]);
  };

  const handleRefreshItem1 = () => {
    console.log("Refreshing item '1' and its children");
    treeViewRef.current?.refresh(["1"]);
  };

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Refresh API</Typography>
        <Typography variant="caption" color="text.secondary">
          This example demonstrates the refresh functionality. After performing
          operations like create, update, or delete, you can refresh specific
          branches or all expanded items.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Button variant="outlined" size="small" onClick={handleRefreshAll}>
            Refresh All Expanded
          </Button>
          <Button variant="outlined" size="small" onClick={handleRefreshRoot}>
            Refresh Root
          </Button>
          <Button variant="outlined" size="small" onClick={handleRefreshItem1}>
            Refresh Item "1"
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="success"
            onClick={() => {
              const newId = `new-root-${nextItemId}`;
              console.log("Simulated create root item:", newId);
              const newItem: TreeViewItem = {
                id: newId,
                parentId: null,
                childrenCount: 0,
              };
              setCreatedItems((prev) => [...prev, newItem]);
              setNextItemId((prev) => prev + 1);
              setPendingRefresh({ parentIds: [null] });
            }}
          >
            Create Root Item
          </Button>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Currently expanded:{" "}
          </Typography>
          {expandedItemIds.length > 0 ? (
            <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
              {expandedItemIds.map((id) => (
                <Chip key={id} label={id} size="small" />
              ))}
            </Box>
          ) : (
            <Typography variant="caption" color="text.secondary">
              None
            </Typography>
          )}
        </Box>
        <TreeView
          ref={treeViewRef}
          dataSource={{
            fetchItems,
            onItemsLoaded: (items) => {
              console.log("Items loaded:", items);
            },
            onLoadError: (error, parentIds) => {
              console.error("Load error:", error, "for parentIds:", parentIds);
            },
          }}
          expandedItemIds={expandedItemIds}
          onExpandedItemsChange={setExpandedItemIds}
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
              label: "Create child",
              icon: <AddIcon fontSize="small" />,
              onClick: () => {
                const newId = `new-${nextItemId}`;
                console.log(
                  "Simulated create of:",
                  newId,
                  "under parent:",
                  item.id,
                );

                const newItem: TreeViewItem = {
                  id: newId,
                  parentId: item.id,
                  childrenCount: 0,
                };

                setCreatedItems((prev) => [...prev, newItem]);
                setNextItemId((prev) => prev + 1);

                if (!expandedItemIds.includes(item.id)) {
                  setExpandedItemIds((prev) => [...prev, item.id]);
                }

                const parentIds = [item.id];
                setPendingRefresh({ parentIds });
              },
            },
            {
              label: "Delete (simulated)",
              icon: <DeleteIcon fontSize="small" />,
              sx: { color: "error.main" },
              onClick: () => {
                console.log("Simulated delete of:", item.id);
                const parentIds =
                  item.parentId !== null ? [item.parentId] : [null];

                setCreatedItems((prev) => prev.filter((i) => i.id !== item.id));

                setDeletedItemIds((prev) => {
                  const next = new Set(prev);
                  next.add(item.id);
                  return next;
                });
                setPendingRefresh({ parentIds });
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

export const WithErrorHandling = () => {
  const [shouldFail, setShouldFail] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const allItems: TreeViewItem[] = [
    { id: "1", parentId: null, childrenCount: 2 },
    { id: "2", parentId: null, childrenCount: 1 },
    { id: "3", parentId: null, childrenCount: 0 },
    { id: "1-1", parentId: "1", childrenCount: 0 },
    { id: "1-2", parentId: "1", childrenCount: 0 },
    { id: "2-1", parentId: "2", childrenCount: 0 },
  ];

  const fetchItems = async (
    parentIds: (TreeViewItemId | null)[],
  ): Promise<TreeViewItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (shouldFail) {
      setErrorCount((prev) => prev + 1);
      throw new Error("Failed to load items. Please try again.");
    }

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
      } else {
        const rootItems = allItems.filter((item) => item.parentId === null);
        rootItems.forEach((item) => {
          if (!result.find((r) => r.id === item.id)) {
            result.push(item);
          }
        });
      }
    });

    return result;
  };

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Error Handling</Typography>
        <Typography variant="caption" color="text.secondary">
          This example demonstrates error handling in lazy loading mode. Toggle
          the error state to see how errors are handled.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant={shouldFail ? "contained" : "outlined"}
            color={shouldFail ? "error" : "primary"}
            size="small"
            onClick={() => setShouldFail(!shouldFail)}
          >
            {shouldFail ? "Disable Errors" : "Simulate Errors"}
          </Button>
          {errorCount > 0 && (
            <Chip label={`Errors: ${errorCount}`} color="error" size="small" />
          )}
        </Box>
        <TreeView
          dataSource={{
            fetchItems,
            onLoadError: (error, parentIds) => {
              console.error("Load error:", error, "for parentIds:", parentIds);
            },
          }}
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

export const WithLargeDataset = () => {
  const generateItems = (): TreeViewItem[] => {
    const items: TreeViewItem[] = [];
    const itemsPerLevel = 5;
    const levels = 4;

    for (let i = 1; i <= itemsPerLevel; i++) {
      items.push({
        id: `root-${i}`,
        parentId: null,
        childrenCount: itemsPerLevel,
      });
    }

    for (let level = 1; level <= levels; level++) {
      const parentPrefix = level === 1 ? "root" : `level-${level - 1}`;
      const currentPrefix = `level-${level}`;

      for (let parentNum = 1; parentNum <= itemsPerLevel; parentNum++) {
        const parentId =
          level === 1 ? `root-${parentNum}` : `${parentPrefix}-${parentNum}`;

        for (let childNum = 1; childNum <= itemsPerLevel; childNum++) {
          const hasChildren = level < levels;
          items.push({
            id: `${currentPrefix}-${parentNum}-${childNum}`,
            parentId,
            childrenCount: hasChildren ? itemsPerLevel : 0,
          });
        }
      }
    }

    return items;
  };

  const allItems = useMemo(() => generateItems(), []);

  const fetchItems = useCallback(
    async (parentIds: (TreeViewItemId | null)[]): Promise<TreeViewItem[]> => {
      await new Promise((resolve) => setTimeout(resolve, 300));

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
        } else {
          const rootItems = allItems.filter((item) => item.parentId === null);
          rootItems.forEach((item) => {
            if (!result.find((r) => r.id === item.id)) {
              result.push(item);
            }
          });
        }
      });

      return result;
    },
    [allItems],
  );

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeView with Large Dataset</Typography>
        <Typography variant="caption" color="text.secondary">
          This example demonstrates performance with a large dataset (
          {allItems.length} items). Items are loaded lazily as you expand
          folders.
        </Typography>
        <TreeView
          dataSource={{
            fetchItems,
            debounceMs: 100,
          }}
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

export const HeaderWithTreeView = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">TreeViewHeader with TreeView</Typography>
        <List>
          <TreeViewHeader
            icon={<FolderIcon />}
            title="My Folders"
            collapseButton={{
              isExpanded,
              onToggle: () => setIsExpanded(!isExpanded),
            }}
            action={{
              icon: <AddIcon />,
              tooltip: "Create new folder",
              onClick: () => console.log("Create clicked"),
            }}
            onClick={() => console.log("Header clicked")}
          />
          {isExpanded && (
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
              rootOffset={1}
            />
          )}
        </List>
      </Stack>
    </Box>
  );
};

export const WithHeaderAndExternalDrops = () => {
  const items = [
    { id: "folder-1", parentId: null, childrenCount: 2, name: "Team A" },
    { id: "folder-2", parentId: null, childrenCount: 1, name: "Team B" },
    { id: "folder-3", parentId: null, childrenCount: 0, name: "Team C" },
    {
      id: "folder-1-1",
      parentId: "folder-1",
      childrenCount: 0,
      name: "Subteam 1",
    },
    {
      id: "folder-1-2",
      parentId: "folder-1",
      childrenCount: 0,
      name: "Subteam 2",
    },
    {
      id: "folder-2-1",
      parentId: "folder-2",
      childrenCount: 0,
      name: "Subteam 3",
    },
  ];

  const [droppedUsers, setDroppedUsers] = useState<
    Record<string, typeof mockUsers>
  >({});
  const [headerDroppedUsers, setHeaderDroppedUsers] = useState<
    typeof mockUsers
  >([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const activeUser = activeId ? mockUsers.find((u) => u.id === activeId) : null;

  const handleExternalDrop = useCallback(
    (
      event: { type: string; data: any[] },
      targetItem: TreeViewItem,
      position: "before" | "after" | "inside",
    ) => {
      console.log("External drop:", {
        type: event.type,
        data: event.data,
        targetItem: targetItem.id,
        position,
      });

      const folderId = String(targetItem.id);
      const users = event.data as typeof mockUsers;
      setDroppedUsers((prev) => ({
        ...prev,
        [folderId]: [...(prev[folderId] || []), ...users],
      }));

      alert(
        `Dropped ${users.length} user(s) into "${targetItem.name || targetItem.id}"`,
      );
    },
    [],
  );

  const handleHeaderDrop = useCallback(
    (event: { type: string; data: unknown[] }) => {
      const users = event.data as typeof mockUsers;
      setHeaderDroppedUsers((prev) => [...prev, ...users]);
      alert(`Dropped ${users.length} user(s) into root header`);
    },
    [],
  );

  const canAcceptExternalDrop = useCallback((dropType: string) => {
    if (dropType !== "Users") return false;
    return true;
  }, []);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  }, []);

  const handleDragEnd = useCallback(() => {
    setActiveId(null);
  }, []);

  const HeaderDropMonitor = () => {
    useDndMonitor({
      onDragOver: ({ over, active }) => {
        if (!over || !active?.data?.current?.type) return;

        const droppableId = String(over.id);
        if (droppableId.startsWith("tree-header-")) {
          const dropType = active.data.current.type;
          const canAccept = canAcceptExternalDrop(dropType) ?? true;

          if (canAccept) {
            console.log("Dragging over header:", droppableId);
          }
        }
      },
      onDragEnd: ({ over, active }) => {
        if (!over || !active?.data?.current?.type) return;

        const droppableId = String(over.id);
        if (droppableId.startsWith("tree-header-")) {
          const dropType = active.data.current.type;
          const dropData = active.data.current.data || [];
          const canAccept = canAcceptExternalDrop(dropType) ?? true;

          if (canAccept) {
            handleHeaderDrop({
              type: dropType,
              data: Array.isArray(dropData) ? dropData : [dropData],
            });
          }
        }
      },
    });

    return null;
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <HeaderDropMonitor />
      <Box sx={{ width: "100%", p: 2 }}>
        <Stack spacing={3} direction="row" sx={{ height: 600 }}>
          <Paper
            sx={{
              width: 300,
              p: 2,
              overflow: "auto",
              position: "relative",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Users (Drag to folders)
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 2, display: "block" }}
            >
              Drag users from this list and drop them into the header or folders
              in the tree
            </Typography>
            <List>
              {mockUsers.map((user) => (
                <DraggableUserItem key={user.id} user={user} />
              ))}
            </List>
          </Paper>

          <Paper sx={{ flex: 1, p: 2, overflow: "auto" }}>
            <Typography variant="h6" gutterBottom>
              Folders with Header (Drop users here)
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 2, display: "block" }}
            >
              Drag users from the left panel and drop them into the header or
              folders. Items will highlight when you drag over them.
            </Typography>
            <List>
              <TreeViewHeader
                icon={<FolderIcon />}
                title={`Root Folder${
                  headerDroppedUsers.length > 0
                    ? ` (${headerDroppedUsers.length} users)`
                    : ""
                }`}
                dropId="root"
                enableExternalDrops={true}
                canAcceptExternalDrop={canAcceptExternalDrop}
                collapseButton={{
                  isExpanded,
                  onToggle: () => setIsExpanded(!isExpanded),
                }}
                action={{
                  icon: <AddIcon />,
                  tooltip: "Create new folder",
                  onClick: () => console.log("Create clicked"),
                }}
                onClick={() => console.log("Header clicked")}
              />
              {isExpanded && (
                <TreeView
                  items={items}
                  rootOffset={1}
                  enableExternalDrops={true}
                  onExternalDrop={handleExternalDrop}
                  canAcceptExternalDrop={canAcceptExternalDrop}
                  getItemLabel={(item) => {
                    const name = (item as any).name || `Item ${item.id}`;
                    const userCount =
                      droppedUsers[String(item.id)]?.length || 0;
                    return userCount > 0
                      ? `${name} (${userCount} users)`
                      : name;
                  }}
                  getItemIcon={(item) =>
                    item.childrenCount > 0 ? (
                      <FolderIcon fontSize="small" />
                    ) : (
                      <FolderOpenIcon fontSize="small" />
                    )
                  }
                  onItemClick={(item) => {
                    const users = droppedUsers[String(item.id)];
                    if (users && users.length > 0) {
                      console.log(`Users in ${item.id}:`, users);
                      alert(
                        `Users in this folder:\n${users.map((u) => `- ${u.name}`).join("\n")}`,
                      );
                    } else {
                      console.log("Clicked:", item);
                    }
                  }}
                />
              )}
            </List>
          </Paper>
        </Stack>
      </Box>
      {createPortal(
        <DragOverlay style={{ zIndex: 1500 }}>
          {activeUser ? (
            <Paper
              sx={{
                width: 280,
                p: 1.5,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
                bgcolor: "background.paper",
                boxShadow: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <DragIndicatorIcon sx={{ mr: 1, color: "text.secondary" }} />
              <Avatar
                sx={{ width: 32, height: 32, mr: 1, bgcolor: "primary.main" }}
              >
                <PersonIcon fontSize="small" />
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight="medium">
                  {activeUser.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {activeUser.email}
                </Typography>
              </Box>
            </Paper>
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
