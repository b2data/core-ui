import {
  SvgIcon as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from "@mui/material";
import React from "react";

export interface SvgIconProps extends MuiSvgIconProps {}

export const SvgIcon: React.FC<SvgIconProps> = (props) => (
  <MuiSvgIcon {...props} />
);
