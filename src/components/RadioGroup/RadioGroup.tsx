import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface RadioGroupProps
  extends OverrideMuiProps<
    MuiRadioGroupProps,
    "sx" | "children" | "defaultValue" | "name" | "onChange" | "value"
  > {}

export const RadioGroup: FC<RadioGroupProps> = (props) => (
  <MuiRadioGroup {...props} />
);
