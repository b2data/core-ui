import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface BadgeProps
  extends OverrideMuiProps<
    MuiBadgeProps,
    "badgeContent" | "invisible" | "max" | "showZero" | "sx" | "ref"
  > {
  /**
   * The variant to use.
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
   * Wrapped shape the badge should overlap.
   * @default rectangular
   */
  overlap?: MuiBadgeProps["overlap"];
}

export const Badge: React.FC<BadgeProps> = React.forwardRef(
  ({ variant, badgeContent, ...props }, ref) => (
    <MuiBadge
      ref={ref}
      {...props}
      variant={variant}
      badgeContent={badgeContent ?? (variant === "liveDot" ? "" : null)}
    />
  ),
);
