import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface AvatarGroupProps
  extends OverrideMuiProps<
    MuiAvatarGroupProps,
    "variant" | "sx" | "max" | "spacing" | "total" | "children"
  > {
  /**
   * Spacing between avatars.
   * @default medium
   */
  spacing?: "medium" | "small";
  /**
   * @default circular
   */
  variant?: MuiAvatarGroupProps["variant"];
}

export const AvatarGroup: FC<AvatarGroupProps> = (props) => (
  <MuiAvatarGroup {...props} />
);
