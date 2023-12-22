import { useGridRootProps as useCommunityGridRootProps } from "@mui/x-data-grid";

import { DataGridProcessedProps } from "../../models";

export const useGridRootProps =
  useCommunityGridRootProps as () => DataGridProcessedProps;
