import { ComponentThemeOverride } from "src/types";

const listItemButtonTheme: ComponentThemeOverride["MuiListItemButton"] = {
  styleOverrides: {
    root: ({ ownerState: { disableGutters } }) => ({
      paddingTop: 6,
      paddingBottom: 6,
      minHeight: 36,
      paddingLeft: disableGutters ? undefined : 10,
      paddingRight: disableGutters ? undefined : 10
    })
  },
  defaultProps: {
    dense: true
  }
};

export default listItemButtonTheme;
