import { ThemeOptions } from "@mui/material";
import { HTMLAttributes } from "react";

export type ComponentThemeOverride = NonNullable<ThemeOptions["components"]>;

export type OverrideMuiProps<
  TType,
  TProps extends keyof TType,
  TElement = HTMLDivElement
> = HTMLAttributes<TElement> & Pick<TType, TProps>;

export type OverrideOnlyMuiProps<TType, TProps extends keyof TType> = Pick<
  TType,
  TProps
>;
