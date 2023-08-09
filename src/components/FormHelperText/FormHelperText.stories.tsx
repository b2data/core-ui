import { FormHelperText, FormHelperTextProps } from "./FormHelperText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FormHelperTextProps> = {
  title: "Components/Inputs/FormHelperText",
  component: FormHelperText,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<FormHelperTextProps> = {
  args: {
    children: "Helper text"
  }
};
