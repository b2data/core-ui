import { FormulaTextField, FormulaTextFieldProps } from "./FormulaTextField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FormulaTextFieldProps> = {
  title: "Components/Formula Editor/Formula Text Field",
  component: FormulaTextField,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<FormulaTextFieldProps> = {
  args: {
    type: "number",
    isEditable: true,
    placeholder: "Number value",
    value: { id: "0.4", name: "0.4" },
    helperText: "Helper text",
    inputProps: { endAdornment: "2" },
  },
};
