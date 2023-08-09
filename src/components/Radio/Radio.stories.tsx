import { Preview } from ".storybook/components";

import { FormControlLabel } from "../FormControlLabel";

import { Radio, RadioProps } from "./Radio";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<RadioProps> = {
  title: "Components/Inputs/Radio",
  component: Radio,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<RadioProps> = {
  argTypes: { onChange: { action: "onChange" } },
  render: (props) => <Radio {...props} />
};

export const Variants: StoryObj<RadioProps> = {
  render: (props) => (
    <Preview>
      <Radio {...props} defaultChecked />
      <Radio {...props} />
      <Radio {...props} disabled />
      <Radio {...props} disabled checked />
    </Preview>
  )
};

export const Labels: StoryObj<RadioProps> = {
  render: (props) => (
    <Preview>
      <FormControlLabel label="Label" control={<Radio {...props} />} />
      <FormControlLabel
        label="Required"
        required
        control={<Radio {...props} />}
      />
      <FormControlLabel
        label="Disabled"
        disabled
        control={<Radio {...props} />}
      />
    </Preview>
  )
};

export const Sizes: StoryObj<RadioProps> = {
  render: (props) => (
    <Preview>
      <Radio {...props} size="small" />
      <Radio {...props} size="medium" />
    </Preview>
  )
};

export const Colors: StoryObj<RadioProps> = {
  args: { checked: true },
  render: (props) => (
    <Preview>
      <Radio {...props} color="primary" />
      <Radio {...props} color="secondary" />
      <Radio {...props} color="default" />
      <Radio {...props} color="success" />
      <Radio {...props} color="error" />
      <Radio {...props} color="info" />
      <Radio {...props} color="warning" />
    </Preview>
  )
};
