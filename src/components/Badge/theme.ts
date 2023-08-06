import { ComponentsOverrides, ComponentsProps } from "@mui/material";
import { Theme } from "@mui/system";
import { BadgeProps } from "./Badge";

export default {
  styleOverrides: {
    root: {
      justifyContent: "start",
    },
    badge: ({ ownerState: { showLive }, theme }) => ({
      ...((showLive as BadgeProps["showLive"])
        ? {
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
          }
        : {}),
    }),
    standard: {
      fontSize: 10,
      height: 16,
    },
  } as ComponentsOverrides<Theme>["MuiBadge"],
  defaultProps: {
    color: "primary",
  } as ComponentsProps["MuiBadge"],
};
