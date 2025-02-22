import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export interface LinkProps
  extends Omit<
    Partial<RouterLinkProps> & Omit<MuiLinkProps, "className" | "classes">,
    "className" | "classes"
  > {}

export const Link = (props: LinkProps) => (
  <MuiLink component={RouterLink} {...props} />
);
