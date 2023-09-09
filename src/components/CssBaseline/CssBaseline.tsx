import {
  CssBaseline as MuiCssBaseline,
  CssBaselineProps as MuiCssBaselineProps
} from "@mui/material";
import React from "react";

export interface CssBaselineProps extends MuiCssBaselineProps {}

export const CssBaseline: React.FC<CssBaselineProps> = (props) => (
  <MuiCssBaseline {...props} />
);
