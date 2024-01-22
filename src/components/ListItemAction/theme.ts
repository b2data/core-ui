import { ComponentThemeOverride } from "../types";

const listItemSecondaryActionTheme: ComponentThemeOverride["MuiListItemSecondaryAction"] =
  {
    styleOverrides: {
      root: {
        display: "flex",
        alignItems: "center",
      },
    },
  };

export default listItemSecondaryActionTheme;
