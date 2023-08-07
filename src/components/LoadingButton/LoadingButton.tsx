import {
  LoadingButton as MuiLoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps
} from "@mui/lab";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface LoadingButtonProps
  extends OverrideMuiProps<
    MuiLoadingButtonProps,
    | "loading"
    | "loadingIndicator"
    | "sx"
    | "endIcon"
    | "startIcon"
    | "href"
    | "LinkComponent",
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
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default center
   */
  loadingPosition?: MuiLoadingButtonProps["loadingPosition"];
}

export const LoadingButton: FC<LoadingButtonProps> = (props) => (
  <MuiLoadingButton {...props} />
);
