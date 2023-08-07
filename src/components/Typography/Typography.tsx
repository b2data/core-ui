import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  styled
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface TypographyProps
  extends OverrideMuiProps<
    MuiTypographyProps,
    | "children"
    | "component"
    | "gutterBottom"
    | "noWrap"
    | "paragraph"
    | "sx"
    | "color"
    | "ref"
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

export const Typography: FC<TypographyProps> = styled(
  MuiTypography
)<TypographyProps>(({ wrapLines }) => ({
  ...(wrapLines && wrapLines > 0
    ? {
        display: "-webkit-box",
        "-webkit-line-clamp": `${wrapLines}`,
        "-webkit-box-orient": "vertical",

        whiteSpace: "normal"
      }
    : {})
}));
