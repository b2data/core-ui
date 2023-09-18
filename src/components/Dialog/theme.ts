import { ComponentThemeOverride } from "../types";

const dialogTheme: ComponentThemeOverride["MuiDialog"] = {
  styleOverrides: {},
  defaultProps: {
    maxWidth: "tablet",
    scroll: "paper",
    fullWidth: true,
    PaperProps: {
      variant: "elevation",
    },
  },
};

export default dialogTheme;
