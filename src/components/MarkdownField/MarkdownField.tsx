import { Box, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

import { FormHelperText } from "../FormHelperText";
import { DataBlock } from "../DataBlock";

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
   * Defined margin offset
   * @default none
   */
  margin?: "normal" | "none";
  /**
   * Defines minimum height of the field
   * @default 1
   */
  minRows?: number;
  /**
   * Callback fired when the Component is blurred. It returns Markdown.
   */
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
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
      margin = "none",
      minRows = 1,
      helperText,
      sx,
      onBlur,
      onChange,
    }: MarkdownFieldProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    const [isFocus, setIsFocus] = React.useState(false);

    return (
      <Box
        ref={ref}
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          position: "relative",
          width: 1,
          padding: 0,
          margin: margin === "normal" ? "8px 0 16px" : 0,
          border: 0,
          verticalAlign: "top",
          ...sx,
        }}
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
            transform: "translate(0, 16px) scale(1)",
            transition:
              "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            ...(value || placeholder || isFocus
              ? {
                  transform: "translate(0, -1.5px) scale(0.75)",
                }
              : {}),
            ...(isFocus
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
        <DataBlock
          content={value}
          editable={!disabled}
          readOnly={readOnly}
          onBlur={(v) => {
            onBlur && onBlur(v);
            setIsFocus(false);
          }}
          onFocus={() => setIsFocus(true)}
          placeholderText={placeholder}
          onChange={onChange}
          onChangeDebounce={100}
          mdProps={{
            slashCommands: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "highlight",
            ],
          }}
          sx={(theme) => ({
            position: "relative",
            "& > div": {
              fontSize: "14px",
              padding: "5px 0",
              outline: "none !important",
              minHeight: 21 + (minRows - 1) * 21 + 10,
            },
            "& .cm-line": {
              paddingLeft: 0,
            },
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
          })}
        />
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </Box>
    );
  },
);
