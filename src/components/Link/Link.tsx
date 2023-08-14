import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { FC } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps
  extends Omit<
    Partial<RouterLinkProps> & Omit<MuiLinkProps, "className" | "classes">,
    "className" | "classes"
  > {}

export const Link: FC<LinkProps> = (props) => <MuiLink {...props} />;
