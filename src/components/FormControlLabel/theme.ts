import { ComponentThemeOverride } from "../types";

const formControlLabelTheme: ComponentThemeOverride["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    asterisk: ({ theme }) => ({
      color: theme.palette.error.main,
    }),
  },
  defaultProps: {},
};

export default formControlLabelTheme;
