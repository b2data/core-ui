import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material";

export interface AvatarGroupProps
  extends Pick<
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

export const AvatarGroup = (props: AvatarGroupProps) => (
  <MuiAvatarGroup {...props} />
);
