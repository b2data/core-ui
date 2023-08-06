export default {
  values: {
    mobile: 0,
    tablet: 640,
    desktop: 1024,
  },
};

declare module "@mui/material/styles" {
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
}
