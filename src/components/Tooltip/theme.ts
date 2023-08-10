import { ComponentThemeOverride } from "src/types";

const tooltipTheme: ComponentThemeOverride["MuiTooltip"] = {
  styleOverrides: {},
  defaultProps: {
    arrow: true,
    placement: "bottom"
  }
};

export default tooltipTheme;
