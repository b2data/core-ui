import { Theme } from "@mui/material";

export const useMarkdownStyles = (theme: Theme) => ({
  "& h1": {
    ...theme.typography.h1,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& h2": {
    ...theme.typography.h2,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& h3": {
    ...theme.typography.h3,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& h4": {
    ...theme.typography.h4,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& h5": {
    ...theme.typography.h5,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& h6": {
    ...theme.typography.h6,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& p": {
    ...theme.typography.body1,
    mt: 0,
    mb: 2,
    display: "inline-block",
  },
  "& ul, ol": {
    m: 0,
    mb: 2,
    pl: 5,
  },
  "& *:last-child": { mb: 0 },
});
