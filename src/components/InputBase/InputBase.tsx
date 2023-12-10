import {
  InputBase as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from "@mui/material";
import React from "react";

export interface InputBaseProps
  extends Pick<
    MuiInputBaseProps,
    | "autoComplete"
    | "autoFocus"
    | "color"
    | "defaultValue"
    | "disabled"
    | "endAdornment"
    | "error"
    | "fullWidth"
    | "id"
    | "inputProps"
    | "inputRef"
    | "margin"
    | "maxRows"
    | "minRows"
    | "multiline"
    | "name"
    | "onBlur"
    | "onChange"
    | "onInvalid"
    | "placeholder"
    | "readOnly"
    | "required"
    | "rows"
    | "size"
    | "startAdornment"
    | "sx"
    | "type"
    | "value"
  > {}

export const InputBase = React.forwardRef(
  (props: InputBaseProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiInputBase ref={ref} {...props} />
  ),
);
