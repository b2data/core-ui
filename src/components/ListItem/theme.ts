import { ComponentThemeOverride } from "src/types";

const listItemTheme: ComponentThemeOverride["MuiListItem"] = {
  styleOverrides: {
    root: ({ ownerState: { disablePadding, disableGutters } }) => ({
      minHeight: 36,
      paddingTop: disablePadding ? undefined : 6,
      paddingBottom: disablePadding ? undefined : 6,
      paddingLeft: disablePadding || disableGutters ? undefined : 10,
      paddingRight: disablePadding || disableGutters ? undefined : 10,
      "& .MuiListItemText-root": {
        margin: 0
      }
    })
  },
  defaultProps: {
    dense: true
  }
};

export default listItemTheme;
