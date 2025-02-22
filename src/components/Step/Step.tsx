import {
  ButtonProps,
  Step as MuiStep,
  StepProps as MuiStepProps,
  StepButton,
  StepContent,
  StepLabel,
  StepLabelProps,
} from "@mui/material";
import { ReactNode } from "react";

export type StepProps = Omit<
  MuiStepProps,
  "classes" | "children" | "expanded"
> &
  Pick<StepLabelProps, "error" | "icon" | "optional" | "componentsProps"> & {
    /**
     * The label to show inside `StepLabel`
     */
    label: ReactNode;
    /**
     * The content to render inside `StepContent`
     */
    children?: ReactNode;
    /**
     * Display step as button
     * @default false
     */
    asButton?: boolean;
    /**
     * Props to pass for StepButton
     * */
    buttonProps?: ButtonProps;
    /**
     * Click on step
     */
    onClick?: ButtonProps["onClick"];
  };

export const Step = ({
  label,
  children,
  error,
  icon,
  optional,
  componentsProps,
  asButton,
  buttonProps,
  onClick,
  ...props
}: StepProps) => {
  const content = (
    <StepLabel
      error={error}
      icon={icon}
      optional={optional}
      componentsProps={componentsProps}
      onClick={asButton ? undefined : onClick}
    >
      {label}
    </StepLabel>
  );

  return (
    <MuiStep {...props}>
      {asButton ? (
        <StepButton
          {...buttonProps}
          icon={icon}
          optional={optional}
          onClick={onClick}
        >
          {content}
        </StepButton>
      ) : (
        content
      )}
      {children && <StepContent>{children}</StepContent>}
    </MuiStep>
  );
};
