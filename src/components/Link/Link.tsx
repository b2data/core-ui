import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export interface LinkProps
  extends Omit<
    Partial<RouterLinkProps> & Omit<MuiLinkProps, "className" | "classes">,
    "className" | "classes"
  > {}

export const Link: React.FC<LinkProps> = React.forwardRef((props, ref) => (
  <MuiLink ref={ref} component={RouterLink} {...props} />
));
