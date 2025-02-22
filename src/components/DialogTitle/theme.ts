import { ComponentThemeOverride } from "../types";

const dialogTitleTheme: ComponentThemeOverride["MuiDialogTitle"] = {
  styleOverrides: {
    root: ({ theme: { typography } }) => ({
      padding: 20,
      ...typography.h4,
    }),
  },
  defaultProps: {},
};

export default dialogTitleTheme;
