import { ComponentThemeOverride } from "src/types";

const loadingButtonTheme: ComponentThemeOverride["MuiButton"] = {
  styleOverrides: {},
  defaultProps: {
    disableElevation: true,
    variant: "contained"
  }
};

export default loadingButtonTheme;
