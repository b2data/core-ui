import React, { isValidElement, useMemo } from "react";

import { Typography, TypographyProps } from "../Typography";
import { Tooltip } from "../Tooltip";
import { Box } from "../Box";
import {
  SectionTitleAction,
  SectionTitleActionProps,
} from "../SectionTitleAction";
import { SxProps } from "@mui/material";

export interface SectionTitleProps {
  /**
   * Main component text.
   */
  title: string;
  /**
   * The title TypographyProps
   */
  titleProps?: TypographyProps;
  /**
   * Secondary component text.
   */
  subtitle?: string | React.ReactNode;
  /**
   * If set, the tooltip will be shown when hover on the title box.
   */
  tooltip?: string | React.ReactNode;
  /**
   * Helper text component that shows near the buttons.
   */
  helperText?: string | React.ReactNode;
  /**
   * Array of actions that will be shown.
   */
  actions?: SectionTitleActionProps[];
  /**
   * If `true` bottom border will be shown.
   */
  withBorder?: boolean;
  /**
   * If `true`, we reduce space between actions
   */
  dense?: boolean;
  /**
   *
   */
  sx?: SxProps;
}

export const SectionTitle = ({
  title,
  titleProps,
  subtitle,
  tooltip,
  helperText,
  actions,
  withBorder,
  dense,
  sx,
}: SectionTitleProps) => {
  const shownActions = useMemo(
    () => (actions || []).filter((a) => !a.hidden),
    [actions],
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ...(withBorder
          ? {
              borderBottom: ({ palette }) => `1px solid ${palette.divider}`,
              pb: 1,
            }
          : {}),
        ...sx,
      }}
    >
      {subtitle && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 20,
            color: "#6B778C",
            "& *": {
              color: "#6B778C",
            },
          }}
        >
          {subtitle}
        </Box>
      )}

      <Box
        sx={({ palette }) => ({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          "&:hover .MuiIconButton-root": {
            backgroundColor: palette.action.selected,
          },
        })}
      >
        <Tooltip followCursor placement="bottom" text={tooltip}>
          <Typography
            noWrap
            style={{ lineHeight: 1.2 }}
            variant="h2"
            {...titleProps}
          >
            {title}
          </Typography>
        </Tooltip>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: dense ? 1 : 2,
            "& > .MuiIconButton-root": {
              minWidth: 32,
              minHeight: 32,
            },
          }}
        >
          {helperText ? (
            isValidElement(helperText) ? (
              helperText
            ) : (
              <Typography variant="body2">{helperText}</Typography>
            )
          ) : null}

          {shownActions.map((actionProps, ind) => (
            <SectionTitleAction
              key={`${actionProps?.label}-${ind}`}
              {...actionProps}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
