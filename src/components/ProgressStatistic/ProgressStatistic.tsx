import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";

export type ProgressStatisticEntryType = {
  color: string;
  value: number;
};

export interface ProgressStatisticProps {
  /**
   * Statistic data.
   * `ProgressStatisticEntryType = { color: string; value: number }`
   */
  data: ProgressStatisticEntryType[];
  /**
   * SX properties for component
   */
  sx?: SxProps<Theme>;
}

export const ProgressStatistic: FC<ProgressStatisticProps> = ({
  data,
  ...props
}) => {
  const total = data.reduce((sum, next) => sum + next.value, 0);
  return (
    <Box
      display="flex"
      borderRadius={2}
      overflow="hidden"
      height={8}
      {...props}
    >
      {data.map(({ color, value }) => (
        <Box
          key={color + value}
          sx={{
            backgroundColor: color,
            width: `${(value / total) * 100}%`
          }}
        />
      ))}
    </Box>
  );
};
