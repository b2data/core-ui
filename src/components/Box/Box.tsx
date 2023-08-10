import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { FC } from "react";

export interface BoxProps extends Omit<MuiBoxProps, "classes" | "className"> {}

export const Box: FC<BoxProps> = (props) => <MuiBox {...props} />;
