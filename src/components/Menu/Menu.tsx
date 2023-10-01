import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface MenuProps
  extends OverrideMuiProps<
    MuiMenuProps,
    | "anchorEl"
    | "children"
    | "onClose"
    | "open"
    | "sx"
    | "ref"
    | "component"
    | "transformOrigin"
    | "disablePortal"
    | "keepMounted"
    | "anchorOrigin"
    | "anchorPosition"
    | "anchorReference"
    | "disableScrollLock"
    | "disableEscapeKeyDown"
    | "hideBackdrop"
  > {}

export const Menu: React.FC<MenuProps> = React.forwardRef((props, ref) => (
  <MuiMenu ref={ref} {...props} />
));
