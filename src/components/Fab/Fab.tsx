import { Fab as MuiFab, FabProps as MuiFabProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface FabProps
  extends OverrideMuiProps<
    MuiFabProps,
    "sx" | "component" | "disabled" | "href",
    HTMLButtonElement
  > {
  /**
   * The color of the component.
   * @default default
   */
  color?: MuiFabProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense Fab styling.
   * @default medium
   */
  size?: MuiFabProps["size"];
  /**
   * The variant to use.
   * @default circular
   */
  variant?: MuiFabProps["variant"];
}

export const Fab = React.forwardRef(
  (props: FabProps, ref: React.Ref<HTMLButtonElement>) => (
    <MuiFab ref={ref} {...props} />
  ),
);
