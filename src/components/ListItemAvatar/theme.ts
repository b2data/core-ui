import { ComponentThemeOverride } from "src/types";

const listItemAvatarTheme: ComponentThemeOverride["MuiListItemAvatar"] = {
  styleOverrides: {
    root: {
      minWidth: 30
    }
  },
  defaultProps: {}
};

export default listItemAvatarTheme;
