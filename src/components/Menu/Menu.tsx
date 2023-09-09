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
    | "disableScrollLock"
    | "disableEscapeKeyDown"
    | "hideBackdrop"
  > {}

export const Menu: React.FC<MenuProps> = (props) => <MuiMenu {...props} />;
