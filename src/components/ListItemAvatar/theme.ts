import { ComponentThemeOverride } from "../types";

const listItemAvatarTheme: ComponentThemeOverride["MuiListItemAvatar"] = {
  styleOverrides: {
    root: {
      minWidth: 30,
    },
  },
  defaultProps: {},
};

export default listItemAvatarTheme;
