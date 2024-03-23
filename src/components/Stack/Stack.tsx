import { StackProps as MuiStackProps } from "@mui/material";

export interface StackProps
  extends Omit<MuiStackProps, "classes" | "className"> {}

export { Stack } from "@mui/material";
