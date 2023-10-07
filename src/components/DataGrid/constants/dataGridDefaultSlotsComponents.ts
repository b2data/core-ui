import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS as DATA_GRID_DEFAULT_SLOTS_COMPONENTS_COMMUNITY } from "@mui/x-data-grid/internals";
import { GridSlotsComponent } from "@mui/x-data-grid";

import { GridColumnMenu } from "../components/GridColumnMenu";
import { GridColumnHeaders } from "../components/GridColumnHeaders";

export const DATA_GRID_DEFAULT_SLOTS_COMPONENTS: GridSlotsComponent = {
  ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS_COMMUNITY,
  ColumnMenu: GridColumnMenu,
  ColumnHeaders: GridColumnHeaders,
};
