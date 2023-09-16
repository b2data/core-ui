import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemButtonProps
  extends OverrideMuiProps<
    MuiListItemButtonProps,
    "children" | "disabled" | "disableGutters" | "selected" | "sx" | "component"
  > {}

export const ListItemButton: React.FC<ListItemButtonProps> = (props) => (
  <MuiListItemButton dense {...props} />
);
