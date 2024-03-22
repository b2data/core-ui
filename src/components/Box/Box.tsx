import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import React from "react";

export interface BoxProps extends Omit<MuiBoxProps, "classes"> {}

export const Box: React.FC<BoxProps> = (props) => <MuiBox {...props} />;
