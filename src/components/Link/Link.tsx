import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { LinkProps as RouteLinkProps } from "react-router-dom";

export interface LinkProps extends Omit<MuiLinkProps, "className" | "classes"> {
  /**
   * LinkComponentProps
   */
  to?: RouteLinkProps["to"];
}

export const Link = (props: LinkProps) => <MuiLink {...props} />;
