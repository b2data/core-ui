import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from "@mui/x-date-pickers";
import { BoxProps, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";
import { Dayjs } from "dayjs";

import { Box } from "../Box";
import { FormHelperText } from "../FormHelperText";

export interface TimePickerProps<TDate extends Dayjs | null = Dayjs | null>
  extends Omit<
    MuiTimePickerProps<TDate>,
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
   * @default HH:mm
   */
  format?: MuiTimePickerProps<TDate>["format"];
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

export const TimePicker = React.forwardRef(function TimePicker<
  TDate extends Dayjs | null = Dayjs | null,
>(
  {
    format,
    helperText,
    wrapperProps,
    required,
    label,
    ...props
  }: TimePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box width={1} {...wrapperProps}>
      <MuiTimePicker
        ref={ref}
        format={format || "HH:mm"}
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
