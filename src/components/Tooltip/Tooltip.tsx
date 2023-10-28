import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";
import React, { isValidElement } from "react";

import { OverrideMuiProps } from "../types";
import { Typography } from "../Typography";

export interface TooltipProps
  extends OverrideMuiProps<
    MuiTooltipProps,
    | "children"
    | "enterDelay"
    | "enterTouchDelay"
    | "followCursor"
    | "id"
    | "leaveDelay"
    | "leaveTouchDelay"
    | "onClose"
    | "onOpen"
    | "open"
    | "sx"
  > {
  /**
   * Tooltip placement.
   * @default bottom
   */
  placement?: MuiTooltipProps["placement"];
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  text?: string | React.ReactNode;
}

export const Tooltip = ({ text, children, ...props }: TooltipProps) =>
  text ? (
    <MuiTooltip
      {...props}
      title={isValidElement(text) ? text : <Typography>{text}</Typography>}
    >
      {children}
    </MuiTooltip>
  ) : (
    children
  );
