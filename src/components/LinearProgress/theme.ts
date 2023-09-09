import { ComponentThemeOverride } from "../types";

const linearProgressTheme: ComponentThemeOverride["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      width: "100%",
      borderRadius: 4
    }
  },
  defaultProps: {
    color: "primary",
    variant: "indeterminate"
  }
};

export default linearProgressTheme;
