import { ComponentThemeOverride } from "../types";

const svgIconTheme: ComponentThemeOverride["MuiSvgIcon"] = {
  styleOverrides: {
    fontSizeSmall: {
      fontSize: "16px",
    },
    fontSizeMedium: {
      fontSize: "20px",
    },
  },
};

export default svgIconTheme;
