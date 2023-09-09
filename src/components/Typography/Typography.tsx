import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface TypographyProps
  extends OverrideMuiProps<
    MuiTypographyProps,
    "component" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "color"
  > {
  /**
   * @default body1
   */
  variant?: MuiTypographyProps["variant"];
  /**
   * @default inherit
   */
  align?: MuiTypographyProps["align"];
  /**
   * Number of lines after that `...` is shown
   */
  wrapLines?: number;
}

export const Typography: FC<TypographyProps> = (props) => (
  <MuiTypography {...props} />
);
