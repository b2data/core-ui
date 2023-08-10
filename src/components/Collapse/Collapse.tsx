import {
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

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

export const Collapse: FC<CollapseProps> = (props) => (
  <MuiCollapse {...props} />
);
