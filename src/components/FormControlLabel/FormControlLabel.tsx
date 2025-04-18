import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@mui/material";

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

export const FormControlLabel = (props: FormControlLabelProps) => (
  <MuiFormControlLabel {...props} />
);
