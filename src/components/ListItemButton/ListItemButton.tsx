import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemButtonProps
  extends OverrideMuiProps<
    MuiListItemButtonProps,
    | "children"
    | "disabled"
    | "disableGutters"
    | "disableRipple"
    | "selected"
    | "sx"
    | "component"
    | "ref"
  > {}

export const ListItemButton: React.FC<ListItemButtonProps> = React.forwardRef(
  (props, ref) => <MuiListItemButton ref={ref} dense {...props} />,
);
