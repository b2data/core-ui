import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface IconButtonProps
  extends OverrideMuiProps<
    MuiIconButtonProps,
    "centerRipple" | "sx" | "component",
    HTMLButtonElement
  > {
  /**
   * The color of the component.
   * @default default
   */
  color?: MuiIconButtonProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense button styling.
   * @default medium
   */
  size?: MuiIconButtonProps["size"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiIconButtonProps["disabled"];
}

export const IconButton: FC<IconButtonProps> = (props) => (
  <MuiIconButton {...props} />
);
