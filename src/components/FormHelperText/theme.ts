import { ComponentThemeOverride } from "src/types";

const FormHelperTextTheme: ComponentThemeOverride["MuiFormHelperText"] = {
  styleOverrides: {
    contained: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  defaultProps: {}
};

export default FormHelperTextTheme;
