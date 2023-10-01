import { ComponentThemeOverride } from "../types";

const textFieldTheme: ComponentThemeOverride["MuiTextField"] = {
  styleOverrides: {
    root: ({
      ownerState: { variant, multiline, margin },
      theme: { palette },
    }) => {
      const commonStyles = {
        marginTop: margin === "normal" ? 8 : 0,
        marginBottom: margin === "normal" ? 16 : 0,
        "& .MuiFormLabel-root": {
          color: "#6B778C",
          fontSize: 14,
          "&.Mui-focused": {
            color: palette.primary.main,
          },
          "&.Mui-error": {
            color: palette.error.main,
          },
          "&.Mui-disabled": {
            color: "#b8bec8",
          },
        },
        "& .MuiInputBase-root": {
          height: multiline ? undefined : 40,
          alignItems: "flex-end",
          fontSize: 14,
          "&.Mui-disabled": {
            color: "#b8bec8",
          },
        },
        "& .MuiInputBase-input": {
          height: "unset",
          "&.Mui-disabled": {
            WebkitTextFillColor: "unset",
          },
        },
        "& .MuiFormLabel-asterisk": {
          color: palette.error.main,
        },
        "& .MuiSvgIcon-root": {
          fontSize: 20,
        },
      };

      if (variant === "outlined") {
        return {
          ...commonStyles,
          "& .MuiInputBase-input": {
            ...commonStyles["& .MuiInputBase-input"],
            padding: "10px 12px",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#fafbfc",
            padding: 0,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DFE1E6",
            },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e7e8ec",
            },
            "&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
              borderColor: "#97A0AF",
              borderWidth: 2,
            },
            "&:hover.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.primary.main,
              borderWidth: 2,
            },
            "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.error.main,
              borderWidth: 2,
            },
          },
          "& .MuiInputAdornment-root": {
            height: "100%",
            maxHeight: "auto",
            margin: 0,
            "&.MuiInputAdornment-positionStart": {
              paddingLeft: 12,
            },
            "&.MuiInputAdornment-positionEnd": {
              paddingRight: 12,
            },
          },
        };
      }
      return {
        ...commonStyles,
        "& .MuiFormLabel-root": {
          ...commonStyles["& .MuiFormLabel-root"],
          marginTop: -6,
          "&.MuiInputLabel-shrink": {
            marginTop: 0,
          },
        },
        "& .MuiInputBase-root": {
          ...commonStyles["& .MuiInputBase-root"],
          margin: 0,
          padding: 0,
          "&:before": {
            borderBottomColor: "#DFE1E6",
          },
          "&.Mui-disabled:before": {
            borderBottomColor: "#e7e8ec",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#97A0AF",
            borderWidth: 2,
          },
          "&:hover.Mui-error:before": {
            borderColor: palette.error.main,
            borderWidth: 2,
          },
        },
        "& .MuiInputBase-input": {
          ...commonStyles["& .MuiInputBase-input"],
          padding: "10px 0 6px",
        },
      };
    },
  },
  defaultProps: {
    size: "small",
    variant: "standard",
    fullWidth: true,
  },
};

export default textFieldTheme;
