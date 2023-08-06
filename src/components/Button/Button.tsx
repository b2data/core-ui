import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps
  extends Omit<
    MuiButtonProps,
    | "className"
    | "classes"
    | "disableFocusRipple"
    | "disableElevation"
    | "touchRippleRef"
    | "TouchRippleProps"
    | "onFocusVisible"
    | "focusVisibleClassName"
    | "focusRipple"
    | "disableTouchRipple"
    | "disableRipple"
    | "centerRipple"
    | "action"
    | "style"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiButtonProps["color"];
  /**
   * @default medium
   */
  size?: MuiButtonProps["size"];
  /**
   * @default contained
   */
  variant?: MuiButtonProps["variant"];
  /**
   * @default false
   */
  disabled?: MuiButtonProps["disabled"];
}

export const Button = (props: ButtonProps) => <MuiButton {...props} />;
