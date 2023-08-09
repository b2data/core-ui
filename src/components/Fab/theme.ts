import { ComponentThemeOverride } from "src/types";

export const FAB_SIZES = {
  small: 32,
  medium: 40,
  large: 48
} as const;

const FabTheme: ComponentThemeOverride["MuiFab"] = {
  styleOverrides: {
    root: ({ ownerState: { variant, size }, theme }) => ({
      width: variant === "extended" ? "auto" : FAB_SIZES[size || "medium"],
      minWidth: FAB_SIZES[size || "medium"],
      height: FAB_SIZES[size || "medium"],
      minHeight: FAB_SIZES[size || "medium"],
      boxShadow: theme.shadows[3],
      ":active": {
        boxShadow: theme.shadows[5]
      },
      "& .MuiSvgIcon-root": {
        fontSize: 28
      }
    }),
    sizeSmall: {
      "& .MuiSvgIcon-root": {
        fontSize: 18
      }
    },
    sizeMedium: {
      "& .MuiSvgIcon-root": {
        fontSize: 24
      }
    }
  },
  defaultProps: {
    size: "medium"
  }
};

export default FabTheme;
