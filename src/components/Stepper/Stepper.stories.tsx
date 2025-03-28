import { useState } from "react";

import { Step } from "../Step";

import { Stepper, StepperProps } from "./Stepper";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<StepperProps> = {
  title: "Components/Stepper/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<StepperProps> = {
  render: () => {
    const [step, setStep] = useState(0);

    const steps = ["First step", "Second step", "Last step"];

    return (
      <Stepper activeStep={step} nonLinear>
        {steps.map((label, index) => (
          <Step
            key={label}
            asButton
            onClick={() => setStep(index)}
            label={label}
          />
        ))}
      </Stepper>
    );
  },
};

export const Vertical: StoryObj<StepperProps> = {
  render: () => {
    const [step, setStep] = useState(0);

    const steps = ["First step", "Second step", "Last step"];

    return (
      <Stepper activeStep={step} nonLinear orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} onClick={() => setStep(index)} label={label}>
            {label}
          </Step>
        ))}
      </Stepper>
    );
  },
};
