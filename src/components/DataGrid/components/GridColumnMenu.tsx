import * as React from "react";
import {
  GRID_COLUMN_MENU_SLOT_PROPS as GRID_COLUMN_MENU_SLOT_PROPS_COMMUNITY,
  GRID_COLUMN_MENU_SLOTS as GRID_COLUMN_MENU_SLOTS_COMMUNITY,
  GridColumnMenuProps,
  GridGenericColumnMenu,
} from "@mui/x-data-grid";

import { GridColumnMenuPinningItem } from "./GridColumnMenuPinningItem";

export const GRID_COLUMN_MENU_SLOTS = {
  ...GRID_COLUMN_MENU_SLOTS_COMMUNITY,
  columnMenuPinningItem: GridColumnMenuPinningItem,
};

export const GRID_COLUMN_MENU_SLOT_PROPS = {
  ...GRID_COLUMN_MENU_SLOT_PROPS_COMMUNITY,
  columnMenuPinningItem: {
    displayOrder: 15,
  },
};

const GridColumnMenu = React.forwardRef<
  HTMLUListElement,
  GridColumnMenuProps
>(function GridProColumnMenu(props, ref) {
  return (
    <GridGenericColumnMenu
      ref={ref}
      {...props}
      defaultSlots={GRID_COLUMN_MENU_SLOTS}
      defaultSlotProps={GRID_COLUMN_MENU_SLOT_PROPS}
    />
  );
});

export { GridColumnMenu };
