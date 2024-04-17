import { ComponentThemeOverride } from "../types";

const typographyTheme: ComponentThemeOverride["MuiTypography"] = {
  styleOverrides: {
    paragraph: { marginBottom: 16 },
    gutterBottom: { marginBottom: 8 },
  },
  defaultProps: {
    variant: "body1",
    align: "inherit",
  },
};

export default typographyTheme;
