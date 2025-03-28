import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import React from "react";

import { DialogAction, DialogActions } from "../DialogActions";
import { DialogContent } from "../DialogContent";
import { DialogTitle } from "../DialogTitle";

export interface DialogProps
  extends Pick<
    MuiDialogProps,
    | "open"
    | "disableEscapeKeyDown"
    | "fullScreen"
    | "fullWidth"
    | "maxWidth"
    | "onClose"
    | "onClick"
    | "onKeyDown"
    | "children"
    | "sx"
  > {
  /**
   * Dialog children, will be wrapped by `DialogContent`. Use `disablePadding` to remove padding.
   */
  children?: React.ReactNode;
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * Variants: `desktop`, `tablet`, `mobile`.
   * @default tablet
   */
  maxWidth?: MuiDialogProps["maxWidth"];
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default true
   */
  fullWidth?: MuiDialogProps["fullWidth"];
  /**
   * If `true` the padding of `DialogContent` will be 0.
   */
  disablePadding?: boolean;
  /**
   * Title of the Dialog, will be wrapped by `DialogTitle`
   */
  title?: string;
  /**
   * Actions of the Dialog, will be wrapped by `DialogActions` and use `items` property to render actions.
   */
  actions?: DialogAction[];
}

export const Dialog = React.forwardRef(
  (
    { title, children, disablePadding, actions, ...props }: DialogProps,
    ref: React.Ref<HTMLDivElement>,
  ) =>
    title ? (
      <MuiDialog ref={ref} {...props}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent disablePadding={disablePadding}>
          {children}
        </DialogContent>
        {actions && <DialogActions items={actions} />}
      </MuiDialog>
    ) : (
      <MuiDialog ref={ref} {...props}>
        {children}
      </MuiDialog>
    ),
);
