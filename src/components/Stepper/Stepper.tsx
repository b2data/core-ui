import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from "@mui/material";

export interface StepperProps extends MuiStepperProps {}

export const Stepper = (props: StepperProps) => <MuiStepper {...props} />;
