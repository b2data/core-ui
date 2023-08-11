import { ComponentThemeOverride } from "src/types";

const collapseTheme: ComponentThemeOverride["MuiCollapse"] = {
  styleOverrides: {},
  defaultProps: {
    timeout: "auto",
    orientation: "vertical"
  }
};

export default collapseTheme;
