import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemActionProps
  extends OverrideMuiProps<
    MuiListItemSecondaryActionProps,
    "children" | "sx"
  > {}

export const ListItemAction: FC<ListItemActionProps> = (props) => (
  <MuiListItemSecondaryAction {...props} />
);
