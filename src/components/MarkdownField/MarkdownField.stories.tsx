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
    plain: true,
    required: true,
    // error: true,
    // disabled: true,
    // readOnly: true,
  },
  render: (props) => {
    const [val, setVal] = useState("");
    return <MarkdownField value={val} onBlur={setVal} {...props} />;
  },
};
