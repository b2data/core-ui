export { LocalizationProvider as DatePickerProvider } from "@mui/x-date-pickers";
export { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { BoxProps, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";

import { Box } from "../Box";
import { FormHelperText } from "../FormHelperText";
import { Dayjs } from "dayjs";

declare module "@mui/x-date-pickers/models" {
  interface PickerValidDateLookup {
    dayjs: Dayjs;
  }
}

export interface DatePickerProps
  extends Omit<
    MuiDatePickerProps,
    | "components"
    | "componentsProps"
    | "slots"
    | "desktopModeMediaQuery"
    | "viewRenderers"
    | "timezone"
    | "selectedSections"
    | "onSelectedSectionsChange"
    | "reduceAnimations"
    | "renderLoading"
    | "loading"
    | "outsideCurrentMonth"
    | "showDaysOutsideCurrentMonth"
    | "formatDensity"
  > {
  /**
   * @default DD.MM.YYYY
   */
  format?: MuiDatePickerProps["format"];
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode;
  /**
   * If `normal` will adjust vertical spacing of this and contained components.
   * @default none
   */
  margin?: MuiTextFieldProps["margin"];
  /**
   * Wrapper props
   */
  wrapperProps?: BoxProps;
  /**
   * If `true`, the asterics is displayed after label.
   * @default false
   */
  required?: boolean;
}

export const DatePicker = React.forwardRef(function DatePicker(
  {
    format,
    helperText,
    wrapperProps,
    required,
    label,
    ...props
  }: DatePickerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box width={1} {...wrapperProps}>
      <MuiDatePicker
        ref={ref}
        format={format || "DD.MM.YYYY"}
        enableAccessibleFieldDOMStructure={false}
        label={
          label ? (
            <>
              {label}
              {required && (
                <Box component="span" sx={{ color: "error.main" }}>
                  {" *"}
                </Box>
              )}
            </>
          ) : undefined
        }
        {...props}
        slotProps={{
          openPickerButton: { size: "small" },
          textField: {
            error: props.error,
            disabled: props.disabled,
            ...props.slotProps?.textField,
          },
          ...props.slotProps,
        }}
      />
      {helperText && (
        <FormHelperText error={props.error}>{helperText}</FormHelperText>
      )}
    </Box>
  );
});
