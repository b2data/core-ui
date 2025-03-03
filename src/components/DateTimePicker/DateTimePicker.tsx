import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers";
import { BoxProps, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";
import { Dayjs } from "dayjs";

import { Box } from "../Box";
import { FormHelperText } from "../FormHelperText";

export interface DateTimePickerProps<TDate extends Dayjs | null = Dayjs | null>
  extends Omit<
    MuiDateTimePickerProps<TDate>,
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
   * @default DD.MM.YYYY HH:mm
   */
  format?: MuiDateTimePickerProps<TDate>["format"];
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

export const DateTimePicker = React.forwardRef(function DateTimePicker<
  TDate extends Dayjs | null = Dayjs | null,
>(
  {
    format,
    helperText,
    wrapperProps,
    label,
    required,
    ...props
  }: DateTimePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box width={1} {...wrapperProps}>
      <MuiDateTimePicker
        ref={ref}
        format={format || "DD.MM.YYYY HH:mm"}
        ampm={false}
        ampmInClock={false}
        label={
          <>
            {label}
            {required && (
              <Box component="span" sx={{ color: "error.main" }}>
                {" *"}
              </Box>
            )}
          </>
        }
        slotProps={{
          openPickerButton: { size: "small" },
        }}
        {...props}
        sx={{
          ...props.sx,
          ".MuiButtonBase-root": {
            minWidth: "auto",
          },
        }}
      />
      {helperText && (
        <FormHelperText error={props.error}>{helperText}</FormHelperText>
      )}
    </Box>
  );
});
