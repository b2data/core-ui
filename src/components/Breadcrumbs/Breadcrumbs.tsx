import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material";
import { LinkProps } from "react-router-dom";
import React, { ReactElement } from "react";
import { OverrideMuiProps } from "../types";

export type Breadcrumb = {
  label: string;
  link?: LinkProps["to"];
  disabled?: boolean;
  icon?: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export interface BreadcrumbsProps
  extends OverrideMuiProps<
    MuiBreadcrumbsProps,
    | "itemsAfterCollapse"
    | "itemsBeforeCollapse"
    | "maxItems"
    | "separator"
    | "sx"
    | "component",
    HTMLElement
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
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent?: React.ElementType;
}

export const Breadcrumbs = React.forwardRef(
  (
    { children, items = [], LinkComponent = "a", ...props }: BreadcrumbsProps,
    ref: React.Ref<HTMLElement>,
  ) => (
    <MuiBreadcrumbs ref={ref} {...props}>
      {children ||
        items.map(({ label, icon, disabled, link, onClick, ...itemProps }) => (
          <Link
            key={`breadcrumb-${label}`}
            underline={!(link || onClick) || disabled ? "none" : "hover"}
            component={link && !disabled ? LinkComponent : "a"}
            to={link}
            href={!link && !disabled && onClick ? "#" : undefined}
            color="inherit"
            onClick={
              onClick && !link && !disabled
                ? (e: any) => {
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
