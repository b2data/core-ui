import { ComponentThemeOverride } from "../types";

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    liveDot: true;
  }
}

const badgeTheme: ComponentThemeOverride["MuiBadge"] = {
  styleOverrides: {
    badge: ({ ownerState: { variant }, theme }) => {
      if (variant === "liveDot") {
        return {
          fontSize: 0,
          overflow: "visible",
          height: 8,
          minWidth: 8,
          padding: 0,
          backgroundColor: "#44b700",
          color: "#44b700",
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
          },
          "@keyframes ripple": {
            "0%": {
              transform: "scale(.8)",
              opacity: 1,
            },
            "100%": {
              transform: "scale(2.4)",
              opacity: 0,
            },
          },
        };
      }

      return undefined;
    },
    root: {
      justifyContent: "start",
    },
    standard: {
      fontSize: 10,
      height: 16,
    },
  },

  defaultProps: {
    color: "primary",
    variant: "standard",
    overlap: "rectangular",
    anchorOrigin: { vertical: "top", horizontal: "right" },
  },
};

export default badgeTheme;
