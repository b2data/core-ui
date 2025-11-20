import { useState, useMemo, useCallback } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  RichTreeView,
  RichTreeViewProps,
  TreeViewBaseItem,
  createFlatSearchDataSource,
  useTreeViewApiRef,
} from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import type { TreeViewItemId } from "@mui/x-tree-view/models";

// Type for drag & drop position
interface TreeViewItemReorderPosition {
  parentId: string | null;
  index: number;
}

const meta: Meta<RichTreeViewProps<any, any>> = {
  title: "Components/RichTreeView",
  component: RichTreeView,
  tags: ["autodocs"],
};

export default meta;

// ============================================================================
// Base Story (No Lazy Loading)
// ============================================================================

type BaseItem = TreeViewBaseItem<{
  id: string;
  label: string;
  type: "folder" | "file";
}>;

const baseItems: BaseItem[] = [
  {
    id: "product",
    label: "Product",
    type: "folder",
    children: [
      { id: "product-roadmap", label: "Roadmap", type: "file" },
      { id: "product-specs", label: "Specifications", type: "file" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    type: "folder",
    children: [
      {
        id: "engineering-frontend",
        label: "Frontend",
        type: "folder",
        children: [
          { id: "frontend-components", label: "Components", type: "file" },
          { id: "frontend-utils", label: "Utils", type: "file" },
        ],
      },
      {
        id: "engineering-backend",
        label: "Backend",
        type: "folder",
        children: [
          { id: "backend-api", label: "API", type: "file" },
          { id: "backend-db", label: "Database", type: "file" },
        ],
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    type: "folder",
    children: [
      { id: "design-system", label: "Design System", type: "file" },
      { id: "design-tokens", label: "Tokens", type: "file" },
    ],
  },
];

export const Base: StoryObj<RichTreeViewProps<BaseItem, any>> = {
  args: {},
  render: () => {
    return (
      <Box sx={{ height: 500, width: 500 }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Base Tree View (without lazy loading)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Simple tree with static data. All items are loaded immediately, no
            dataSource is used.
          </Typography>
          <RichTreeView
            items={baseItems}
            defaultExpandedItems={["product", "engineering"]}
            getItemId={(item) => item.id}
            getItemLabel={(item) => item.label}
            getItemChildren={(item) => item.children}
            getItemIcon={(item) =>
              item.type === "folder" ? FolderIcon : DescriptionIcon
            }
          />
        </Stack>
      </Box>
    );
  },
};

// ============================================================================
// Drag & Drop Story
// ============================================================================

type DragItem = TreeViewBaseItem<{
  id: string;
  label: string;
  type: "folder" | "file";
}>;

const initialDragItems: DragItem[] = [
  {
    id: "roadmap",
    label: "Product Roadmap",
    type: "folder",
    children: [
      { id: "roadmap-q1", label: "Q1 Priorities", type: "file" },
      { id: "roadmap-q2", label: "Q2 Priorities", type: "file" },
    ],
  },
  {
    id: "design",
    label: "Design",
    type: "folder",
    children: [
      { id: "design-system", label: "Design System v2", type: "folder" },
      { id: "tokens", label: "Tokens", type: "file" },
    ],
  },
  {
    id: "archive",
    label: "Archive",
    type: "folder",
    children: [{ id: "archive-2023", label: "2023", type: "file" }],
  },
];

const removeItemAtPosition = (
  nodes: DragItem[],
  position: TreeViewItemReorderPosition,
): { removed: DragItem | null; nodes: DragItem[] } => {
  if (position.parentId === null) {
    const next = [...nodes];
    const [removed] = next.splice(position.index, 1);
    return { removed: removed ?? null, nodes: next };
  }

  let removed: DragItem | null = null;
  const next = nodes.map((node) => {
    if (removed) {
      return node;
    }

    if (node.id === position.parentId) {
      const children = node.children ? [...node.children] : [];
      const [child] = children.splice(position.index, 1);
      removed = child ?? null;
      return { ...node, children };
    }

    if (node.children) {
      const result = removeItemAtPosition(node.children, position);
      if (result.removed) {
        removed = result.removed;
        return { ...node, children: result.nodes };
      }
    }

    return node;
  });

  return { removed, nodes: next };
};

const insertItemAtPosition = (
  nodes: DragItem[],
  position: TreeViewItemReorderPosition,
  item: DragItem,
): { nodes: DragItem[]; inserted: boolean } => {
  if (position.parentId === null) {
    const next = [...nodes];
    next.splice(position.index, 0, item);
    return { nodes: next, inserted: true };
  }

  let inserted = false;
  const next = nodes.map((node) => {
    if (inserted) {
      return node;
    }

    if (node.id === position.parentId) {
      const children = node.children ? [...node.children] : [];
      children.splice(position.index, 0, item);
      inserted = true;
      return { ...node, children };
    }

    if (node.children) {
      const result = insertItemAtPosition(node.children, position, item);
      if (result.inserted) {
        inserted = true;
        return { ...node, children: result.nodes };
      }
    }

    return node;
  });

  return { nodes: next, inserted };
};

export const DragAndDrop: StoryObj<RichTreeViewProps<DragItem, any>> = {
  args: {},
  render: () => {
    const [items, setItems] = useState<DragItem[]>(initialDragItems);

    const handleItemPositionChange = useCallback(
      ({
        itemId: _itemId,
        oldPosition,
        newPosition,
      }: {
        itemId: TreeViewItemId;
        oldPosition: TreeViewItemReorderPosition;
        newPosition: TreeViewItemReorderPosition;
      }) => {
        setItems((prev) => {
          const { removed, nodes } = removeItemAtPosition(prev, oldPosition);
          if (!removed) {
            return prev;
          }

          const { nodes: inserted } = insertItemAtPosition(
            nodes,
            newPosition,
            removed,
          );
          return inserted;
        });
      },
      [],
    );

    return (
      <Box sx={{ height: 500, width: 500 }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Drag & Drop with icons
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Drag and drop items to change their position in the tree. Use
            built-in DnD UI through `itemsReordering`.
          </Typography>
          <RichTreeView
            items={items}
            itemsReordering
            onItemPositionChange={handleItemPositionChange}
            getItemId={(item) => item.id}
            getItemLabel={(item) => item.label}
            getItemChildren={(item) => item.children}
            getItemIcon={(item) =>
              item.type === "folder" ? FolderIcon : DescriptionIcon
            }
          />
        </Stack>
      </Box>
    );
  },
};

// ============================================================================
// Lazy Load with Initial State Restoration Story
// ============================================================================

type FlatSearchItem = {
  id: string;
  name: string;
  parentId: string | null;
  childrenCount: number;
  type: "folder" | "file";
};

// Mock flat search data
const mockFlatSearchData: FlatSearchItem[] = [
  // Root children
  {
    id: "folder-1",
    name: "Folder 1",
    parentId: null,
    childrenCount: 3,
    type: "folder",
  },
  {
    id: "folder-2",
    name: "Folder 2",
    parentId: null,
    childrenCount: 2,
    type: "folder",
  },
  {
    id: "folder-3",
    name: "Folder 3",
    parentId: null,
    childrenCount: 0,
    type: "folder",
  },
  // Folder 1 children
  {
    id: "folder-1-1",
    name: "Folder 1.1",
    parentId: "folder-1",
    childrenCount: 2,
    type: "folder",
  },
  {
    id: "folder-1-2",
    name: "Folder 1.2",
    parentId: "folder-1",
    childrenCount: 0,
    type: "folder",
  },
  {
    id: "file-1-3",
    name: "File 1.3",
    parentId: "folder-1",
    childrenCount: 0,
    type: "file",
  },
  // Folder 1.1 children
  {
    id: "folder-1-1-1",
    name: "Folder 1.1.1",
    parentId: "folder-1-1",
    childrenCount: 0,
    type: "folder",
  },
  {
    id: "file-1-1-2",
    name: "File 1.1.2",
    parentId: "folder-1-1",
    childrenCount: 0,
    type: "file",
  },
  // Folder 2 children
  {
    id: "folder-2-1",
    name: "Folder 2.1",
    parentId: "folder-2",
    childrenCount: 0,
    type: "folder",
  },
  {
    id: "file-2-2",
    name: "File 2.2",
    parentId: "folder-2",
    childrenCount: 0,
    type: "file",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API that simulates /search/flat endpoint
const mockFlatSearchAPI = async (
  parentIds: (TreeViewItemId | null)[],
): Promise<Map<TreeViewItemId | null, FlatSearchItem[]>> => {
  // Simulate network delay
  await delay(300);

  const result = new Map<TreeViewItemId | null, FlatSearchItem[]>();

  // Filter items by parentId
  parentIds.forEach((parentId) => {
    const items = mockFlatSearchData.filter(
      (item) =>
        (item.parentId ?? null) === (parentId === "root" ? null : parentId),
    );
    result.set(parentId === "root" ? null : parentId, items);
  });

  return result;
};

// Helper function to build tree from flat data
function buildTreeFromFlatData<
  R extends { id: string; parentId: string | null },
>(flatData: R[], rootId: string | null = null): R[] {
  const map = new Map<string | null, R[]>();
  const itemMap = new Map<string, R>();

  // Build maps
  flatData.forEach((item) => {
    itemMap.set(item.id, item);
    const parentId = item.parentId ?? rootId;
    if (!map.has(parentId)) {
      map.set(parentId, []);
    }
    map.get(parentId)!.push(item);
  });

  // Build tree recursively with cycle detection
  const visited = new Set<string>();
  const buildNode = (parentId: string | null): R[] => {
    const children = map.get(parentId) || [];
    return children.map((item) => {
      // Check for cycles
      if (visited.has(item.id)) {
        console.warn(`Cycle detected for item ${item.id}`);
        return { ...item, children: [] } as R;
      }

      visited.add(item.id);
      const node = {
        ...item,
        children: buildNode(item.id),
      } as R;
      visited.delete(item.id);
      return node;
    });
  };

  return buildNode(rootId);
}

// Initial expanded items for state restoration (simulated from localStorage)
const initialExpandedItems: TreeViewItemId[] = [
  "root",
  "folder-1",
  "folder-1-1",
  "folder-2",
];

export const LazyLoadWithStateRestoration: StoryObj<
  RichTreeViewProps<FlatSearchItem, any>
> = {
  args: {},
  render: () => {
    const [treeItems, setTreeItems] = useState<FlatSearchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [useLazyLoading, setUseLazyLoading] = useState(false);
    // Simulate restored state from localStorage
    const [expandedItems, setExpandedItems] =
      useState<TreeViewItemId[]>(initialExpandedItems);
    const apiRef = useTreeViewApiRef();

    // Create root node
    const rootItem: FlatSearchItem = useMemo(
      () => ({
        id: "root",
        name: "Root",
        parentId: null,
        childrenCount: 3,
        type: "folder",
      }),
      [],
    );

    // Create data source for lazy loading (used after initial load)
    const dataSource = useMemo(
      () =>
        createFlatSearchDataSource<FlatSearchItem>({
          fetchItems: mockFlatSearchAPI,
          getChildrenCount: (item) => item.childrenCount ?? 0,
          getItemId: (item) => item.id,
          rootItem,
        }),
      [rootItem],
    );

    // Load initial data on mount
    React.useEffect(() => {
      const loadInitialData = async () => {
        setLoading(true);
        try {
          // Fetch all data we need at once for initial state restoration
          // Get all parentIds that need to be loaded (root + all expanded items)
          const expandedIds = initialExpandedItems.filter(
            (id) => id !== "root",
          );
          const allData = await mockFlatSearchAPI([null, ...expandedIds]);

          // Ensure every requested parentId exists in the map
          const parents = new Set<TreeViewItemId | null>([
            null,
            ...expandedIds,
          ]);
          parents.forEach((parentId) => {
            if (!allData.has(parentId)) {
              allData.set(parentId, []);
            }
          });

          // Prefill the dataSource cache so the lazy loading plugin can reuse it
          allData.forEach((items, parentId) => {
            dataSource.cache.set(parentId, items);
          });

          // Combine all items into flat array for initial tree render
          const flatItems: FlatSearchItem[] = [];
          allData.forEach((items) => flatItems.push(...items));

          // Build tree structure from flat data
          const rootChildrenTree = buildTreeFromFlatData(flatItems, null);
          const tree = [
            {
              ...rootItem,
              children: rootChildrenTree,
            },
          ];
          setTreeItems(tree);

          // After tree is built, enable lazy loading for future expansions
          setUseLazyLoading(true);
        } catch (error) {
          console.error("Failed to load data", error);
        } finally {
          setLoading(false);
        }
      };

      void loadInitialData();
    }, [rootItem, dataSource]); // Only run once on mount for initial state restoration

    const handleRefresh = (parentId: TreeViewItemId) => {
      // Clear the cache for this parent
      dataSource.refresh(parentId);
      // Force reload children using the API
      if (apiRef.current && "updateItemChildren" in apiRef.current) {
        (apiRef.current as any).updateItemChildren(parentId);
      }
    };

    return (
      <Box sx={{ height: 500, width: 500 }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Lazy Load with state restoration
          </Typography>
          <Typography variant="caption" color="text.secondary">
            1. Load initial state with /search/flat and build tree.
            <br />
            2. Prefill cache adapter through createFlatSearchDataSource, so
            lazy-loading can see the data.
            <br />
            3. All new expansions go through dataSource and server.
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleRefresh("folder-1")}
          >
            Refresh folder-1 (clear cache and reload)
          </Button>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
                gap: 2,
              }}
            >
              <CircularProgress />
              <Typography>Loading tree...</Typography>
            </Box>
          ) : treeItems.length > 0 ? (
            <RichTreeView
              apiRef={apiRef}
              items={treeItems}
              dataSource={useLazyLoading ? dataSource : undefined}
              expandedItems={expandedItems}
              onExpandedItemsChange={(_, newItems) => {
                setExpandedItems(newItems as TreeViewItemId[]);
              }}
              getItemId={(item) => item.id}
              getItemLabel={(item) => item.name}
              getItemIcon={(item) => {
                return item.type === "folder" ? FolderIcon : DescriptionIcon;
              }}
            />
          ) : (
            <Typography>No data</Typography>
          )}
        </Stack>
      </Box>
    );
  },
};
