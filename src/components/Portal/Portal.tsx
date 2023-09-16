import {
  Portal as MuiPortal,
  PortalProps as MuiPortalProps,
} from "@mui/material";
import React from "react";

export interface PortalProps extends MuiPortalProps {}

export const Portal: React.FC<PortalProps> = (props) => (
  <MuiPortal {...props} />
);
