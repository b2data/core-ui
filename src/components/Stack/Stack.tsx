import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";
import React from "react";

export interface StackProps
  extends Omit<MuiStackProps, "classes" | "className"> {}

export const Stack = React.forwardRef(
  (props: StackProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiStack ref={ref} {...props} />
  ),
);
