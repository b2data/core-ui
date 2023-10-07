import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface DrawerProps
  extends OverrideMuiProps<
    MuiDrawerProps,
    | "elevation"
    | "onClose"
    | "open"
    | "sx"
    | "component"
    | "container"
    | "disableEscapeKeyDown"
    | "disablePortal"
    | "disableScrollLock"
    | "hideBackdrop"
    | "keepMounted"
  > {
  /**
   * Side from which the drawer will appear.
   * @default left
   */
  anchor?: MuiDrawerProps["anchor"];
  /**
   * The variant to use.
   * @default temporary
   */
  variant?: Exclude<MuiDrawerProps["variant"], "permamend">;
}

export const Drawer = React.forwardRef(
  (props: DrawerProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiDrawer ref={ref} {...props} />
  ),
);
