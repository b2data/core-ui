import * as React from "react";
import { unstable_composeClasses as composeClasses } from "@mui/utils";
import {
  getDataGridUtilityClass,
  GridRenderCellParams,
  GridRowEventLookup,
  gridRowMaximumTreeDepthSelector,
  gridSortModelSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { gridEditRowsStateSelector } from "@mui/x-data-grid/internals";

import { DataGridProcessedProps } from "../models";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";

type OwnerState = {
  classes?: DataGridProcessedProps["classes"];
  isDraggable: boolean;
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { isDraggable, classes } = ownerState;

  const slots = {
    root: ["rowReorderCell", isDraggable && "rowReorderCell--draggable"],
    placeholder: ["rowReorderCellPlaceholder"],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

function GridRowReorderCell(params: GridRenderCellParams) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const treeDepth = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector);
  const editRowsState = useGridSelector(apiRef, gridEditRowsStateSelector);

  const cellValue = params.row.__reorder__ || params.id;

  const isDraggable = React.useMemo(
    () =>
      !!rootProps.rowReordering &&
      !sortModel.length &&
      treeDepth === 1 &&
      Object.keys(editRowsState).length === 0,
    [rootProps.rowReordering, sortModel, treeDepth, editRowsState],
  );

  const ownerState = { isDraggable, classes: rootProps.classes };
  const classes = useUtilityClasses(ownerState);

  const publish = React.useCallback(
    (
      eventName: keyof GridRowEventLookup,
      propHandler?: React.MouseEventHandler<HTMLDivElement> | undefined,
    ): React.MouseEventHandler<HTMLDivElement> =>
      (event) => {
        if (
          (event.target as any).nodeType === 1 &&
          !event.currentTarget.contains(event.target as Element)
        ) {
          return;
        }

        // The row might have been deleted
        if (!apiRef.current.getRow(params.id)) {
          return;
        }

        apiRef.current.publishEvent(
          eventName,
          apiRef.current.getRowParams(params.id),
          event,
        );

        if (propHandler) {
          propHandler(event);
        }
      },
    [apiRef, params.id],
  );

  const draggableEventHandlers = isDraggable
    ? {
        onDragStart: publish("rowDragStart"),
        onDragOver: publish("rowDragOver"),
        onDragEnd: publish("rowDragEnd"),
      }
    : null;

  if (params.rowNode.type === "footer") {
    return null;
  }

  return (
    <div
      className={classes.root}
      draggable={isDraggable}
      {...draggableEventHandlers}
    >
      <rootProps.slots.rowReorderIcon />
      <div className={classes.placeholder}>{cellValue}</div>
    </div>
  );
}

export { GridRowReorderCell };

export const renderRowReorderCell = (params: GridRenderCellParams) => {
  if (params.rowNode.type === "footer" || params.rowNode.type === "pinnedRow") {
    return null;
  }
  return <GridRowReorderCell {...params} />;
};
