import { ComponentThemeOverride } from "src/types";

const listSubheaderTheme: ComponentThemeOverride["MuiListSubheader"] = {
  styleOverrides: {
    root: ({ ownerState: { disableGutters } }) => ({
      padding: disableGutters ? undefined : "0 10px",
      lineHeight: "36px"
    })
  },
  defaultProps: {
    color: "default"
  }
};

export default listSubheaderTheme;
