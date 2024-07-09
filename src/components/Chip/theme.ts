import { ComponentThemeOverride } from "../types";

const chipTheme: ComponentThemeOverride["MuiChip"] = {
  styleOverrides: {
    labelSmall: { fontSize: 12 },
  },
  defaultProps: {
    color: "default",
    variant: "filled",
    size: "medium",
  },
};

export default chipTheme;
