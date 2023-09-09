import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@mui/material";
import { FC } from "react";

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

export const Menu: FC<MenuProps> = (props) => <MuiMenu {...props} />;
