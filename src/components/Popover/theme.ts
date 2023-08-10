import { ComponentThemeOverride } from "src/types";

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
    transformOrigin: { vertical: "top", horizontal: "left" }
  }
};

export default popoverTheme;
