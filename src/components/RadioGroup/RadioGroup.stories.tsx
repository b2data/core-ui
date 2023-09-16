import { FormControlLabel } from "../FormControlLabel";
import { Radio } from "../Radio";

import { RadioGroup, RadioGroupProps } from "./RadioGroup";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<RadioGroupProps> = {
  title: "Components/Inputs/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<RadioGroupProps> = {
  args: { name: "quiz" },
  argTypes: { onChange: { action: "onChange" } },
  render: (props) => (
    <RadioGroup {...props}>
      <FormControlLabel value="best" control={<Radio />} label="The best!" />
      <FormControlLabel value="worst" control={<Radio />} label="The worst." />
    </RadioGroup>
  ),
};
