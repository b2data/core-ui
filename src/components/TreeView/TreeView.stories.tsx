import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import {
  TreeView,
  TreeViewProps,
  TreeViewAction,
  TreeViewItemId,
  TreeViewItem,
  TreeViewRef,
} from "./index";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
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

  // Load from localStorage on mount
  const loadFromStorage = (): TreeViewItemId[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
    return ["1", "1-1"]; // Default expanded items
  };

  const [expandedItemIds, setExpandedItemIds] =
    useState<TreeViewItemId[]>(loadFromStorage);

  // Save to localStorage whenever expanded items change
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
