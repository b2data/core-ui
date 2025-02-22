import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from "@mui/material";

import { OverrideMuiProps } from "../types";

export interface ListItemIconProps
  extends OverrideMuiProps<MuiListItemIconProps, "children" | "sx"> {}

export const ListItemIcon = (props: ListItemIconProps) => (
  <MuiListItemIcon {...props} />
);
