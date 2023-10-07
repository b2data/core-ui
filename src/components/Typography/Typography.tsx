import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import { OverrideMuiProps } from "../types";

export interface TypographyProps
  extends OverrideMuiProps<
    MuiTypographyProps,
    "component" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "color",
    HTMLSpanElement
  > {
  /**
   * @default body1
   */
  variant?: MuiTypographyProps["variant"];
  /**
   * @default inherit
   */
  align?: MuiTypographyProps["align"];
  /**
   * Number of lines after that `...` is shown
   */
  wrapLines?: number;
  /**
   * If set, the text will be shown with `highlights` using `mark` tag if `children` is a sting.
   */
  highlight?: string;
}

const highlightText = (text: string, search?: string) => {
  if (!search) return text;

  const matches = match(text, search, {
    insideWords: true,
  });
  const parts = parse(text, matches);

  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? (
          <mark key={index}>{part.text}</mark>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
};

export const Typography = React.forwardRef(
  (
    { highlight, children, ...props }: TypographyProps,
    ref: React.Ref<HTMLSpanElement>,
  ) => (
    <MuiTypography ref={ref} {...props}>
      {typeof children === "string"
        ? highlightText(children, highlight)
        : children}
    </MuiTypography>
  ),
);
