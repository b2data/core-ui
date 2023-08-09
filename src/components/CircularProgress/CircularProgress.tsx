import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  SxProps,
  Theme,
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
  /**
   * SX properties for wrap component
   */
  wrapSx?: SxProps<Theme>;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  label,
  wrapSx,
  ...props
}) => (
  <Box sx={{ position: "relative", display: "inline-flex", ...wrapSx }}>
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
