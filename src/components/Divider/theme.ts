import { ComponentThemeOverride } from "src/types";

const dividerTheme: ComponentThemeOverride["MuiDivider"] = {
  styleOverrides: {},
  defaultProps: {
    orientation: "horizontal",
    textAlign: "center",
    variant: "fullWidth"
  }
};

export default dividerTheme;
