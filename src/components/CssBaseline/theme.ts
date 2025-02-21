import { ComponentThemeOverride } from "../types";

const cssBaselineTheme: ComponentThemeOverride["MuiCssBaseline"] = {
  styleOverrides: {
    html: { fontSize: 14 },
    ":root": { "--rem": 14 },
  },
};

export default cssBaselineTheme;
