import { SxProps } from "@mui/material";

export const getCommonStyles = (placeholder: string = ""): SxProps => ({
  width: 1,
  minHeight: "inherit",
  lineHeight: 1.15,
  p: 1.5,
  display: "inline",
  "&[contentEditable=true]:empty::before": {
    position: "absolute",
    content: `"${placeholder}"`,
    color: "text.disabled",
  },
  "&[contentEditable=true]:empty::after": {
    content: `"\feff"`,
  },
  "& ul": { my: 0 },
  "& ol": { my: 0 },
});
