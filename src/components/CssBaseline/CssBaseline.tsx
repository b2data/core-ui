import {
  CssBaseline as MuiCssBaseline,
  CssBaselineProps as MuiCssBaselineProps,
} from "@mui/material";

export interface CssBaselineProps extends MuiCssBaselineProps {}

export const CssBaseline = (props: CssBaselineProps) => (
  <MuiCssBaseline {...props} />
);
