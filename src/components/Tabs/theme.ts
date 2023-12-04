import { ComponentThemeOverride } from "../types";

const tabsTheme: ComponentThemeOverride["MuiTabs"] = {
  styleOverrides: {
    root: {
      minHeight: 40,
      "& > .MuiTabScrollButton-root": {
        width: 20,
      },
    },
  },
  defaultProps: {
    indicatorColor: "primary",
    orientation: "horizontal",
    textColor: "primary",
    variant: "standard",
  },
};

export default tabsTheme;
