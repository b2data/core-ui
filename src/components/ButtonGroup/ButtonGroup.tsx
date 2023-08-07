import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps
} from "@mui/material";
import { FC } from "react";

export interface ButtonGroupProps
  extends Omit<
    MuiButtonGroupProps,
    | "className"
    | "classes"
    | "style"
    | "disableElevation"
    | "disableFocusRipple"
    | "disableRipple"
  > {
  /**
   * @default primary
   */
  color?: MuiButtonGroupProps["color"];
  /**
   * @default medium
   */
  size?: MuiButtonGroupProps["size"];
  /**
   * @default outlined
   */
  variant?: MuiButtonGroupProps["variant"];
  /**
   * @default false
   */
  disabled?: MuiButtonGroupProps["disabled"];
  /**
   * @default horizontal
   */
  orientation?: MuiButtonGroupProps["orientation"];
}

export const ButtonGroup: FC<ButtonGroupProps> = (props) => (
  <MuiButtonGroup {...props} />
);
