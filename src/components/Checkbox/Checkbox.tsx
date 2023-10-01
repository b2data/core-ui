import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";
import React from "react";

import { OverrideOnlyMuiProps } from "../types";

export interface CheckboxProps
  extends OverrideOnlyMuiProps<
    MuiCheckboxProps,
    | "sx"
    | "checked"
    | "checkedIcon"
    | "defaultChecked"
    | "disabled"
    | "icon"
    | "id"
    | "indeterminate"
    | "indeterminateIcon"
    | "inputProps"
    | "inputRef"
    | "onChange"
    | "required"
    | "value"
    | "edge"
    | "ref"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiCheckboxProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense Checkbox styling.
   * @default small
   */
  size?: MuiCheckboxProps["size"];
}

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (props, ref) => <MuiCheckbox ref={ref} {...props} />,
);
