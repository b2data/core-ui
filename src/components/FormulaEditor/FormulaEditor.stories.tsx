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
