import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import React from "react";

export interface TextFieldProps
  extends Pick<
    MuiTextFieldProps,
    | "autoComplete"
    | "autoFocus"
    | "defaultValue"
    | "disabled"
    | "error"
    | "fullWidth"
    | "helperText"
    | "id"
    | "inputRef"
    | "label"
    | "margin"
    | "maxRows"
    | "minRows"
    | "multiline"
    | "name"
    | "onChange"
    | "onBlur"
    | "onKeyDown"
    | "onKeyUp"
    | "onInput"
    | "placeholder"
    | "required"
    | "rows"
    | "sx"
    | "type"
    | "value"
    | "slotProps"
  > {
  /**
   * The variant to use.
   * @default standard
   */
  variant?: Exclude<MuiTextFieldProps["variant"], "filled">;
  /**
   * If `normal` will adjust vertical spacing of this and contained components.
   * @default none
   */
  margin?: MuiTextFieldProps["margin"];
  /**
   * If `true`, the input will take up the full width of its container.
   * @default true
   */
  fullWidth?: MuiTextFieldProps["fullWidth"];
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly?: boolean;
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment?: React.ReactNode;
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment?: React.ReactNode;
}

export const TextField = React.forwardRef(
  (
    { readOnly, startAdornment, endAdornment, ...props }: TextFieldProps,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <MuiTextField
      ref={ref}
      {...props}
      slotProps={{
        input: {
          readOnly,
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined,
          ...props.slotProps?.input,
        },
        ...props.slotProps,
      }}
    />
  ),
);
