import { ComponentThemeOverride } from "../types";

const menuItemTheme: ComponentThemeOverride["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      gap: 8,
      minWidth: 100,
      padding: "6px 10px",
      "& .MuiSvgIcon-root": {
        fontSize: 18
      }
    }
  },
  defaultProps: {
    dense: true
  }
};

export default menuItemTheme;
