import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface IconButtonProps
  extends OverrideMuiProps<
    MuiIconButtonProps,
    "centerRipple" | "sx" | "component" | "edge" | "disableRipple",
    HTMLButtonElement
  > {
  /**
   * The color of the component.
   * @default default
   */
  color?: MuiIconButtonProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense button styling.
   * @default medium
   */
  size?: MuiIconButtonProps["size"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiIconButtonProps["disabled"];
}

export const IconButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <MuiIconButton ref={ref} {...props} />
  ),
);
