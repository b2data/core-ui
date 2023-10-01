import {
  LoadingButton as MuiLoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps,
} from "@mui/lab";
import React from "react";

import { OverrideMuiProps } from "../types";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}
export interface ButtonProps
  extends OverrideMuiProps<
    MuiLoadingButtonProps,
    | "loading"
    | "loadingIndicator"
    | "sx"
    | "endIcon"
    | "startIcon"
    | "fullWidth"
    | "href"
    | "LinkComponent"
    | "ref",
    HTMLButtonElement
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiLoadingButtonProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense button styling.
   * @default medium
   */
  size?: MuiLoadingButtonProps["size"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiLoadingButtonProps["disabled"];
  /**
   * The variant to use.
   * @default contained
   */
  variant?: MuiLoadingButtonProps["variant"];
  /**
   * @default false
   */
  loading?: MuiLoadingButtonProps["loading"];
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default center
   */
  loadingPosition?: MuiLoadingButtonProps["loadingPosition"];
}

export const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => (
  <MuiLoadingButton ref={ref} {...props} />
));
