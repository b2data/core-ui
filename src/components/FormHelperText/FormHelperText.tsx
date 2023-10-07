import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface FormHelperTextProps
  extends OverrideMuiProps<
    MuiFormHelperTextProps,
    "sx" | "disabled" | "error" | "margin" | "required" | "variant",
    HTMLParagraphElement
  > {}

export const FormHelperText = React.forwardRef(
  (props: FormHelperTextProps, ref: React.Ref<HTMLParagraphElement>) => (
    <MuiFormHelperText ref={ref} {...props} />
  ),
);
