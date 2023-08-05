import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

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
  size?: "small" | "medium" | "large";
  /**
   * @default circular
   */
  variant?: MuiAvatarProps["variant"];
}

export const Avatar = (props: AvatarProps) => <MuiAvatar {...props} />;
