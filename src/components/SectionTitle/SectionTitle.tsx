import React, { isValidElement, useMemo } from "react";

import { Typography, TypographyProps } from "../Typography";
import { Tooltip } from "../Tooltip";
import { Box } from "../Box";
import {
  SectionTitleAction,
  SectionTitleActionProps,
} from "../SectionTitleAction";

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
}

export const SectionTitle: React.FC<SectionTitleProps> = React.forwardRef(
  (
    { title, titleProps, subtitle, tooltip, helperText, actions, withBorder },
    ref,
  ) => {
    const shownActions = useMemo(
      () => (actions || []).filter((a) => !a.hidden),
      [actions],
    );

    return (
      <Box
        ref={ref}
        sx={({ palette }) => ({
          ...(withBorder
            ? { borderBottom: `1px solid ${palette.divider}`, pb: 1 }
            : {}),
        })}
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
            display: "grid",
            alignItems: "center",
            columnGap: 20,
            gridTemplateColumns: "1fr max-content",
            "&:hover .MuiIconButton-root": {
              backgroundColor: palette.action.selected,
            },
            ...(subtitle ? { pt: 2 } : {}),
            ...(Boolean(helperText) && shownActions.length > 0
              ? { gridTemplateColumns: "1fr max-content max-content" }
              : {}),
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

          {helperText ? (
            isValidElement(helperText) ? (
              helperText
            ) : (
              <Typography variant="body2">{helperText}</Typography>
            )
          ) : null}

          {shownActions.length > 0 && (
            <Box
              sx={{
                display: "flex",
                "& > *": {
                  minWidth: 32,
                  minHeight: 32,
                  marginLeft: 10,
                },
              }}
            >
              {shownActions.map((actionProps, ind) => (
                <SectionTitleAction
                  key={`${actionProps?.label}-${ind}`}
                  {...actionProps}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    );
  },
);
