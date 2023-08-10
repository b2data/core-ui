import { ComponentThemeOverride } from "src/types";

const popperTheme: ComponentThemeOverride["MuiPopper"] = {
  defaultProps: {
    placement: "bottom"
  }
};

export default popperTheme;
