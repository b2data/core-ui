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
          minHeight: 40,
          alignItems: "flex-end",
          fontSize: 14,
          "&.Mui-disabled": {
            color: "#b8bec8",
          },
        },
        "& .MuiInputBase-input": {
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
        "& .MuiInputAdornment-root": {
          height: "100%",
          maxHeight: "none",
          alignSelf: "center",
          "&.MuiInputAdornment-positionStart > .MuiIconButton-root": {
            marginLeft: 0,
          },
          "&.MuiInputAdornment-positionEnd > .MuiIconButton-root": {
            marginRight: 0,
          },
        },
      };

      if (variant === "outlined") {
        return {
          ...commonStyles,
          "& .MuiFormLabel-root": {
            ...commonStyles["& .MuiFormLabel-root"],
            transform: "translate(14px, 12px) scale(1)",
            "&.Mui-focused, &.MuiFormLabel-filled": {
              transform: "translate(14px, -2px) scale(0.75)",
            },
          },
          "& .MuiInputBase-input": {
            ...commonStyles["& .MuiInputBase-input"],
            padding: "7.5px 12px",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#fafbfc",
            marginTop: "5px",
            height: 35,
            minHeight: 35,
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
            "& .MuiInputAdornment-root": {
              margin: 0,
              "&.MuiInputAdornment-positionStart": {
                paddingLeft: 12,
              },
              "&.MuiInputAdornment-positionEnd": {
                paddingRight: 12,
              },
            },
          },
        };
      }
      return {
        ...commonStyles,
        "& .MuiFormLabel-root": {
          ...commonStyles["& .MuiFormLabel-root"],
        },
        "& .MuiInputBase-root": {
          ...commonStyles["& .MuiInputBase-root"],
          margin: 0,
          padding: "12px 0 0",
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
          padding: "4px 0px",
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
