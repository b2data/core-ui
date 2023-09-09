import { ComponentThemeOverride } from "../types";

const popoverTheme: ComponentThemeOverride["MuiPopover"] = {
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        backgroundColor: "inherit"
      }
    }
  },
  defaultProps: {
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
    transformOrigin: { vertical: "top", horizontal: "left" },
    elevation: 3
  }
};

export default popoverTheme;
