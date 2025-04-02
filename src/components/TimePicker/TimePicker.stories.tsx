import dayjs from "dayjs";
import "dayjs/locale/ru";

import { AdapterDayjs, DatePickerProvider } from "../DatePicker";

import { TimePicker, TimePickerProps } from "./TimePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TimePicker> = {
  title: "Components/Inputs/Time Picker",
  component: TimePicker,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<TimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      <TimePicker {...props} />
    </DatePickerProvider>
  ),
};

export const DefaultValue: StoryObj<TimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      <TimePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
      <TimePicker
        defaultValue={null}
        {...props}
        slotProps={{ textField: { variant: "outlined" } }}
      />
    </DatePickerProvider>
  ),
};

export const LocaleRU: StoryObj<TimePickerProps> = {
  args: {},
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <TimePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
    </DatePickerProvider>
  ),
};
