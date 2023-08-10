import { ComponentThemeOverride } from "src/types";

const chipTheme: ComponentThemeOverride["MuiChip"] = {
  styleOverrides: {},
  defaultProps: {
    color: "default",
    variant: "filled",
    size: "medium"
  }
};

export default chipTheme;
