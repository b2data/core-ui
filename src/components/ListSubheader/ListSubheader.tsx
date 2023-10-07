import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface ListSubheaderProps
  extends OverrideMuiProps<
    MuiListSubheaderProps,
    "color" | "disableGutters" | "disableSticky" | "sx" | "component",
    HTMLLIElement
  > {
  /**
   * @default default
   */
  color?: MuiListSubheaderProps["color"];
}

export const ListSubheader = React.forwardRef(
  (props: ListSubheaderProps, ref: React.Ref<HTMLLIElement>) => (
    <MuiListSubheader ref={ref} {...props} />
  ),
);
