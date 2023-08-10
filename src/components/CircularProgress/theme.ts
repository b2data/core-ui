import { ComponentThemeOverride } from "src/types";

const circularProgressTheme: ComponentThemeOverride["MuiCircularProgress"] = {
  styleOverrides: {},
  defaultProps: {
    color: "primary",
    variant: "indeterminate"
  }
};

export default circularProgressTheme;
