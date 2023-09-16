import { ComponentThemeOverride } from "../types";

const dividerTheme: ComponentThemeOverride["MuiDivider"] = {
  styleOverrides: {},
  defaultProps: {
    orientation: "horizontal",
    textAlign: "center",
    variant: "fullWidth",
  },
};

export default dividerTheme;
