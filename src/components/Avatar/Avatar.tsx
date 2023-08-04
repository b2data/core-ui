import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

export type AvatarSize = "small" | "medium" | "large";

export interface AvatarProps
  extends Pick<MuiAvatarProps, "variant" | "sx" | "src" | "alt" | "children"> {
  /**
   * Used in combination with `src` to provide an alt attribute for the rendered img element.
   */
  alt?: string;
  /**
   * The size of the avatar.
   * @default medium
   */
  size?: AvatarSize;
  /**
   * @default circular
   */
  variant?: MuiAvatarProps["variant"];
}

export const Avatar = (props: AvatarProps) => <MuiAvatar {...props} />;
