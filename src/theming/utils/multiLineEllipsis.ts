import { SxProps } from "@mui/material";

import { Theme } from "../../theming";

export const multiLineEllipsis = (lines: number): SxProps<Theme> => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
});
