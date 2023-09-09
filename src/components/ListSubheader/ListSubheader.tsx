import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface ListSubheaderProps
  extends OverrideMuiProps<
    MuiListSubheaderProps,
    | "children"
    | "color"
    | "disableGutters"
    | "disableSticky"
    | "sx"
    | "component",
    HTMLLIElement
  > {
  /**
   * @default default
   */
  color?: MuiListSubheaderProps["color"];
}

export const ListSubheader: FC<ListSubheaderProps> = (props) => (
  <MuiListSubheader {...props} />
);
