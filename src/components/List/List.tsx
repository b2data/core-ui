import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import React, { isValidElement } from "react";

import { OverrideMuiProps } from "../types";
import { ListSubheader } from "../ListSubheader";

export interface ListProps
  extends OverrideMuiProps<
    MuiListProps,
    "children" | "sx" | "disablePadding" | "subheader" | "component",
    HTMLUListElement
  > {}

export const List: React.FC<ListProps> = ({ subheader, ...props }) => (
  <MuiList
    {...props}
    subheader={
      isValidElement(subheader) ? (
        subheader
      ) : (
        <ListSubheader>{subheader}</ListSubheader>
      )
    }
  />
);
