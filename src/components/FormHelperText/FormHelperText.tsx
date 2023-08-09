import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

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

export const FormHelperText: FC<FormHelperTextProps> = (props) => (
  <MuiFormHelperText {...props} />
);
