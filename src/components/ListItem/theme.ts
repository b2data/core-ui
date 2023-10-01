import { ComponentThemeOverride } from "../types";

const listItemTheme: ComponentThemeOverride["MuiListItem"] = {
  styleOverrides: {
    root: ({ ownerState: { disablePadding, disableGutters } }) => ({
      minHeight: 36,
      paddingTop: disablePadding ? undefined : 6,
      paddingBottom: disablePadding ? undefined : 6,
      paddingLeft: disablePadding || disableGutters ? undefined : 10,
      paddingRight: disablePadding || disableGutters ? undefined : 10,
      transition: "opacity 0.1s easy-in-out",
      "& .MuiListItemText-root": {
        margin: 0,
      },
      "& .MenuActions": {
        opacity: 0,
      },
      "&:hover .MenuActions": {
        opacity: 1,
      },
    }),
  },
  defaultProps: {
    dense: true,
  },
};

export default listItemTheme;
