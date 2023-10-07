import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface PaperProps
  extends OverrideMuiProps<
    MuiPaperProps,
    "component" | "elevation" | "square" | "sx" | "variant"
  > {
  /**
   * The variant to use.
   * @default outlined
   */
  variant?: MuiPaperProps["variant"];
}

export const Paper = React.forwardRef(
  (props: PaperProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiPaper ref={ref} {...props} />
  ),
);
