export { LocalizationProvider as DatePickerProvider } from "@mui/x-date-pickers";
export { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { BoxProps, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";
import { Dayjs } from "dayjs";

import { Box } from "../Box";
import { FormHelperText } from "../FormHelperText";

export interface DatePickerProps<TDate extends Dayjs | null = Dayjs | null>
  extends Omit<
    MuiDatePickerProps<TDate>,
    | "components"
    | "componentsProps"
    | "slots"
    | "slotProps"
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
  format?: MuiDatePickerProps<TDate>["format"];
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
  margin?: Exclude<MuiTextFieldProps["margin"], "dence">;
  /**
   * Wrapper props
   */
  wrapperProps?: BoxProps;
}

export const DatePicker = React.forwardRef(function DatePicker<
  TDate extends Dayjs | null = Dayjs | null,
>(
  { format, helperText, wrapperProps, ...props }: DatePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box {...wrapperProps}>
      <MuiDatePicker ref={ref} format={format || "DD.MM.YYYY"} {...props} />
      {helperText && (
        <FormHelperText error={props.error}>{helperText}</FormHelperText>
      )}
    </Box>
  );
});
