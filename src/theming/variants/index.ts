import { createTheme } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

import components from "./components";
import breakpoints from "./breakpoints";
import mixins from "./mixins";
import palette from "./palette";
import typography from "./typography";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f9f9f9",
    },
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

declare module "@mui/material" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }

  interface Mixins {
    scrollbars?: CSSProperties;
  }
}
