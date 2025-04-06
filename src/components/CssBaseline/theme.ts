import { ComponentThemeOverride } from "../types";

const cssBaselineTheme: ComponentThemeOverride["MuiCssBaseline"] = {
  styleOverrides: {
    html: { fontSize: 14 },
    ":root": { "--rem": 14 },
    "&:-webkit-autofill": {
      WebkitBoxShadow: "none !important",
      WebkitTextFillColor: "inherit !important",
      caretColor: "inherit !important",
    },
  },
};

export default cssBaselineTheme;
