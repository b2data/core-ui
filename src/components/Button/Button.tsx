import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from "@mui/material";
import { FC } from "react";
import { OverrideMuiProps } from "src/types";

export interface ButtonProps
  extends OverrideMuiProps<
    MuiButtonProps,
    "sx" | "startIcon" | "endIcon" | "fullWidth" | "component",
    HTMLButtonElement
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiButtonProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense button styling.
   * @default medium
   */
  size?: MuiButtonProps["size"];
  /**
   * The variant to use.
   * @default contained
   */
  variant?: MuiButtonProps["variant"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiButtonProps["disabled"];
}

export const Button: FC<ButtonProps> = (props) => <MuiButton {...props} />;
