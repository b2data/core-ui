import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps
} from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface PopoverProps
  extends OverrideMuiProps<
    MuiPopoverProps,
    | "anchorEl"
    | "open"
    | "anchorOrigin"
    | "anchorPosition"
    | "anchorReference"
    | "children"
    | "container"
    | "elevation"
    | "onClose"
    | "transformOrigin"
    | "sx"
    | "disablePortal"
    | "keepMounted"
    | "ref"
    | "component"
    | "disableScrollLock"
  > {
  /**
   * This is the point on the anchor where the popover's anchorEl will attach to.
   * This is not used when the anchorReference is 'anchorPosition'.
   * Options: vertical: [top, center, bottom]; horizontal: [left, center, right].
   * @default { vertical: 'top', horizontal: 'left' }
   */
  anchorOrigin?: MuiPopoverProps["anchorOrigin"];
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   * Type: `{ vertical: 'top', horizontal: 'left' }`
   */
  anchorPosition?: MuiPopoverProps["anchorPosition"];

  /**
   * This is the point on the popover which will attach to the anchor's origin.
   * Options: vertical: [top, center, bottom, x(px)]; horizontal: [left, center, right, x(px)].
   * @default { vertical: 'top', horizontal: 'left' }
   */
  transformOrigin?: MuiPopoverProps["transformOrigin"];
}

export const Popover: FC<PopoverProps> = (props) => <MuiPopover {...props} />;