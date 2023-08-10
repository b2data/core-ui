import { Radio as MuiRadio, RadioProps as MuiRadioProps } from "@mui/material";
import { FC } from "react";

import { OverrideOnlyMuiProps } from "src/types";

export interface RadioProps
  extends OverrideOnlyMuiProps<
    MuiRadioProps,
    | "sx"
    | "checked"
    | "disabled"
    | "icon"
    | "id"
    | "name"
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
  color?: MuiRadioProps["color"];
  /**
   * The size of the component. `small` is equivalent to the dense Radio styling.
   * @default small
   */
  size?: MuiRadioProps["size"];
}

export const Radio: FC<RadioProps> = (props) => <MuiRadio {...props} />;
