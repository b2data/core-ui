import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemActionProps
  extends OverrideMuiProps<
    MuiListItemSecondaryActionProps,
    "children" | "sx"
  > {}

export const ListItemAction: React.FC<ListItemActionProps> = React.forwardRef(
  (props, ref) => <MuiListItemSecondaryAction ref={ref} {...props} />,
);
