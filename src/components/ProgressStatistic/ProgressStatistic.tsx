import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import { BoxProps } from "../Box";

export type ProgressStatisticEntryType = {
  color: string;
  value: number;
  label?: string;
};

export interface ProgressStatisticProps extends BoxProps {
  /**
   * Statistic data.
   * `ProgressStatisticEntryType = { color: string; value: number }`
   */
  data: ProgressStatisticEntryType[];
  /**
   * Box props for item
   */
  itemProps?: BoxProps;
}

export const ProgressStatistic = ({
  data,
  itemProps,
  ...props
}: ProgressStatisticProps) => {
  const total = data.reduce((sum, next) => sum + next.value, 0);
  return (
    <Box
      display="flex"
      height={8}
      {...props}
      sx={{
        ...props.sx,
        "& > *:first-of-type": {
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        },
        "& > *:last-of-type": {
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        },
      }}
    >
      {data.map(({ color, value, label }) => (
        <Box
          key={color + value}
          {...itemProps}
          sx={{
            position: "relative",
            backgroundColor: color,
            width: `${(value / total) * 100}%`,
            minWidth: "2%",
            "&:before": {
              position: "absolute",
              content: label ? `"${label}"` : "none",
              top: 10,
              fontSize: 12,
              color: "text.secondary",
            },
            ...itemProps?.sx,
          }}
        />
      ))}
    </Box>
  );
};
