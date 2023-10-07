import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";
import React from "react";

import { OverrideOnlyMuiProps } from "../types";

export interface SwitchProps
  extends OverrideOnlyMuiProps<
    MuiSwitchProps,
    | "sx"
    | "checked"
    | "defaultChecked"
    | "disabled"
    | "icon"
    | "id"
    | "inputProps"
    | "inputRef"
    | "onChange"
    | "required"
    | "value"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: Exclude<MuiSwitchProps["color"], "default">;
  /**
   * The size of the component. `small` is equivalent to the dense Switch styling.
   * @default small
   */
  size?: MuiSwitchProps["size"];
}

export const Switch = React.forwardRef(
  (props: SwitchProps, ref: React.Ref<HTMLButtonElement>) => (
    <MuiSwitch ref={ref} {...props} />
  ),
);
