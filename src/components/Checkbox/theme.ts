import { ComponentThemeOverride } from "src/types";

const checkboxTheme: ComponentThemeOverride["MuiCheckbox"] = {
  styleOverrides: {
    root: ({ ownerState: { size } }) => ({
      padding: size === "medium" ? 7 : 3,
      "& .MuiSvgIcon-root": {
        fontSize: size === "medium" ? 22 : 18
      }
    })
  },
  defaultProps: {
    size: "small"
  }
};

export default checkboxTheme;
