import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface MenuListProps
  extends OverrideMuiProps<
    MuiMenuListProps,
    "children" | "disablePadding" | "subheader" | "sx" | "ref" | "component",
    HTMLUListElement
  > {}

export const MenuList: FC<MenuListProps> = (props) => (
  <MuiMenuList dense {...props} />
);
