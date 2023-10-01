import { ComponentThemeOverride } from "../types";

const autocompleteTheme: ComponentThemeOverride["MuiAutocomplete"] = {
  styleOverrides: {
    root: {
      "& .MuiInput-input": {
        padding: "5px 5px 5px 0 !important",
      },
    },
    clearIndicator: {
      padding: 2,
      "& .MuiSvgIcon-root": {
        fontSize: 20,
      },
    },
    endAdornment: {
      top: "auto",
      bottom: 4,
    },
    listbox: {
      padding: "4px 0",
      "& .MuiAutocomplete-option": {
        padding: 0,
        minHeight: "auto",
      },
    },
    groupUl: {
      "& .MuiAutocomplete-option": {
        padding: 0,
        "& .MuiListItemButton-root": {
          paddingLeft: 24,
        },
      },
    },
    groupLabel: {
      fontSize: 14,
    },
    loading: ({ theme: { typography } }) => ({
      padding: 10,
      ...typography.body2,
    }),
    noOptions: ({ theme: { typography } }) => ({
      padding: 10,
      ...typography.body2,
    }),
    tag: {
      margin: "5px 2px",
      height: 20,
      "&:first-child": {
        marginLeft: 0,
      },
      "& .MuiChip-label": {
        fontSize: 12,
      },
    },
  },
  defaultProps: {
    size: "small",
    fullWidth: true,
  },
};

export default autocompleteTheme;
