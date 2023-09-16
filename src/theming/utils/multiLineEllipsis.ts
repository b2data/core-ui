import { SxProps, Theme } from "@mui/material";

export const multiLineEllipsis = (lines: number): SxProps<Theme> => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
});
