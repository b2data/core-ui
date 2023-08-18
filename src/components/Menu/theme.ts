import { ComponentThemeOverride } from "src/types";

const menuTheme: ComponentThemeOverride["MuiMenu"] = {
  styleOverrides: {},
  defaultProps: {
    elevation: 3,
    transformOrigin: { vertical: "top", horizontal: "left" },
    anchorOrigin: { vertical: "top", horizontal: "left" }
  }
};

export default menuTheme;
