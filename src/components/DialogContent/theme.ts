import { ComponentThemeOverride } from "../types";

const dialogContentTheme: ComponentThemeOverride["MuiDialogContent"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: ownerState?.disablePadding ? 0 : 20,
    }),
  },
  defaultProps: {},
};

export default dialogContentTheme;
