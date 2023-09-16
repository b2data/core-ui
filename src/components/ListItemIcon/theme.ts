import { ComponentThemeOverride } from "../types";

const listItemIconTheme: ComponentThemeOverride["MuiListItemIcon"] = {
  styleOverrides: {
    root: {
      minWidth: 24,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
  },
  defaultProps: {},
};

export default listItemIconTheme;
