import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface FormHelperTextProps
  extends OverrideMuiProps<
    MuiFormHelperTextProps,
    | "sx"
    | "children"
    | "disabled"
    | "error"
    | "margin"
    | "required"
    | "variant",
    HTMLSpanElement
  > {}

export const FormHelperText: React.FC<FormHelperTextProps> = (props) => (
  <MuiFormHelperText {...props} />
);
