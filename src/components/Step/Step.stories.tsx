import { InfoIcon } from "src/icons";

import { Step, StepProps } from "./Step";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<StepProps> = {
  title: "Components/Stepper/Step",
  component: Step,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<StepProps> = {
  args: {
    index: 0,
    label: "Default step",
    children: "dasda",
    optional: "optional",
  },
};

export const Active: StoryObj<StepProps> = {
  args: {
    index: 0,
    label: "Active step",
    active: true,
  },
};

export const Completed: StoryObj<StepProps> = {
  args: {
    index: 0,
    label: "Completed step",
    completed: true,
  },
};

export const Disabled: StoryObj<StepProps> = {
  args: {
    index: 0,
    label: "Disabled step",
    disabled: true,
  },
};

export const WithIcon: StoryObj<StepProps> = {
  args: {
    index: 0,
    label: "With Icon step",
    icon: <InfoIcon />,
  },
};

export const AsButton: StoryObj<StepProps> = {
  args: {
    index: 0,
    asButton: true,
    label: "Button Step",
    optional: "Optional",
    icon: <InfoIcon />,
  },
};
