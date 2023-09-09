import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemTextProps
  extends OverrideMuiProps<
    MuiListItemTextProps,
    | "primary"
    | "primaryTypographyProps"
    | "secondary"
    | "secondaryTypographyProps"
    | "sx"
    | "children"
  > {}

export const ListItemText: FC<ListItemTextProps> = (props) => (
  <MuiListItemText {...props} />
);
