import { ComponentThemeOverride } from "../types";

const menuItemTheme: ComponentThemeOverride["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      gap: 8,
      minWidth: 100,
      maxWidth: 300,
      padding: "6px 10px",
      "& .MuiListItemIcon-root": {
        minWidth: 24
      },
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
  },
  defaultProps: {
    dense: true,
  },
};

export default menuItemTheme;
