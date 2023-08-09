import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface SwitchProps
  extends OverrideMuiProps<
    MuiSwitchProps,
    | "sx"
    | "checked"
    | "checkedIcon"
    | "defaultChecked"
    | "disabled"
    | "icon"
    | "id"
    | "inputProps"
    | "inputRef"
    | "onChange"
    | "required"
    | "value",
    HTMLButtonElement
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
