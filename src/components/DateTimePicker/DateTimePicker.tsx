import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
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
  margin?: Exclude<MuiTextFieldProps["margin"], "dence">;
}

export const DateTimePicker = React.forwardRef(function DateTimePicker<
  TDate extends Dayjs | null = Dayjs | null,
>(
  { format, helperText, ...props }: DateTimePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box width={1}>
      <MuiDateTimePicker
        ref={ref}
        format={format || "DD.MM.YYYY HH:mm"}
        ampm={false}
        ampmInClock={false}
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
