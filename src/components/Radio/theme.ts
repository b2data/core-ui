import { ComponentThemeOverride } from "../types";

const RadioTheme: ComponentThemeOverride["MuiRadio"] = {
  styleOverrides: {
    root: ({ ownerState: { size } }) => ({
      padding: size === "medium" ? 5 : 3,
      "& .MuiSvgIcon-root": {
        fontSize: size === "medium" ? 22 : 18,
      },
    }),
  },
  defaultProps: {
    color: "primary",
    size: "small",
  },
};

export default RadioTheme;
