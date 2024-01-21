import { SxProps } from "@mui/material";

import { Box } from "../Box";

export type DropLineProps = {
  shown: boolean;
  depth?: number;
  sx?: SxProps;
};

export const DropLine: React.FC<DropLineProps> = ({ depth = 0, shown, sx }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: -2,
        height: 2,
        zIndex: 2,
        ml: 2.5 + depth * 4,
        bgcolor: "primary.light",
        display: shown ? "block" : "none",
        "&:before": {
          content: "' '",
          position: "absolute",
          top: -3,
          left: -6,
          height: 8,
          width: 8,
          borderRadius: 50,
          border: "2px solid",
          borderColor: "primary.light",
        },
        ...sx,
      }}
    ></Box>
  );
};
