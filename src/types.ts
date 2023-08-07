import { ThemeOptions } from "@mui/material";
import React from "react";

export type ComponentThemeOverride = NonNullable<ThemeOptions["components"]>;

export type OverrideMuiProps<
  TType,
  TProps extends keyof TType,
  TElement = HTMLDivElement
> = React.HTMLAttributes<TElement> & Pick<TType, TProps>;
