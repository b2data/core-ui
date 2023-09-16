import { ComponentThemeOverride } from "../types";

const dialogTheme: ComponentThemeOverride["MuiDialog"] = {
  styleOverrides: {},
  defaultProps: {
    maxWidth: "tablet",
    scroll: "paper",
    fullWidth: true,
  },
};

export default dialogTheme;
