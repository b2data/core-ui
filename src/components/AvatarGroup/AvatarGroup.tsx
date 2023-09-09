import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps,
  styled
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";
import { AVATAR_SIZES } from "../Avatar/theme";

export interface AvatarGroupProps
  extends OverrideMuiProps<MuiAvatarGroupProps, "sx" | "max" | "total"> {
  /**
   * Spacing between avatars.
   * @default medium
   */
  spacing?: "medium" | "small";
  /**
   * The size of the avatar.
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * The variant to use.
   * @default circular
   */
  variant?: MuiAvatarGroupProps["variant"];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = styled(
  MuiAvatarGroup
)<AvatarGroupProps>(({ size = "medium" }) => ({
  "& .MuiAvatar-root": {
    width: AVATAR_SIZES[size],
    height: AVATAR_SIZES[size],
    fontSize: size === "small" ? "1rem" : "1.4rem"
  }
}));
