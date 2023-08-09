import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

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

export const Tooltip: FC<TooltipProps> = (props) => <MuiTooltip {...props} />;
