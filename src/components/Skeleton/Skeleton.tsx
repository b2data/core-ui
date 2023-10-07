import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material";
import React from "react";

import { OverrideMuiProps } from "../types";

export interface SkeletonProps
  extends OverrideMuiProps<
    MuiSkeletonProps,
    "height" | "width" | "component" | "sx",
    HTMLSpanElement
  > {
  /**
   * The variant to use.
   * @default text
   */
  variant?: MuiSkeletonProps["variant"];
}

export const Skeleton = React.forwardRef(
  (props: SkeletonProps, ref: React.Ref<HTMLSpanElement>) => (
    <MuiSkeleton ref={ref} {...props} />
  ),
);
