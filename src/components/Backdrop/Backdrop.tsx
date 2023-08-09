import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

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

export const Backdrop: FC<BackdropProps> = (props) => (
  <MuiBackdrop {...props} />
);
