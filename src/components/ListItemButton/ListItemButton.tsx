import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemButtonProps
  extends OverrideMuiProps<
    MuiListItemButtonProps,
    | "disabled"
    | "disableGutters"
    | "disableRipple"
    | "selected"
    | "sx"
    | "component"
  > {}

export const ListItemButton = React.forwardRef(
  (props: ListItemButtonProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiListItemButton ref={ref} dense {...props} />
  ),
);
