import { MuiPickersAdapter, PickerValidDate } from "../../models";
import { DateOrTimeViewWithMeridiem, TimeViewWithMeridiem } from "../models";
import { areViewsEqual } from "./views";

export const EXPORTED_TIME_VIEWS = ["hours", "minutes", "seconds"] as const;

export const TIME_VIEWS = ["hours", "minutes", "seconds", "meridiem"] as const;

export const isTimeView = (view: DateOrTimeViewWithMeridiem) =>
  EXPORTED_TIME_VIEWS.includes(view as any);

export const isInternalTimeView = (
  view: DateOrTimeViewWithMeridiem,
): view is TimeViewWithMeridiem => TIME_VIEWS.includes(view as any);

export type Meridiem = "am" | "pm";

export const getMeridiem = (
  date: PickerValidDate | null,
  utils: MuiPickersAdapter,
): Meridiem | null => {
  if (!date) {
    return null;
  }

  return utils.getHours(date) >= 12 ? "pm" : "am";
};

export const convertValueToMeridiem = (
  value: number,
  meridiem: Meridiem | null,
  ampm: boolean,
) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }

  return value;
};

export const convertToMeridiem = (
  time: PickerValidDate,
  meridiem: Meridiem,
  ampm: boolean,
  utils: MuiPickersAdapter,
): PickerValidDate => {
  const newHoursAmount = convertValueToMeridiem(
    utils.getHours(time),
    meridiem,
    ampm,
  );
  return utils.setHours(time, newHoursAmount);
};

export const getSecondsInDay = (
  date: PickerValidDate,
  utils: MuiPickersAdapter,
) => {
  return (
    utils.getHours(date) * 3600 +
    utils.getMinutes(date) * 60 +
    utils.getSeconds(date)
  );
};

export const createIsAfterIgnoreDatePart =
  (
    disableIgnoringDatePartForTimeValidation: boolean,
    utils: MuiPickersAdapter,
  ) =>
  (dateLeft: PickerValidDate, dateRight: PickerValidDate) => {
    if (disableIgnoringDatePartForTimeValidation) {
      return utils.isAfter(dateLeft, dateRight);
    }

    return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
  };

export const resolveTimeFormat = (
  utils: MuiPickersAdapter,
  {
    format,
    views,
    ampm,
  }: { format?: string; views: readonly TimeViewWithMeridiem[]; ampm: boolean },
) => {
  if (format != null) {
    return format;
  }

  const formats = utils.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }

  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }

  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }

  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }

  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm
      ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}`
      : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }

  return ampm
    ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}`
    : `${formats.hours24h}:${formats.minutes}`;
};
