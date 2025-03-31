import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

export interface LinkProps
  extends Omit<MuiLinkProps, "className" | "classes"> {}

export const Link = (props: LinkProps) => <MuiLink {...props} />;
