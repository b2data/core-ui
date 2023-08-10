import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface DrawerProps 
  extends OverrideMuiProps<
    MuiDrawerProps,
    | "children"
    | "elevation"
    | "onClose"
    | "open"
    | "sx"
    |"component"
    |"ref"
    |"container"
    |"disableEscapeKeyDown"
    |"disablePortal"
    |"disableScrollLock"
    |"hideBackdrop"
    |"keepMounted"
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

export const Drawer: FC<DrawerProps> = (props) => (
  <MuiDrawer {...props} />
);
