import { useGridPrivateApiContext as useCommunityGridPrivateApiContext } from "@mui/x-data-grid/internals";

import { GridPrivateApi } from "../../models";

export const useGridPrivateApiContext =
  useCommunityGridPrivateApiContext<GridPrivateApi>;
