import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface DrawerProps
  extends OverrideMuiProps<
    MuiDrawerProps,
    | "children"
    | "elevation"
    | "onClose"
    | "open"
    | "sx"
    | "component"
    | "ref"
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
  variant?: "temporary" | "persistent";
}

export const Drawer: React.FC<DrawerProps> = (props) => (
  <MuiDrawer {...props} />
);
