import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface TabProps
  extends OverrideMuiProps<
    MuiTabProps,
    | "icon"
    | "iconPosition"
    | "label"
    | "value"
    | "wrapped"
    | "LinkComponent"
    | "sx"
    | "component"
    | "children"
  > {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiTabProps["disabled"];
  /**
   * @default top
   */
  iconPosition?: MuiTabProps["iconPosition"];
}

export const Tab = React.forwardRef((props: TabProps, ref: React.Ref<any>) => (
  <MuiTab ref={ref} {...props} />
));
