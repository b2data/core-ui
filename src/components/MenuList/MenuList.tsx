import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface MenuListProps
  extends OverrideMuiProps<
    MuiMenuListProps,
    "disablePadding" | "subheader" | "sx" | "component",
    HTMLUListElement
  > {}

export const MenuList = React.forwardRef(
  (props: MenuListProps, ref: React.Ref<HTMLUListElement>) => (
    <MuiMenuList ref={ref} dense {...props} />
  ),
);
