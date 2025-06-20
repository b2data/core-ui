import dayjs from "dayjs";
import "dayjs/locale/ru";

import { DatePicker, DatePickerProps } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";
import { Preview } from ".storybook/components";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Inputs/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DatePickerProps> = {
  args: {},
  render: (props) => (
    <Preview>
      <DatePicker {...props} />
    </Preview>
  ),
};

export const WithError: StoryObj<DatePickerProps> = {
  args: {
    error: true,
    helperText: "Invalid date",
  },
  render: (props) => (
    <Preview>
      <DatePicker {...props} />
    </Preview>
  ),
};

export const DefaultValue: StoryObj<DatePickerProps> = {
  args: {},
  render: (props) => (
    <Preview>
      <DatePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
      <DatePicker defaultValue={null} {...props} />
    </Preview>
  ),
};
