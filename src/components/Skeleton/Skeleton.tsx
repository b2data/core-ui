import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface SkeletonProps
  extends OverrideMuiProps<
    MuiSkeletonProps,
    "children" | "height" | "width" | "component" | "sx" | "ref"
  > {
  /**
   * The variant to use.
   * @default text
   */
  variant?: MuiSkeletonProps["variant"];
}

export const Skeleton: React.FC<SkeletonProps> = React.forwardRef(
  (props, ref) => <MuiSkeleton ref={ref} {...props} />,
);
