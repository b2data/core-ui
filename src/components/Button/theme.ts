import { ComponentThemeOverride } from "../types";

const buttonTheme: ComponentThemeOverride["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState: { variant } }) => ({
      padding: variant === "outlined" ? "8px 15px" : "9px 16px"
    }),
    sizeSmall: ({ ownerState: { variant } }) => ({
      padding: variant === "outlined" ? "5px 9px" : "6px 10px",
      fontSize: 12
    }),
    sizeLarge: ({ ownerState: { variant } }) => ({
      padding: variant === "outlined" ? "9px 21px" : "10px 22px",
      fontSize: 16,
      "& .MuiSvgIcon-root": {
        fontSize: 24
      }
    }),
    iconSizeSmall: {
      ">*:nth-of-type(1)": {
        fontSize: 14,
        marginTop: -1,
        marginBottom: -1
      }
    },
    iconSizeMedium: {
      ">*:nth-of-type(1)": {
        fontSize: 18,
        marginTop: -2,
        marginBottom: -2
      }
    },
    iconSizeLarge: {
      ">*:nth-of-type(1)": {
        fontSize: 20,
        marginTop: -2,
        marginBottom: -2
      }
    },
    outlined: ({ ownerState: { color } }) => {
      if (color === "default") {
        return {
          borderColor: "rgba(0, 0, 0, 0.23)",
          color: "#000",
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.23)",
            backgroundColor: "rgba(0, 0, 0, 0.04)"
          }
        };
      }
      return undefined;
    }
  },

  defaultProps: {
    disableElevation: true,
    variant: "contained",
    color: "primary",
    size: "medium"
  }
};

export default buttonTheme;
