import { ComponentThemeOverride } from "../types";

const buttonTheme: ComponentThemeOverride["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState: { variant, size }, theme: { typography } }) => ({
      padding:
        !size || size === "medium"
          ? variant === "outlined"
            ? "8px 15px"
            : "9px 16px"
          : undefined,
      ...typography.button,
    }),
    sizeSmall: ({ ownerState: { variant, size } }) => ({
      padding:
        size == "small"
          ? variant === "outlined"
            ? "5px 9px"
            : "6px 10px"
          : undefined,
      fontSize: 12,
    }),
    sizeLarge: ({ ownerState: { variant, size } }) => ({
      padding:
        size == "large"
          ? variant === "outlined"
            ? "9px 21px"
            : "10px 22px"
          : undefined,
      minHeight: 40,
      "& .MuiSvgIcon-root": {
        fontSize: 24,
      },
    }),
    iconSizeSmall: {
      ">*:nth-of-type(1)": {
        fontSize: 16,
        marginTop: -1,
        marginBottom: -1,
      },
    },
    iconSizeMedium: {
      ">*:nth-of-type(1)": {
        fontSize: 20,
        marginTop: -2,
        marginBottom: -2,
      },
    },
    iconSizeLarge: {
      ">*:nth-of-type(1)": {
        fontSize: 24,
        marginTop: -2,
        marginBottom: -2,
      },
    },
    outlined: ({ ownerState: { color } }) => {
      if (color === "default") {
        return {
          borderColor: "rgba(0, 0, 0, 0.23)",
          color: "#000",
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.23)",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        };
      }
      return undefined;
    },
  },

  defaultProps: {
    disableElevation: true,
    variant: "contained",
    color: "primary",
    size: "medium",
  },
};

export default buttonTheme;
