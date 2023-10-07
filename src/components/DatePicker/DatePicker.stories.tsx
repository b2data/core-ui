import dayjs from "dayjs";
import "dayjs/locale/ru";

import {
  AdapterDayjs,
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Inputs/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DatePickerProps> = {
  args: {},
  render: (props) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} />
    </LocalizationProvider>
  ),
};

export const DefaultValue: StoryObj<DatePickerProps> = {
  args: {},
  render: (props) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
      <DatePicker defaultValue={null} {...props} />
    </LocalizationProvider>
  ),
};

export const LocaleRU: StoryObj<DatePickerProps> = {
  args: {},
  render: (props) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
    </LocalizationProvider>
  ),
};
