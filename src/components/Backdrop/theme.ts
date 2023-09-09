import { alpha } from "../../theming";
import { ComponentThemeOverride } from "../types";

const backdropTheme: ComponentThemeOverride["MuiBackdrop"] = {
  styleOverrides: {
    root: ({ variant = "light" }) => ({
      position: "absolute",
      backgroundColor:
        variant == "light" ? alpha("#091E42", 0.08) : alpha("#091E42", 0.42)
    })
  },
  defaultProps: {}
};

export default backdropTheme;
