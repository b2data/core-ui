import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import React, { isValidElement } from "react";

import { OverrideMuiProps } from "../types";
import { ListSubheader } from "../ListSubheader";

export interface ListProps
  extends OverrideMuiProps<
    MuiListProps,
    "sx" | "disablePadding" | "subheader" | "component",
    HTMLUListElement
  > {}

export const List = React.forwardRef(
  ({ subheader, ...props }: ListProps, ref: React.Ref<HTMLUListElement>) => (
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
