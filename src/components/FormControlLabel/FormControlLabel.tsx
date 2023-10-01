import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface FormControlLabelProps
  extends OverrideMuiProps<
    MuiFormControlLabelProps,
    | "sx"
    | "control"
    | "checked"
    | "disabled"
    | "componentsProps"
    | "disabled"
    | "disableTypography"
    | "label"
    | "onChange"
    | "required"
    | "value",
    HTMLLabelElement
  > {}

export const FormControlLabel: React.FC<FormControlLabelProps> =
  React.forwardRef((props, ref) => (
    <MuiFormControlLabel ref={ref} {...props} />
  ));
