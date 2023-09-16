import { ComponentThemeOverride } from "../types";

const iconButtonTheme: ComponentThemeOverride["MuiIconButton"] = {
  styleOverrides: {
    sizeSmall: {
      padding: 3,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
    sizeMedium: {
      padding: 6,
      "& .MuiSvgIcon-root": {
        fontSize: 20,
      },
    },
    sizeLarge: {
      padding: 7,
      "& .MuiSvgIcon-root": {
        fontSize: 22,
      },
    },
    edgeEnd: {
      marginRight: -12,
    },
  },
  defaultProps: {
    color: "default",
    size: "medium",
  },
};

export default iconButtonTheme;
