import { ComponentThemeOverride } from "src/types";

const loadingButtonTheme: ComponentThemeOverride["MuiButton"] = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        fontSize: 20
      }
    },
    sizeLarge: {
      "& .MuiSvgIcon-root": {
        fontSize: 24
      }
    }
  },
  defaultProps: {
    disableElevation: true,
    variant: "contained"
  }
};

export default loadingButtonTheme;
