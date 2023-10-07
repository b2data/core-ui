import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from "@mui/material";
import React from "react";

export interface DialogTitleProps
  extends Pick<MuiDialogTitleProps, "sx" | "children"> {}

export const DialogTitle = React.forwardRef(
  (props: DialogTitleProps, ref: React.Ref<HTMLSpanElement>) => (
    <MuiDialogTitle ref={ref} {...props} />
  ),
);
