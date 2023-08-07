import { ComponentThemeOverride } from "src/types";

const svgIconTheme: ComponentThemeOverride["MuiSvgIcon"] = {
  styleOverrides: {
    fontSizeMedium: {
      fontSize: "18px"
    }
  }
};

export default svgIconTheme;
