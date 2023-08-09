import { ComponentThemeOverride } from "src/types";

const SwitchTheme: ComponentThemeOverride["MuiSwitch"] = {
  styleOverrides: {
    root: ({ ownerState: { size } }) => ({
      padding: 0,
      borderRadius: 50,
      height: size === "medium" ? 32 : 24,
      marginRight: 8
    }),
    switchBase: ({ ownerState: { size, color }, theme }) => {
      const currentColor = color && color !== "default" ? color : "primary";
      return {
        padding: 4,
        "&.Mui-checked": {
          transform: `translateX(${size === "medium" ? 26 : 16}px)`
        },
        "&.Mui-checked+.MuiSwitch-track": {
          backgroundColor: theme.palette[currentColor].main,
          borderColor: theme.palette[currentColor].main,
          opacity: 1
        },
        "&.Mui-disabled.Mui-checked+.MuiSwitch-track": {
          opacity: 0.25
        },
        "&.Mui-disabled:not(.Mui-checked)+.MuiSwitch-track": {
          backgroundColor: theme.palette.grey[800],
          borderColor: theme.palette.grey[800],
          opacity: 0.12
        },
        "&.Mui-checked .MuiSwitch-thumb": {
          backgroundColor: theme.palette.background.paper
        },
        "&.Mui-disabled:not(.Mui-checked) .MuiSwitch-thumb": {
          backgroundColor: theme.palette.background.paper
        }
      };
    },
    thumb: {
      width: 24,
      height: 24,
      boxShadow: "none",
      backgroundColor: "#c1c7d0"
    },
    track: ({ theme }) => ({
      border: "1px solid",
      borderColor: "#c1c7d0",
      opacity: 1,
      borderRadius: 50,
      backgroundColor: theme.palette.background.paper
    })
  },
  defaultProps: {
    size: "small"
  }
};

export default SwitchTheme;
