import {
  SnackbarProvider as CoreSnackbarProvider,
  SnackbarProviderProps as CoreSnackbarProviderProps,
} from "notistack";

export { useSnackbar } from "notistack";

import { SnackbarMessage } from "./SnackbarMessage";

declare module "notistack" {
  interface VariantOverrides {}
}

export interface SnackbarProviderProps
  extends Pick<
    CoreSnackbarProviderProps,
    "children" | "maxSnack" | "anchorOrigin" | "autoHideDuration" | "dense"
  > {}

export const SnackbarProvider = ({
  children,
  maxSnack = 5,
  anchorOrigin = { horizontal: "left", vertical: "bottom" },
  autoHideDuration = 10000,
  dense,
}: SnackbarProviderProps) => (
  <CoreSnackbarProvider
    maxSnack={maxSnack}
    anchorOrigin={anchorOrigin}
    autoHideDuration={autoHideDuration}
    dense={dense}
    Components={{
      default: SnackbarMessage,
      error: SnackbarMessage,
      warning: SnackbarMessage,
      success: SnackbarMessage,
      info: SnackbarMessage,
    }}
  >
    {children}
  </CoreSnackbarProvider>
);
