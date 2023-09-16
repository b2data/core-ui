import { ComponentThemeOverride } from "../types";

const avatarGroupTheme: ComponentThemeOverride["MuiAvatarGroup"] = {
  styleOverrides: {
    root: {
      justifyContent: "start",
    },
  },

  defaultProps: {
    spacing: "medium",
    variant: "circular",
  },
};

export default avatarGroupTheme;
