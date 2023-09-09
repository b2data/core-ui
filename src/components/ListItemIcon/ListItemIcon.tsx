import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemIconProps
  extends OverrideMuiProps<MuiListItemIconProps, "children" | "sx"> {}

export const ListItemIcon: FC<ListItemIconProps> = (props) => (
  <MuiListItemIcon {...props} />
);
