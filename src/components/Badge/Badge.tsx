import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material";

export interface BadgeProps
  extends Pick<
    MuiBadgeProps,
    | "badgeContent"
    | "invisible"
    | "max"
    | "showZero"
    | "variant"
    | "color"
    | "children"
    | "sx"
  > {
  /**
   * Show live badge for component. Required `variant` as `dot`.
   * @default false
   */
  showLive?: boolean;
  /**
   * @default standart
   */
  variant?: MuiBadgeProps["variant"];
  /**
   * The color of the component.
   * @default primary
   */
  color?: "primary" | "secondary" | "error" | "success" | "warning";
}

export const Badge = (props: BadgeProps) => <MuiBadge {...props} />;
