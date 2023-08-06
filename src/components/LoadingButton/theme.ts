import { ComponentsOverrides, ComponentsProps } from "@mui/material";
import { Theme } from "@mui/system";

export default {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        fontSize: 20,
      },
    },
    sizeLarge: {
      "& .MuiSvgIcon-root": {
        fontSize: 24,
      },
    },
  } as ComponentsOverrides<Theme>["MuiButton"],
  defaultProps: {
    disableElevation: true,
    variant: "contained",
  } as ComponentsProps["MuiButton"],
};
