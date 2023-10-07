import {
  Box,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import React, { isValidElement, ReactElement } from "react";

import { OverrideMuiProps } from "../types";

export interface MenuItemProps
  extends OverrideMuiProps<
    MuiMenuItemProps,
    "children" | "disabled" | "selected" | "sx" | "disableGutters" | "divider",
    HTMLLIElement
  > {
  /**
   * Start addornment element
   */
  startAdornment?: ReactElement;
  /**
   * End addornment element
   */
  endAdornment?: ReactElement;
}

export const MenuItem = React.forwardRef(
  (
    { startAdornment, endAdornment, children, ...props }: MenuItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => (
    <MuiMenuItem ref={ref} dense {...props}>
      {isValidElement(startAdornment) && startAdornment}
      <Box flex={1}>{children}</Box>
      {isValidElement(endAdornment) && endAdornment}
    </MuiMenuItem>
  ),
);
