import {
  SvgIcon as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from "@mui/material";
import React from "react";

export interface SvgIconProps extends MuiSvgIconProps {}

export const SvgIcon = React.forwardRef(
  (props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => (
    <MuiSvgIcon ref={ref} {...props} />
  ),
);
