import { ComponentThemeOverride } from "../types";

const formControlLabelTheme: ComponentThemeOverride["MuiFormControlLabel"] = {
  styleOverrides: {
    asterisk: ({ theme }) => ({
      color: theme.palette.error.main
    })
  },
  defaultProps: {}
};

export default formControlLabelTheme;
