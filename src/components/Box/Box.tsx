import { BoxProps as MuiBoxProps } from "@mui/material";

export interface BoxProps extends Omit<MuiBoxProps, "classes"> {}

export { Box } from "@mui/material";
