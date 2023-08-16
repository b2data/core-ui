import {
  Box,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from "@mui/material";
import { FC, isValidElement, ReactElement } from "react";

import { OverrideMuiProps } from "src/types";

export interface MenuItemProps
  extends OverrideMuiProps<
    MuiMenuItemProps,
    "children" | "disabled" | "selected" | "sx" | "ref" | "disableGutters",
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

export const MenuItem: FC<MenuItemProps> = ({
  startAdornment,
  endAdornment,
  children,
  ...props
}) => (
  <MuiMenuItem dense {...props}>
    {isValidElement(startAdornment) && startAdornment}
    <Box flex={1}>{children}</Box>
    {isValidElement(endAdornment) && endAdornment}
  </MuiMenuItem>
);
