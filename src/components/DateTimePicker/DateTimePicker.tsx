import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers";
import React from "react";
import { Dayjs } from "dayjs";

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
}

export const DateTimePicker = React.forwardRef(function DateTimePicker<
  TDate extends Dayjs | null = Dayjs | null,
>(
  { format, ...props }: DateTimePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
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
  );
});
