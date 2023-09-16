import { ComponentThemeOverride } from "../types";

export const AVATAR_SIZES = {
  small: 24,
  medium: 32,
  large: 40,
} as const;

const avatarTheme: ComponentThemeOverride["MuiAvatar"] = {
  styleOverrides: {},

  defaultProps: {
    variant: "circular",
  },
};

export default avatarTheme;
