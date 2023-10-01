import {
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface CollapseProps
  extends OverrideMuiProps<
    MuiCollapseProps,
    | "children"
    | "collapsedSize"
    | "component"
    | "in"
    | "orientation"
    | "timeout"
    | "sx"
    | "ref"
  > {
  /**
   * @default 0px
   */
  collapsedSize?: MuiCollapseProps["collapsedSize"];
  /**
   * @default vertical
   */
  orientation?: MuiCollapseProps["orientation"];
  /**
   * @default auto
   */
  timeout?: MuiCollapseProps["timeout"];
}

export const Collapse: React.FC<CollapseProps> = React.forwardRef(
  (props, ref) => <MuiCollapse ref={ref} {...props} />,
);
