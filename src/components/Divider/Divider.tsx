import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface DividerProps
  extends OverrideMuiProps<
    MuiDividerProps,
    "component" | "absolute" | "flexItem" | "light" | "sx"
  > {
  /**
   * The component orientation.
   * @default horizontal
   */
  orientation?: MuiDividerProps["orientation"];
  /**
   * The text alignment.
   * @default center
   */
  textAlign?: MuiDividerProps["textAlign"];
  /**
   * The variant to use.
   * @default fullWidth
   */
  variant?: MuiDividerProps["variant"];
}

export const Divider: FC<DividerProps> = (props) => <MuiDivider {...props} />;
