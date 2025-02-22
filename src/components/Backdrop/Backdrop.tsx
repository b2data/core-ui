import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
} from "@mui/material";

import { OverrideMuiProps } from "../types";

export interface BackdropProps
  extends OverrideMuiProps<
    MuiBackdropProps,
    "children" | "open" | "component" | "invisible" | "sx"
  > {
  /**
   * Variant of backdrop
   * @default light
   */
  variant?: "dark" | "light";
}

export const Backdrop = (props: BackdropProps) => <MuiBackdrop {...props} />;
