import { Preview } from ".storybook/components";

import { FormControlLabel } from "../FormControlLabel";

import { Switch, SwitchProps } from "./Switch";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SwitchProps> = {
  title: "Components/Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<SwitchProps> = {
  argTypes: { onChange: { action: "onChange" } },
  render: (props) => <Switch {...props} />,
};

export const Variants: StoryObj<SwitchProps> = {
  render: (props) => (
    <Preview>
      <Switch {...props} defaultChecked />
      <Switch {...props} />
      <Switch {...props} disabled />
      <Switch {...props} disabled checked />
    </Preview>
  ),
};

export const Labels: StoryObj<SwitchProps> = {
  render: (props) => (
    <Preview>
      <FormControlLabel label="Label" control={<Switch {...props} />} />
      <FormControlLabel
        label="Required"
        required
        control={<Switch {...props} />}
      />
      <FormControlLabel
        label="Disabled"
        disabled
        control={<Switch {...props} />}
      />
    </Preview>
  ),
};

export const Sizes: StoryObj<SwitchProps> = {
  render: (props) => (
    <Preview>
      <Switch {...props} size="small" />
      <Switch {...props} size="medium" />
    </Preview>
  ),
};

export const Colors: StoryObj<SwitchProps> = {
  args: { checked: true },
  render: (props) => (
    <Preview>
      <Switch {...props} color="primary" />
      <Switch {...props} color="secondary" />
      <Switch {...props} color="success" />
      <Switch {...props} color="error" />
      <Switch {...props} color="info" />
      <Switch {...props} color="warning" />
    </Preview>
  ),
};
