import { ComponentThemeOverride } from "../types";

const autocompleteTheme: ComponentThemeOverride["MuiAutocomplete"] = {
  styleOverrides: {
    root: {
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px !important",
      },
      "& .MuiOutlinedInput-input": {
        padding: "4px 4px 4px 8px !important",
      },
      "& .MuiInput-root": {
        paddingTop: "10px !important",
        paddingBottom: "2px !important",
      },
      "& .MuiOutlinedInput-root": {
        paddingTop: "3.5px !important",
        paddingLeft: "6px !important",
        paddingBottom: "3.5px !important",
        "& .MuiInputAdornment-root": {
          paddingLeft: "0 !important",
        },
      },
      "& .MuiInput-root .MuiAutocomplete-endAdornment": {
        top: `calc(50% + 2.5px)`,
      },
      "&:not(.MuiAutocomplete-hasClearIcon) .MuiFormLabel-root:not(.MuiFormLabel-filled):not(.Mui-focused) + div > fieldset > legend > span":
        {
          display: "none",
        },
      "&.MuiAutocomplete-hasClearIcon .MuiInputLabel-outlined": {
        transform: "translate(14px, -2px) scale(0.75)",
      },
      "& .MuiInputBase-root": {
        paddingTop: "8px",
        height: "auto !important",
        alignItems: "flex-end !important",
      },
    },
    clearIndicator: {
      padding: 2,
      "& .MuiSvgIcon-root": {
        fontSize: "20px !important",
      },
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
      margin: "4px 2px",
      height: 20,
      maxWidth: "100%",
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
