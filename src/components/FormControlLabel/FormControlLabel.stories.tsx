import { Checkbox } from "../Checkbox";

import { FormControlLabel, FormControlLabelProps } from "./FormControlLabel";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FormControlLabelProps> = {
  title: "Components/Inputs/FormControlLabel",
  component: FormControlLabel,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<FormControlLabelProps> = {
  args: {
    label: "Checkbox",
    control: <Checkbox />
  }
};
