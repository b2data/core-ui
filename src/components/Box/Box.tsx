import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import React from "react";

export interface BoxProps extends Omit<MuiBoxProps, "classes" | "className"> {}

export const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<unknown>) => (
    <MuiBox ref={ref} {...props} />
  ),
);
