import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps
} from "@mui/material";

export interface AvatarGroupProps
  extends Omit<
    MuiAvatarGroupProps,
    "className" | "classes" | "componentsProps" | "slotProps" | "style"
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
