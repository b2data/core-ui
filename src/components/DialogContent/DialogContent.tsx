import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from "@mui/material";

export interface DialogContentProps
  extends Pick<MuiDialogContentProps, "children" | "dividers" | "sx"> {
  /**
   * If `true` the padding will be 0.
   */
  disablePadding?: boolean;
}

export const DialogContent = ({
  disablePadding,
  ...props
}: DialogContentProps) => (
  <MuiDialogContent
    {...props}
    sx={{
      padding: disablePadding ? 0 : "20px",
      ...props.sx,
    }}
  />
);
