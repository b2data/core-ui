import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from "@mui/material";

import { Button, ButtonProps } from "../Button";

export type DialogAction = ButtonProps & {
  label: string;
};

export interface DialogActionsProps
  extends Pick<MuiDialogActionsProps, "children" | "disableSpacing" | "sx"> {
  /**
   * Dialog action items that will be wrapped by `Button` component.
   * All `ButtonProps` are inherit + `label: string` is overwrite `children` content.
   */
  items?: DialogAction[];
}

export const DialogActions = ({
  items = [],
  children,
  ...props
}: DialogActionsProps) => (
  <MuiDialogActions {...props}>
    {!items.length
      ? children
      : items.map(({ label, children: itemChildren, ...itemProps }, index) => (
          <Button key={label + index} {...itemProps}>
            {label || itemChildren}
          </Button>
        ))}
  </MuiDialogActions>
);
