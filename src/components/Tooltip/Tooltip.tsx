import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

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
    | "title"
    | "sx"
  > {
  /**
   * Tooltip placement.
   * @default bottom
   */
  placement?: MuiTooltipProps["placement"];
}

export const Tooltip: React.FC<TooltipProps> = (props) => (
  <MuiTooltip {...props} />
);
