import {
  Box,
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import React, { isValidElement } from "react";

import { OverrideMuiProps } from "../types";

export interface LinearProgressProps
  extends OverrideMuiProps<
    MuiLinearProgressProps,
    "value" | "valueBuffer" | "sx"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiLinearProgressProps["color"];
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default indeterminate
   */
  variant?: "determinate" | "indeterminate" | "buffer";
  /**
   * Show label inside progress
   */
  label?: string | number | React.ReactNode;
  /**
   * SX properties for wrap component
   */
  wrapSx?: SxProps<Theme>;
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  label,
  wrapSx,
  ...props
}) => (
  <Box sx={{ display: "flex", alignItems: "center", ...wrapSx }}>
    <MuiLinearProgress {...props} />
    {label && (
      <Box sx={{ ml: 2 }}>
        {isValidElement(label) ? (
          label
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ minWidth: 35 }}
          >
            {label}
          </Typography>
        )}
      </Box>
    )}
  </Box>
);
