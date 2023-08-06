import { ComponentThemeOverride } from "src/types";

const iconButtonTheme: ComponentThemeOverride["MuiIconButton"] = {
  styleOverrides: {
    sizeSmall: {
      padding: 3,
      "& .MuiSvgIcon-root": {
        fontSize: 18
      }
    },
    sizeMedium: {
      padding: 6,
      "& .MuiSvgIcon-root": {
        fontSize: 20
      }
    },
    sizeLarge: {
      padding: 8,
      "& .MuiSvgIcon-root": {
        fontSize: 24
      }
    }
  }
};

export default iconButtonTheme;
