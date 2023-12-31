import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";
import React from "react";

import { OverrideOnlyMuiProps } from "../types";

export interface TabsProps
  extends OverrideOnlyMuiProps<
    MuiTabsProps,
    | "allowScrollButtonsMobile"
    | "aria-label"
    | "aria-labelledby"
    | "centered"
    | "children"
    | "onChange"
    | "orientation"
    | "scrollButtons"
    | "value"
    | "variant"
    | "sx"
  > {
  /**
   * @default horizontal
   */
  orientation?: MuiTabsProps["orientation"];
  /**
   * @default standard
   */
  variant?: MuiTabsProps["variant"];
}

export const Tabs = React.forwardRef(
  (props: TabsProps, ref: React.Ref<any>) => <MuiTabs ref={ref} {...props} />,
);
