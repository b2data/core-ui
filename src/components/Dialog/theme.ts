import { ComponentThemeOverride } from "../types";

const dialogTheme: ComponentThemeOverride["MuiDialog"] = {
  styleOverrides: {
    paper: {
      "&.MuiDialog-paperWidthMobile": {
        maxWidth: 360,
      },
    },
  },
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
