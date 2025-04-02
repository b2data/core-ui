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
    DataGrid: {
      bg: "#fff",
      // headerBg: "#f0f0f0",
      pinnedBg: "#f9f9f9",
    },
  },
  components,
  breakpoints,
  spacing: 4,
  mixins,
  typography,
  cssVariables: true,
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
  cssVariables: true,
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
