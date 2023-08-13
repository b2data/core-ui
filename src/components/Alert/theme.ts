import { AlertColor, darken, lighten, Theme } from "@mui/material";

import { ComponentThemeOverride } from "src/types";

const getColor = (theme: Theme) =>
  theme.palette.mode === "light" ? lighten : darken;

const alertTheme: ComponentThemeOverride["MuiAlert"] = {
  styleOverrides: {
    root: ({ ownerState: { variant, severity }, theme }) => ({
      padding: 14,
      ...(variant === "standard" && severity
        ? {
            backgroundColor: getColor(theme)(
              theme.palette[severity as AlertColor]?.light,
              0.8
            )
          }
        : {}),
      ...(variant === "outlined" && severity
        ? {
            borderColor: getColor(theme)(
              theme.palette[severity as AlertColor]?.light,
              0.6
            )
          }
        : {})
    }),
    icon: ({ ownerState: { variant, severity }, theme }) => ({
      margin: "-14px 6px -14px -14px",
      padding: "10px 6px",
      width: 30,
      "& .MuiSvgIcon-root": {
        fontSize: 18
      },
      ...(variant === "outlined" && severity
        ? {
            backgroundColor: getColor(theme)(
              theme.palette[severity as AlertColor]?.light,
              0.6
            ),
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3
          }
        : {})
    }),
    message: {
      padding: 0,
      overflow: "inherit",
      width: "100%"
    }
  },
  defaultProps: {
    elevation: 0,
    variant: "standard",
    severity: "success"
  }
};

export default alertTheme;
