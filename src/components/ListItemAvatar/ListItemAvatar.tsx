import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps as MuiListItemAvatarProps
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListItemAvatarProps
  extends OverrideMuiProps<MuiListItemAvatarProps, "children" | "sx"> {}

export const ListItemAvatar: React.FC<ListItemAvatarProps> = (props) => (
  <MuiListItemAvatar {...props} />
);
