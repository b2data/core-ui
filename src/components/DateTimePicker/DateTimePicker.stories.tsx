import dayjs from "dayjs";
import "dayjs/locale/ru";

import { AdapterDayjs, DatePickerProvider } from "../DatePicker";

import { DateTimePicker, DateTimePickerProps } from "./DateTimePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/Inputs/Date Time Picker",
  component: DateTimePicker,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DateTimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker {...props} />
    </DatePickerProvider>
  ),
};

export const DefaultValue: StoryObj<DateTimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
      <DateTimePicker defaultValue={null} {...props} />
    </DatePickerProvider>
  ),
};

export const LocaleRU: StoryObj<DateTimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DateTimePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
    </DatePickerProvider>
  ),
};
