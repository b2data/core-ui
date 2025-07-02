import {
  Box,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import React, { Fragment, ReactNode } from "react";
import { LinkProps as RouteLinkProps } from "react-router-dom";

import { OverrideMuiProps } from "../types";
import { Tooltip } from "../Tooltip";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}
export interface ButtonProps
  extends OverrideMuiProps<
    MuiButtonProps,
    | "loading"
    | "loadingIndicator"
    | "sx"
    | "endIcon"
    | "startIcon"
    | "fullWidth"
    | "href"
    | "LinkComponent",
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
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiButtonProps["disabled"];
  /**
   * The variant to use.
   * @default contained
   */
  variant?: MuiButtonProps["variant"];
  /**
   * @default false
   */
  loading?: MuiButtonProps["loading"];
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default center
   */
  loadingPosition?: MuiButtonProps["loadingPosition"];
  /**
   * LinkComponentProps
   */
  to?: RouteLinkProps["to"];
  /**
   * If set, the tooltip will be shown when hover on the action.
   */
  tooltip?: string | ReactNode;
}

export const Button = React.forwardRef(
  ({ tooltip, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <Tooltip text={tooltip}>
      <Box component={props.disabled ? "span" : Fragment}>
        <MuiButton ref={ref} {...props} />
      </Box>
    </Tooltip>
  ),
);
