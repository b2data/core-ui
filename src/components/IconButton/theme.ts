import { ComponentsOverrides, ComponentsProps } from "@mui/material";
import { Theme } from "@mui/system";

export default {
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
      padding: 8,
      "& .MuiSvgIcon-root": {
        fontSize: 24,
      },
    },
  } as ComponentsOverrides<Theme>["MuiIconButton"],
  defaultProps: {
    disableElevation: true,
  } as ComponentsProps["MuiIconButton"],
};
