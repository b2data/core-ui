import { ComponentsOverrides } from "@mui/material";
import { Theme } from "@mui/system";

export default {
  styleOverrides: {
    root: () => ({
      viewbox: "0 0 18 18",
    }),
    fontSizeMedium: {
      fontSize: "18px",
    },
  } as ComponentsOverrides<Theme>["MuiSvgIcon"],
};
