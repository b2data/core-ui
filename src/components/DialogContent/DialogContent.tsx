import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from "@mui/material";
import React from "react";

export interface DialogContentProps
  extends Pick<MuiDialogContentProps, "children" | "dividers" | "sx"> {
  /**
   * If `true` the padding will be 0.
   */
  disablePadding?: boolean;
}

export const DialogContent: React.FC<DialogContentProps> = ({
  disablePadding,
  ...props
}) => (
  <MuiDialogContent {...props} style={{ padding: disablePadding ? 0 : 20 }} />
);
