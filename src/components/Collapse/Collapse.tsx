import {
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps,
} from "@mui/material";

import { OverrideMuiProps } from "../types";

export interface CollapseProps
  extends OverrideMuiProps<
    MuiCollapseProps,
    "collapsedSize" | "component" | "in" | "orientation" | "timeout" | "sx"
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

export const Collapse = (props: CollapseProps) => <MuiCollapse {...props} />;
