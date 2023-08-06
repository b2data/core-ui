import { ComponentThemeOverride } from "src/types";

const typographyTheme: ComponentThemeOverride["MuiTypography"] = {
  styleOverrides: {
    paragraph: { marginBottom: 16 },
    gutterBottom: { marginBottom: 8 }
  }
};

export default typographyTheme;
