import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface AvatarGroupProps
  extends OverrideMuiProps<MuiAvatarGroupProps, "sx" | "max" | "total"> {
  /**
   * Spacing between avatars.
   * @default medium
   */
  spacing?: "medium" | "small";
  /**
   * The variant to use.
   * @default circular
   */
  variant?: MuiAvatarGroupProps["variant"];
}

export const AvatarGroup: FC<AvatarGroupProps> = (props) => (
  <MuiAvatarGroup {...props} />
);
