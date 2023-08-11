import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";
import { FC } from "react";

import { OverrideOnlyMuiProps } from "src/types";

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

export const Tabs: FC<TabsProps> = (props) => <MuiTabs {...props} />;
