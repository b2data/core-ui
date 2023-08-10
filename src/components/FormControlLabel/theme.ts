import { ComponentThemeOverride } from "src/types";

const formControlLabelTheme: ComponentThemeOverride["MuiFormControlLabel"] = {
  styleOverrides: {
    asterisk: ({ theme }) => ({
      color: theme.palette.error.main
    })
  },
  defaultProps: {}
};

export default formControlLabelTheme;
