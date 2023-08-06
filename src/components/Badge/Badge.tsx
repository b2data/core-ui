import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material";

export interface BadgeProps
  extends Omit<
    MuiBadgeProps,
    | "className"
    | "classes"
    | "style"
    | "componentsProps"
    | "components"
    | "slotProps"
    | "slots"
  > {
  /**
   * @default standard
   */
  variant?: MuiBadgeProps["variant"];
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

export const Badge = (props: BadgeProps) => <MuiBadge {...props} />;
