import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from "@mui/material";
import { FC } from "react";

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
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /**
   * The size of the component. `small` is equivalent to the dense Switch styling.
   * @default small
   */
  size?: MuiSwitchProps["size"];
}

export const Switch: FC<SwitchProps> = (props) => <MuiSwitch {...props} />;
