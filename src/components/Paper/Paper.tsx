import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@mui/material";
import React from "react";

export interface PaperProps
  extends Pick<
    MuiPaperProps,
    "component" | "elevation" | "square" | "sx" | "variant"
  > {
  /**
   * The variant to use.
   * @default outlined
   */
  variant?: MuiPaperProps["variant"];
}

export const Paper: React.FC<PaperProps> = (props) => <MuiPaper {...props} />;
