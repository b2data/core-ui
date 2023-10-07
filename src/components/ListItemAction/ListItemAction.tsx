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

export const ListItemAction = (props: ListItemActionProps) => (
  <MuiListItemSecondaryAction {...props} />
);
