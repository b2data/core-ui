import { ComponentThemeOverride } from "../types";

const tabTheme: ComponentThemeOverride["MuiTab"] = {
  styleOverrides: {
    root: {
      minHeight: 40,
      lineHeight: 1,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
  },
  defaultProps: {
    iconPosition: "start",
  },
};

export default tabTheme;
