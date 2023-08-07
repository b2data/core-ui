import {
  LoadingButton as MuiLoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps
} from "@mui/lab";
import { FC } from "react";

export interface LoadingButtonProps
  extends Omit<
    MuiLoadingButtonProps,
    | "className"
    | "classes"
    | "disableElevation"
    | "disableFocusRipple"
    | "disableTouchRipple"
    | "disableRipple"
    | "focusRipple"
    | "focusVisibleClassName"
    | "TouchRippleProps"
    | "touchRippleRef"
    | "onFocusVisible"
    | "action"
    | "centerRipple"
    | "style"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiLoadingButtonProps["color"];
  /**
   * @default medium
   */
  size?: MuiLoadingButtonProps["size"];
  /**
   * @default false
   */
  disabled?: MuiLoadingButtonProps["disabled"];
  /**
   * @default contained
   */
  variant?: MuiLoadingButtonProps["variant"];
  /**
   * @default center
   */
  loadingPosition?: MuiLoadingButtonProps["loadingPosition"];
}

export const LoadingButton: FC<LoadingButtonProps> = (props) => (
  <MuiLoadingButton {...props} />
);
