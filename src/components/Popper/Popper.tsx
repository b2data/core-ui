import {
  Popper as MuiPopper,
  PopperProps as MuiPopperProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface PopperProps
  extends OverrideMuiProps<
    MuiPopperProps,
    | "children"
    | "container"
    | "disablePortal"
    | "ref"
    | "open"
    | "anchorEl"
    | "keepMounted"
    | "modifiers"
    | "popperOptions"
    | "popperRef"
    | "component"
    | "sx"
  > {
  /**
   * Popper placement.
   * @default bottom
   */
  placement?: MuiPopperProps["placement"];
}

export const Popper: React.FC<PopperProps> = (props) => (
  <MuiPopper {...props} />
);
