import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS as DATA_GRID_DEFAULT_SLOTS_COMPONENTS_COMMUNITY } from "@mui/x-data-grid/internals";
import { GridSlotsComponent } from "@mui/x-data-grid";

import { GridColumnHeaders, GridColumnMenu } from "../components";

export const DATA_GRID_DEFAULT_SLOTS_COMPONENTS: GridSlotsComponent = {
  ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS_COMMUNITY,
  ColumnMenu: GridColumnMenu,
  ColumnHeaders: GridColumnHeaders,
};
