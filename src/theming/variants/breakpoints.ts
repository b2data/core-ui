export const mobile = 0;
export const tablet = 640;
export const desktop = 1024;

export default {
  values: {
    mobile,
    tablet,
    desktop,
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
