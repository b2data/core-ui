import { ComponentThemeOverride } from "../types";

const autocompleteTheme: ComponentThemeOverride["MuiAutocomplete"] = {
  styleOverrides: {
    root: {
      "& .MuiInput-input": {
        padding: "5px 5px 5px 0 !important",
      },
      "& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
        bottom: 8,
      },
      "& .MuiInputBase-root": {
        minHeight: 40,
        height: "auto !important",
        alignItems: "center !important",
      },
      "& .MuiAutocomplete-input": {
        padding: "5px 4px 5px 8px !important",
      },
    },
    clearIndicator: {
      padding: 2,
      "& .MuiSvgIcon-root": {
        fontSize: "20px !important",
      },
    },
    endAdornment: {
      top: "calc(50% - 12px) !important",
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
      "&:first-of-type": {
        marginLeft: 0,
      },
      "& .MuiChip-label": {
        fontSize: 12,
      },
      "& .MuiChip-avatar": {
        width: 16,
        height: 16,
        marginLeft: 3,
        "& .MuiSvgIcon-root": {
          fontSize: "16px !important",
        },
      },
      "& .MuiChip-deleteIcon": {
        margin: "0 1px 0",
        fontSize: "18px",
      },
    },
  },
  defaultProps: {
    size: "small",
    fullWidth: true,
  },
};

export default autocompleteTheme;
