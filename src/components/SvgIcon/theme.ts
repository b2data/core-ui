import { ComponentsOverrides } from "@mui/material";
import { Theme } from "@mui/system";

export default {
  styleOverrides: {
    fontSizeMedium: {
      fontSize: "18px",
    },
  } as ComponentsOverrides<Theme>["MuiSvgIcon"],
};
