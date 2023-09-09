import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle
} from "@mui/material";
import React, { cloneElement, ReactElement } from "react";

import { OverrideMuiProps } from "../types";

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    default: true;
  }
  interface AlertPropsVariantOverrides {
    standard: true;
    filled: false;
    outlined: true;
  }
}

export interface AlertProps
  extends OverrideMuiProps<
    MuiAlertProps,
    | "children"
    | "closeText"
    | "severity"
    | "icon"
    | "onClose"
    | "variant"
    | "sx"
    | "ref"
    | "component"
  > {
  /**
   * Override the default label for the close popup icon button.
   * @default Close
   */
  closeText?: MuiAlertProps["closeText"];
  /**
   * @default success
   */
  severity?: MuiAlertProps["severity"];
  /**
   * The variant to use.
   * @default standard
   */
  variant?: MuiAlertProps["variant"];
  /**
   * The title to show in the component
   */
  title?: string;
  /**
   * Draw actions that shows in the button-right of the alert
   */
  actions?: ReactElement;
}

export const Alert: React.FC<AlertProps> = ({
  title,
  children,
  actions,
  severity,
  ...props
}) => (
  <MuiAlert
    {...props}
    color={!severity ? "default" : undefined}
    severity={severity || "info"}
  >
    {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
    {children}
    {actions &&
      cloneElement(actions, {
        style: {
          marginLeft: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: "8px",
          marginTop: 8
        }
      })}
  </MuiAlert>
);
