import { ComponentThemeOverride } from "../types";

const listItemTextTheme: ComponentThemeOverride["MuiListItemText"] = {
  styleOverrides: {
    primary: {
      lineHeight: 1.2,
    },
  },
  defaultProps: {},
};

export default listItemTextTheme;
