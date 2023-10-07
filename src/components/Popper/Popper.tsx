import {
  Popper as MuiPopper,
  PopperProps as MuiPopperProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface PopperProps
  extends OverrideMuiProps<
    MuiPopperProps,
    | "container"
    | "disablePortal"
    | "open"
    | "anchorEl"
    | "keepMounted"
    | "modifiers"
    | "popperOptions"
    | "popperRef"
    | "component"
    | "sx",
    HTMLDivElement,
    "children"
  > {
  /**
   * Popper placement.
   * @default bottom
   */
  placement?: MuiPopperProps["placement"];
  /**
   * Popper render function or node.
   */
  children?: MuiPopperProps["children"];
}

export const Popper = React.forwardRef(
  (props: PopperProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiPopper ref={ref} {...props} />
  ),
);
