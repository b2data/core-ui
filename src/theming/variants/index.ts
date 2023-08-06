import { createTheme } from "@mui/material";

import components from "./components";
import breakpoints from "./breakpoints";
import mixins from "./mixins";
import palette from "./palette";
import typography from "./typography";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...palette,
  },
  components,
  breakpoints,
  spacing: 4,
  mixins,
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...palette,
  },
  components,
  breakpoints,
  spacing: 4,
  mixins,
  typography,
});
