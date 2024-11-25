import { Box, SxProps } from "@mui/material";
import React, { ReactNode, useMemo } from "react";
import { marked } from "marked";

import { useConfig } from "./use-config";
import { useMarkdownStyles } from "../MarkdownContent/";

export interface MarkdownFieldProps {
  /**
   * The label of the field
   */
  label?: string;
  /**
   * If `true`, the value will be shown as HTML
   */
  readOnly?: boolean;
  /**
   * If `true`, the component is HTMLElement.
   */
  disabled?: boolean;
  /**
   * Placeholder to be shown on empty field
   */
  placeholder?: string;
  /**
   * If `true`, the component will ignore HTML styles `onPaste`
   */
  plain?: boolean;
  /**
   * If `true`, the Component element is required.
   */
  required?: boolean;
  /**
   * Show error state
   */
  error?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The Markdown value to be shown
   */
  value?: string;
  /**
   * Callback fired when the Component is blurred. It returns Markdown.
   */
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  /**
   * Callback fired when the value is changed.
   */
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * Callback fired when the Component is pasted.
   */
  onPaste?: (event: React.ClipboardEvent<HTMLElement>) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps;
}

export const MarkdownField = React.forwardRef(
  (
    {
      label,
      readOnly,
      disabled,
      error,
      placeholder,
      required,
      value,
      sx,
      ...restProps
    }: MarkdownFieldProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    const {
      state,
      isFocused,
      ref: inputRef,
      ...configProps
    } = useConfig({
      value,
      readOnly,
      disabled,
      placeholder,
      ...restProps,
    });

    const markdownContent = useMemo(
      () => (value ? (marked.parse(value?.toString() || "") as string) : value),
      [value],
    );

    return (
      <Box
        ref={ref}
        sx={(theme) => ({
          display: "inline-flex",
          flexDirection: "column",
          position: "relative",
          width: 1,
          padding: 0,
          margin: 0,
          border: 0,
          verticalAlign: "top",
        })}
      >
        <Box
          component="label"
          sx={(theme) => ({
            ...theme.typography.body1,
            color: "#6B778C",
            transformOrigin: "top left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            mt: -2,
            transform: "translate(0, 17px) scale(1)",
            transition:
              "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            ...(isFocused || value || placeholder
              ? {
                  transform: "translate(0, -1.5px) scale(0.75)",
                }
              : {}),
            ...(isFocused
              ? {
                  color: theme.palette.primary.main,
                }
              : {}),
            ...(disabled
              ? {
                  color: theme.palette.text.disabled,
                }
              : {}),
            ...(error
              ? {
                  color: theme.palette.error.main,
                }
              : {}),
          })}
        >
          {label}
          {required && (
            <Box component="span" color="error.main">
              {` *`}
            </Box>
          )}
        </Box>
        <Box
          sx={(theme) => ({
            ...theme.typography.body1,
            position: "relative",
            minHeight: 36,
            width: 1,
            "&:before": {
              left: 0,
              right: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              borderBottom: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
              pointerEvents: "none",
              ...(disabled
                ? {
                    borderBottomStyle: "dotted",
                  }
                : {
                    "&:hover:before": {
                      borderWidth: 2,
                    },
                  }),
            },
            "&:after": {
              borderBottom: `2px solid ${error ? theme.palette.error.main : theme.palette.primary.main}`,
              left: 0,
              right: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              transform: "scaleX(0)",
              transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
              pointerEvents: "none",
              ...(disabled ? { display: "none" } : {}),
            },
            "&:focus-within:after": {
              transform: "scaleX(1) translateX(0)",
            },
            ...useMarkdownStyles(theme),
          })}
        >
          <Box
            component="span"
            ref={inputRef}
            {...configProps}
            key={state}
            // @ts-ignore
            sx={(theme) => ({
              width: "100%",
              wordBreak: "break-all",
              display: "block",
              outline: "none",
              lineHeight: 1.1,
              minHeight: 36,
              padding: "8px 0",
              whiteSpace: "pre-line",
              "&:empty:before": {
                content: "attr(data-placeholder)",
                color: theme.palette.text.disabled,
              },
              ...sx,
            })}
            dangerouslySetInnerHTML={{ __html: markdownContent ?? "" }}
          />
        </Box>
      </Box>
    );
  },
);
