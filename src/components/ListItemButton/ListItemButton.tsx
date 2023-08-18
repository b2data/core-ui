import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface ListItemButtonProps
  extends OverrideMuiProps<
    MuiListItemButtonProps,
    "children" | "disabled" | "disableGutters" | "selected" | "sx" | "component"
  > {}

export const ListItemButton: FC<ListItemButtonProps> = (props) => (
  <MuiListItemButton dense {...props} />
);
