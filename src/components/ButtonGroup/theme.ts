import { ComponentsOverrides, ComponentsProps } from "@mui/material";
import { Theme } from "@mui/system";

export default {
  styleOverrides: {} as ComponentsOverrides<Theme>["MuiButtonGroup"],
  defaultProps: {
    disableElevation: true,
  } as ComponentsProps["MuiButtonGroup"],
};
