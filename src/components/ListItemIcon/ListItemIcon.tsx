import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemIconProps
  extends OverrideMuiProps<MuiListItemIconProps, "children" | "sx"> {}

export const ListItemIcon: React.FC<ListItemIconProps> = (props) => (
  <MuiListItemIcon {...props} />
);
