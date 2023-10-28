import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from "@mui/material";
import React from "react";

import { Tooltip, TooltipProps } from "../Tooltip";
import { OverrideMuiProps } from "../types";

export interface ListItemTextProps
  extends OverrideMuiProps<
    MuiListItemTextProps,
    | "primary"
    | "primaryTypographyProps"
    | "secondary"
    | "secondaryTypographyProps"
    | "disableTypography"
    | "sx"
    | "children"
  > {
  /**
   * If `true`, the tooltip will be shown
   */
  withTooltip?: boolean;
  /**
   * Tooltip properties `TooltipProps`
   */
  tooltipProps?: TooltipProps;
}

export const ListItemText = ({
  withTooltip,
  tooltipProps,
  primary,
  ...props
}: ListItemTextProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const handleResize = () => {
    setShowTooltip(
      (ref.current?.clientWidth || 0) <=
        (ref.current?.textContent?.length || 0) * 9,
    );
  };

  React.useEffect(() => {
    if (ref.current && withTooltip) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, withTooltip]);

  return withTooltip && showTooltip ? (
    <Tooltip text={primary} {...tooltipProps}>
      <MuiListItemText ref={ref} primary={primary} {...props} />
    </Tooltip>
  ) : (
    <MuiListItemText ref={ref} primary={primary} {...props} />
  );
};
