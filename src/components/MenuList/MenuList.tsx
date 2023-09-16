import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface MenuListProps
  extends OverrideMuiProps<
    MuiMenuListProps,
    "children" | "disablePadding" | "subheader" | "sx" | "ref" | "component",
    HTMLUListElement
  > {}

export const MenuList: React.FC<MenuListProps> = (props) => (
  <MuiMenuList dense {...props} />
);
