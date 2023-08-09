import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface CheckboxProps
  extends OverrideMuiProps<
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
    | "value",
    HTMLButtonElement
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

export const Checkbox: FC<CheckboxProps> = (props) => (
  <MuiCheckbox {...props} />
);
