import { FormulaEditor, FormulaEditorProps } from "./FormulaEditor";
import { FormulaOperator } from "./model";

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
    rows: [],
    isEditable: true,
    hasUnitSelection: true,
    units: [
      { id: "m", label: "Length" },
      { id: "m2", label: "Area" },
      { id: "day", label: "Date", isDate: true },
    ],
  },
};
