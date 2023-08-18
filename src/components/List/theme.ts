import { ComponentThemeOverride } from "src/types";

const listTheme: ComponentThemeOverride["MuiList"] = {
  styleOverrides: {
    root: ({ ownerState: { disablePadding } }) => ({
      paddingTop: disablePadding ? undefined : 4,
      paddingBottom: disablePadding ? undefined : 4
    })
  },
  defaultProps: {
    dense: true
  }
};

export default listTheme;
