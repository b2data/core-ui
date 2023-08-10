import { ComponentThemeOverride } from "src/types";

const buttonGroupTheme: ComponentThemeOverride["MuiButtonGroup"] = {
  defaultProps: {
    disableElevation: true,
    orientation: "horizontal",
    color: "primary",
    variant: "outlined",
    size: "medium"
  }
};

export default buttonGroupTheme;
