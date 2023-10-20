import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";
import React from "react";

import { ButtonProps } from "../Button"
import { OverrideMuiProps } from "../types";

export interface ButtonGroupProps
  extends OverrideMuiProps<
    MuiButtonGroupProps,
    "sx" | "fullWidth" | "component"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiButtonGroupProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense button styling.
   * @default medium
   */
  size?: MuiButtonGroupProps["size"];
  /**
   * The variant to use.
   * @default outlined
   */
  variant?: MuiButtonGroupProps["variant"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiButtonGroupProps["disabled"];
  /**
   * The component orientation (layout flow direction).
   * @default horizontal
   */
  orientation?: MuiButtonGroupProps["orientation"];
}

export const ButtonGroup = React.forwardRef(
  (
    { children, color, size, variant, disabled, ...props }: ButtonGroupProps,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <MuiButtonGroup ref={ref} {...props}>
      {React.Children.map(children, (c) =>
        React.isValidElement<ButtonProps>(c)
          ? React.cloneElement(c, { size, color, variant, disabled })
          : c,
      )}
    </MuiButtonGroup>
  ),
);
