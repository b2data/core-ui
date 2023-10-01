import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

import { OverrideMuiProps } from "../types";
import { Link } from "../Link";

export type Breadcrumb = {
  label: string;
  link?: string;
  disabled?: boolean;
  icon?: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export interface BreadcrumbsProps
  extends OverrideMuiProps<
    MuiBreadcrumbsProps,
    | "children"
    | "itemsAfterCollapse"
    | "itemsBeforeCollapse"
    | "maxItems"
    | "separator"
    | "sx"
    | "ref"
    | "component"
  > {
  /**
   * Override the default label for the expand button.
   * @default Show path
   */
  expandText?: MuiBreadcrumbsProps["expandText"];
  /**
   * Predefined `Link` that should be rendered using `RouterLink`.
   * Each item is an object of type
   *  {
   *      label: string;
   *      link?: string;
   *      disabled?: boolean;
   *      icon?: ReactElement;
   *      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
   *  }
   */
  items?: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = React.forwardRef(
  ({ children, items = [], ...props }, ref) => (
    <MuiBreadcrumbs ref={ref} {...props}>
      {children ||
        items.map(({ label, icon, disabled, link, onClick, ...itemProps }) => (
          <Link
            key={`breadcrumb-${label}`}
            underline={!(link || onClick) || disabled ? "none" : "hover"}
            component={link && !disabled ? RouterLink : "a"}
            to={link}
            href={!link && !disabled && onClick ? "#" : undefined}
            color="inherit"
            onClick={
              onClick && !link && !disabled
                ? (e) => {
                    e.preventDefault();
                    onClick(e);
                  }
                : undefined
            }
            {...itemProps}
          >
            {icon}
            {label}
          </Link>
        ))}
    </MuiBreadcrumbs>
  ),
);
