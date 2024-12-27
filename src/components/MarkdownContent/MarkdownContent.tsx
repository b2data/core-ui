import { Box, SxProps } from "@mui/material";
import React, { useMemo } from "react";
import { marked } from "marked";

import { useMarkdownStyles } from "./styles";

export interface MarkdownContentProps {
  /**
   * Placeholder to be shown on empty field
   */
  placeholder?: string;
  /**
   * The Markdown value to be shown
   */
  value?: string;
  /** */
  sx?: SxProps;
}

export const MarkdownContent = React.forwardRef(
  (
    { placeholder, value, sx }: MarkdownContentProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    const markdownContent = useMemo(
      () => (value ? (marked.parse(value?.toString() || "") as string) : value),
      [value],
    );

    return (
      <Box
        ref={ref}
        data-placeholder={placeholder}
        component="span"
        // @ts-ignore
        sx={(theme) => ({
          ...theme.typography.body1,
          ...useMarkdownStyles(theme),
          width: "100%",
          wordBreak: "break-all",
          display: "block",
          lineHeight: 1.1,
          minHeight: 36,
          whiteSpace: "break-spaces",
          "&:empty:before": {
            content: "attr(data-placeholder)",
            color: theme.palette.text.disabled,
          },
          ...sx,
        })}
        dangerouslySetInnerHTML={{ __html: markdownContent ?? "" }}
      />
    );
  },
);
