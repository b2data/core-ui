import {
  Portal as MuiPortal,
  PortalProps as MuiPortalProps
} from "@mui/material";
import { FC } from "react";

export interface PortalProps extends MuiPortalProps {}

export const Portal: FC<PortalProps> = (props) => <MuiPortal {...props} />;
