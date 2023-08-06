import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";

export interface IconButtonProps
  extends Omit<
    MuiIconButtonProps,
    | "className"
    | "classes"
    | "disableFocusRipple"
    | "disableTouchRipple"
    | "disableRipple"
    | "focusRipple"
    | "focusVisibleClassName"
    | "onFocusVisible"
    | "TouchRippleProps"
    | "touchRippleRef"
    | "action"
    | "edge"
    | "style"
  > {
  /**
   * The color of the component.
   * @default default
   */
  color?: MuiIconButtonProps["color"];
  /**
   * @default medium
   */
  size?: MuiIconButtonProps["size"];
  /**
   * @default false
   */
  disabled?: MuiIconButtonProps["disabled"];
}

export const IconButton = (props: IconButtonProps) => (
  <MuiIconButton {...props} />
);
