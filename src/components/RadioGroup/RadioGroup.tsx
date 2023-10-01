import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface RadioGroupProps
  extends OverrideMuiProps<
    MuiRadioGroupProps,
    "sx" | "children" | "defaultValue" | "name" | "onChange" | "value"
  > {}

export const RadioGroup: React.FC<RadioGroupProps> = React.forwardRef(
  (props, ref) => <MuiRadioGroup ref={ref} {...props} />,
);
