import { ComponentThemeOverride } from "../types";

const backdropTheme: ComponentThemeOverride["MuiBackdrop"] = {
  styleOverrides: {
    root: ({ variant = "light" }) => ({
      position: "absolute",
      backgroundColor:
        variant == "light" ? "rgba(9, 30, 66, 0.08)" : "rgba(9, 30, 66, 0.42)",
    }),
  },
  defaultProps: {},
};

export default backdropTheme;
