import "dayjs/locale/ru";

import { AdapterDayjs, DatePickerProvider } from "../DatePicker";

import { FormulaEditor, FormulaEditorProps } from "./FormulaEditor";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FormulaEditorProps> = {
  title: "Components/Formula Editor",
  component: FormulaEditor,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<FormulaEditorProps> = {
  args: { rows: [], isEditable: true },
};

export const WithUnit: StoryObj<FormulaEditorProps> = {
  args: {
    rows: [
      {
        field: { id: "Option 1", label: "Option 1" },
        value: [{ id: "Option 1", label: "Option 1" }],
        type:'text',
        disabled: true,
      },
    ],
    isEditable: true,
    onSearch: () =>
      Promise.resolve([
        { id: "Option 1", label: "Option 1", description: "Demo description" },
        {
          id: "Option 2",
          label: "Option 2",
          description:
            "Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 ",
          photo: "/favicon.svg",
        },
        { id: "Option 3", label: "Option 3" },
        {
          id: "Длина",
          label: "Длина",
          unit: "метр",
          systemUnit: "m",
          coeff: 1,
        },
        {
          id: "Дата производства",
          label: "Дата производства",
          unit: "день",
          systemUnit: "s",
          coeff: 24 * 60 * 60,
        },
      ]),
  },
  render: (props) => (
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      <FormulaEditor {...props} />
    </DatePickerProvider>
  ),
};
