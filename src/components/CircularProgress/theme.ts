import { ComponentThemeOverride } from "../types";

const circularProgressTheme: ComponentThemeOverride["MuiCircularProgress"] = {
  styleOverrides: {},
  defaultProps: {
    color: "primary",
    variant: "indeterminate",
  },
};

export default circularProgressTheme;
