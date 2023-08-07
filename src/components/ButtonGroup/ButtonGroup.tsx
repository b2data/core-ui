import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

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

export const ButtonGroup: FC<ButtonGroupProps> = (props) => (
  <MuiButtonGroup {...props} />
);
