import { ComponentThemeOverride } from "../types";

const formHelperTextTheme: ComponentThemeOverride["MuiFormHelperText"] = {
  styleOverrides: {
    contained: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  defaultProps: {},
};

export default formHelperTextTheme;
