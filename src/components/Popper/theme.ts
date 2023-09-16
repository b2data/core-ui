import { ComponentThemeOverride } from "../types";

const popperTheme: ComponentThemeOverride["MuiPopper"] = {
  defaultProps: {
    placement: "bottom",
  },
};

export default popperTheme;
