import * as React from "react";
import { useCallback, RefObject, useEffect } from "react";
import type { GridEventListener } from "../../mui-x/grid/models/events/gridEventListener";
import type { GridCellParams } from "../../mui-x/grid/models/params/gridCellParams";
import { GridCellModes } from "../../mui-x/grid/models/gridEditRowModel";
import { GRID_CHECKBOX_SELECTION_COL_DEF } from "../../mui-x/grid/colDef/gridCheckboxSelectionColDef";
import { GRID_ACTIONS_COLUMN_TYPE } from "../../mui-x/grid/colDef/gridActionsColDef";
import { GRID_DETAIL_PANEL_TOGGLE_FIELD } from "../../mui-x/grid/internals/constants";
import type {
  GridApiPremium,
  GridPrivateApiPremium,
} from "../../mui-x/premium/models/gridApiPremium";

export type KeyboardSelectionKeys = "Enter" | " " | ("Enter" | " ")[];

export type KeyboardRowEventType = "rowClick" | "rowDoubleClick" | "none";

export interface UseGridRowKeyboardSelectionOptions {
  /**
   * Keys that trigger row selection and row event
   * @default ["Enter", " "]
   */
  keys?: KeyboardSelectionKeys;
  /**
   * Type of row event to trigger when keys are pressed
   * - "rowClick": Single click event
   * - "rowDoubleClick": Double click event (useful for opening details/editing)
   * - "none": Only select row, don't trigger any event (default)
   * @default "none"
   */
  eventType?: KeyboardRowEventType;
  /**
   * Callback that runs after the keyboard action is handled
   */
  onKeyActivate?: (
    params: GridCellParams,
    event: React.KeyboardEvent<HTMLElement>,
  ) => void;
}

/**
 * Hook to enable keyboard selection and activation of rows
 * - Arrow keys: navigate between rows (already handled by DataGrid)
 * - Enter/Space (configurable): select the row and trigger row event (configurable)
 */
export function useGridRowKeyboardSelection(
  apiRef:
    | RefObject<GridPrivateApiPremium | GridApiPremium | null>
    | null
    | undefined,
  options?: UseGridRowKeyboardSelectionOptions,
): void {
  const keys = options?.keys ?? ["Enter", " "];
  const allowedKeys = Array.isArray(keys) ? keys : [keys];
  const eventType = options?.eventType ?? "none";
  const onKeyActivate = options?.onKeyActivate;

  const handleCellKeyDown = useCallback<GridEventListener<"cellKeyDown">>(
    (params: GridCellParams, event: React.KeyboardEvent<HTMLElement>) => {
      // Early return if apiRef is not initialized
      if (!apiRef || !apiRef.current) {
        return;
      }

      // Only handle configured keys
      if (!allowedKeys.includes(event.key as "Enter" | " ")) {
        return;
      }

      // Ignore if cell is in edit mode
      const cellMode = apiRef.current.getCellMode(params.id, params.field);
      if (cellMode === GridCellModes.Edit) {
        return;
      }

      // Ignore if cell is editable and Enter is pressed (Enter is used for editing)
      if (params.isEditable && event.key === "Enter") {
        return;
      }

      // Ignore special columns
      if (params.field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
        return;
      }

      if (params.field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
        return;
      }

      const column = apiRef.current.getColumn(params.field);
      if (column?.type === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }

      // Prevent default behavior (scrolling for Space, etc.)
      event.preventDefault();
      event.stopPropagation();

      // Select the row if it's selectable
      if (apiRef.current.isRowSelectable(params.id)) {
        // Use resetSelection: true to clear previous selection and select only this row
        // This mimics the behavior of clicking on a row
        apiRef.current.selectRow(params.id, true, true);
      }

      // Trigger row event if eventType is not "none"
      if (eventType !== "none") {
        const rowParams = apiRef.current.getRowParams(params.id);
        if (rowParams) {
          // Create a synthetic mouse event
          const eventTypeMap: Record<
            Exclude<KeyboardRowEventType, "none">,
            string
          > = {
            rowClick: "click",
            rowDoubleClick: "dblclick",
          };

          const syntheticEvent = {
            ...event,
            type: eventTypeMap[eventType],
            button: 0,
            buttons: 0,
            clientX: 0,
            clientY: 0,
            currentTarget: event.currentTarget.closest(
              `.MuiDataGrid-row[data-id="${params.id}"]`,
            ) as HTMLElement,
            target: event.currentTarget,
            preventDefault: () => {
              event.preventDefault();
            },
            stopPropagation: () => {
              event.stopPropagation();
            },
          } as unknown as React.MouseEvent<HTMLDivElement>;

          // Publish the configured row event
          apiRef.current.publishEvent(
            eventType as Exclude<KeyboardRowEventType, "none">,
            rowParams,
            syntheticEvent,
          );
        }
      }

      onKeyActivate?.(params, event);
    },
    [apiRef, allowedKeys, eventType, onKeyActivate],
  );

  // Only subscribe to events when apiRef is initialized
  useEffect(() => {
    if (!apiRef || !apiRef.current) {
      return;
    }

    // Subscribe to cellKeyDown events
    const unsubscribe = apiRef.current.subscribeEvent(
      "cellKeyDown",
      handleCellKeyDown,
    );

    return () => {
      unsubscribe();
    };
  }, [apiRef, handleCellKeyDown]);
}
