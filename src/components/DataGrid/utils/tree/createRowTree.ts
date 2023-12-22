import {
  GRID_ROOT_GROUP_ID,
  GridRowId,
  GridRowTreeConfig,
  GridTreeNode,
} from "@mui/x-data-grid";
import {
  buildRootGroup,
  GridRowTreeCreationValue,
} from "@mui/x-data-grid/internals";

import { DataGridProps } from "../../models";

import { GridTreePathDuplicateHandler, RowTreeBuilderNode } from "./models";
import { insertDataRowInTree } from "./insertDataRowInTree";

interface CreateRowTreeParams {
  previousTree: GridRowTreeConfig | null;
  nodes: RowTreeBuilderNode[];
  defaultGroupingExpansionDepth: number;
  isGroupExpandedByDefault?: DataGridProps["isGroupExpandedByDefault"];
  groupingName: string;
  onDuplicatePath?: GridTreePathDuplicateHandler;
}

/**
 * Transform a list of rows into a tree structure where each row references its parent and children.
 */
export const createRowTree = (
  params: CreateRowTreeParams,
): GridRowTreeCreationValue => {
  const dataRowIds: GridRowId[] = [];
  const tree: Record<GridRowId, GridTreeNode> = {
    [GRID_ROOT_GROUP_ID]: buildRootGroup(),
  };
  const treeDepths: GridRowTreeCreationValue["treeDepths"] = {};

  for (let i = 0; i < params.nodes.length; i += 1) {
    const node = params.nodes[i];
    dataRowIds.push(node.id);

    insertDataRowInTree({
      tree,
      previousTree: params.previousTree,
      id: node.id,
      path: node.path,
      onDuplicatePath: params.onDuplicatePath,
      treeDepths,
      isGroupExpandedByDefault: params.isGroupExpandedByDefault,
      defaultGroupingExpansionDepth: params.defaultGroupingExpansionDepth,
    });
  }

  return {
    tree,
    treeDepths,
    groupingName: params.groupingName,
    dataRowIds,
  };
};
