import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface MenuProps
  extends OverrideMuiProps<
    MuiMenuProps,
    | "anchorEl"
    | "onClose"
    | "open"
    | "sx"
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

export const Menu = React.forwardRef(
  (props: MenuProps, ref: React.Ref<HTMLDivElement>) => (
    <MuiMenu ref={ref} {...props} />
  ),
);
