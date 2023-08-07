import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface BadgeProps
  extends OverrideMuiProps<
    MuiBadgeProps,
    "badgeContent" | "invisible" | "max" | "showZero" | "children" | "sx"
  > {
  /**
   * The variant to use.
   * If `variant="liveDot"` then `badgeContnet=""`.
   * @default standard
   */
  variant?: MuiBadgeProps["variant"] | "liveDot";
  /**
   * The color of the component.
   * @default primary
   */
  color?: MuiBadgeProps["color"];
  /**
   * The anchor of the badge.
   * ```{ horizontal: 'left' | 'right', vertical: 'bottom' | 'top' }```
   * @default { vertical: 'top', horizontal: 'right' }
   */
  anchorOrigin?: MuiBadgeProps["anchorOrigin"];
  /**
   * @default rectangular
   */
  overlap?: MuiBadgeProps["overlap"];
}

export const Badge: FC<BadgeProps> = (props) => <MuiBadge {...props} />;