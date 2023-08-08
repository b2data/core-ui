import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Typography
} from "@mui/material";
import { FC, isValidElement } from "react";

import { OverrideMuiProps } from "src/types";

export interface CircularProgressProps
  extends OverrideMuiProps<
    MuiCircularProgressProps,
    "size" | "thickness" | "value" | "sx"
  > {
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiCircularProgressProps["color"];
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   * @default indeterminate
   */
  variant?: MuiCircularProgressProps["variant"];
  /**
   * Show label inside progress
   */
  label?: string | number | React.ReactNode;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  label,
  ...props
}) => (
  <Box sx={{ position: "relative", display: "inline-flex" }}>
    <MuiCircularProgress {...props} />
    {label && (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {isValidElement(label) ? (
          label
        ) : (
          <Typography variant="caption" color="text.secondary">
            {label}
          </Typography>
        )}
      </Box>
    )}
  </Box>
);
