import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import React from "react";

export interface BoxProps extends Omit<MuiBoxProps, "classes" | "className"> {}

export const Box: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <MuiBox ref={ref} {...props} />
));
