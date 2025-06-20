import dayjs from "dayjs";
import "dayjs/locale/ru";

import { DateTimePicker, DateTimePickerProps } from "./DateTimePicker";

import type { Meta, StoryObj } from "@storybook/react";
import { Preview } from ".storybook/components";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/Inputs/Date Time Picker",
  component: DateTimePicker,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DateTimePickerProps> = {
  args: {},
  render: (props) => (
    <Preview>
      <DateTimePicker {...props} />
    </Preview>
  ),
};

export const DefaultValue: StoryObj<DateTimePickerProps> = {
  args: { required: true, label: "Demo" },
  render: (props) => (
    <Preview>
      <DateTimePicker defaultValue={dayjs("2022-01-01T10:20:33")} {...props} />
      <DateTimePicker defaultValue={null} {...props} />
    </Preview>
  ),
};
