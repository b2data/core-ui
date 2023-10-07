import {
  Portal as MuiPortal,
  PortalProps as MuiPortalProps,
} from "@mui/material";
import React from "react";

export interface PortalProps extends MuiPortalProps {}

export const Portal = React.forwardRef(
  (props: PortalProps, ref: React.Ref<Element>) => (
    <MuiPortal ref={ref} {...props} />
  ),
);
