import { ComponentThemeOverride } from "src/types";

const LinearProgressTheme: ComponentThemeOverride["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      width: "100%",
      borderRadius: 4
    }
  },
  defaultProps: {}
};

export default LinearProgressTheme;
