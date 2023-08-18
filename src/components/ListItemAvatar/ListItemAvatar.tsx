import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps as MuiListItemAvatarProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface ListItemAvatarProps
  extends OverrideMuiProps<MuiListItemAvatarProps, "children" | "sx"> {}

export const ListItemAvatar: FC<ListItemAvatarProps> = (props) => (
  <MuiListItemAvatar {...props} />
);
