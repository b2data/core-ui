import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import React, { isValidElement } from "react";

import { OverrideMuiProps } from "../types";
import { ListSubheader } from "../ListSubheader";

export interface ListProps
  extends OverrideMuiProps<
    MuiListProps,
    "children" | "sx" | "disablePadding" | "subheader" | "component" | "ref",
    HTMLUListElement
  > {}

export const List: React.FC<ListProps> = React.forwardRef(
  ({ subheader, ...props }, ref) => (
    <MuiList
      ref={ref}
      {...props}
      subheader={
        subheader ? (
          isValidElement(subheader) ? (
            subheader
          ) : (
            <ListSubheader>{subheader}</ListSubheader>
          )
        ) : undefined
      }
    />
  ),
);
