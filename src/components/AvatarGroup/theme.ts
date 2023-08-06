import { ComponentThemeOverride } from "src/types";

const avatarGroupTheme: ComponentThemeOverride["MuiAvatarGroup"] = {
  styleOverrides: {
    root: {
      justifyContent: "start"
    }
  },

  defaultProps: {
    spacing: "medium",
    variant: "circular"
  }
};

export default avatarGroupTheme;
