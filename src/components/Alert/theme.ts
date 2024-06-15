import { AlertColor, darken, lighten, Theme } from "@mui/material";

import { ComponentThemeOverride } from "../types";

const getColor = (theme: Theme) =>
  theme.palette.mode === "light" ? lighten : darken;

const alertTheme: ComponentThemeOverride["MuiAlert"] = {
  styleOverrides: {
    root: ({ ownerState: { variant, severity, color }, theme }) => {
      const styles = {
        padding: 14,
        border: "1px solid",
        backgroundColor: theme.palette.common.white,
      };
      if (color) {
        return {
          ...styles,
          borderColor: theme.palette.grey[500],
          color: theme.palette.text.primary,
        };
      }
      if (variant === "standard") {
        return {
          ...styles,
          backgroundColor: getColor(theme)(
            theme.palette[severity as AlertColor]?.light,
            0.8,
          ),
          borderColor: getColor(theme)(
            theme.palette[severity as AlertColor]?.light,
            0.8,
          ),
        };
      }
      if (variant === "outlined") {
        return {
          ...styles,
          borderColor: theme.palette[severity as AlertColor]?.main,
        };
      }

      return undefined;
    },
    icon: ({ ownerState: { variant, severity, color }, theme }) => {
      const styles = {
        margin: "-14px 0 -14px -14px",
        padding: "10px 6px",
        width: 30,
      };

      if (color) {
        return {
          ...styles,
          "& .MuiSvgIcon-root": {
            fontSize: 18,
            color: theme.palette.text.primary,
          },
        };
      }

      if (variant === "outlined") {
        return {
          ...styles,
          mr: 2,
          "& .MuiSvgIcon-root": {
            fontSize: 18,
            color: theme.palette.background.default,
          },
          backgroundColor: theme.palette[severity as AlertColor]?.main,
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
        };
      }

      return styles;
    },

    message: {
      padding: 0,
      overflow: "inherit",
      width: "100%",
    },
  },
  defaultProps: {
    elevation: 0,
    variant: "standard",
    severity: "success",
  },
};

export default alertTheme;
