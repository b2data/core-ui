import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps
} from "@mui/material";
import React from "react";

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

export const Backdrop: React.FC<BackdropProps> = (props) => (
  <MuiBackdrop {...props} />
);
