import "dayjs/locale/ru";

import { FormulaEditor, FormulaEditorProps } from "./FormulaEditor";

import type { Meta, StoryObj } from "@storybook/react";
import { Preview } from ".storybook/components";

const meta: Meta<FormulaEditorProps> = {
  title: "Components/Formula Editor/Formula Editor",
  component: FormulaEditor,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<FormulaEditorProps> = {
  args: {
    rows: [],
    onChange: console.log,
    isEditable: true,
  },
  render: (props) => (
    <Preview>
      <FormulaEditor {...props} />
    </Preview>
  ),
};

export const WithUnit: StoryObj<FormulaEditorProps> = {
  args: {
    rows: [],
    isEditable: true,
    onSearch: () =>
      Promise.resolve([
        { id: "Option 1", name: "Option 1", description: "Demo description" },
        {
          id: "Option 2",
          name: "Option 2",
          description:
            "Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 ",
          photo: "/favicon.svg",
        },
        { id: "Option 3", name: "Option 3" },
        {
          id: "Длина",
          name: "Длина",
          unit: "метр",
          systemUnit: "m",
          coeff: 1,
        },
        {
          id: "Дата производства",
          name: "Дата производства",
          unit: "день",
          systemUnit: "s",
          coeff: 24 * 60 * 60,
        },
      ]),
  },
  render: (props) => (
    <Preview>
      <FormulaEditor {...props} />
    </Preview>
  ),
};
