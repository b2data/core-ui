import { useState } from "react";

import { MarkdownField, MarkdownFieldProps } from "./MarkdownField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MarkdownFieldProps> = {
  title: "Components/Inputs/Markdown Field",
  component: MarkdownField,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MarkdownFieldProps> = {
  args: {
    label: "Base",
    placeholder: "Placeholder",
    required: true,
    minRows: 10,
    // error: true,
    // disabled: true,
    // readOnly: true,
  },
  render: (props) => {
    const [val, setVal] = useState("Demo");
    return <MarkdownField defaultValue={val} onChange={setVal} {...props} />;
  },
};
