import { FC, Fragment } from "react";
import { SxProps, Theme } from "@mui/material";

import { getGridTemplate } from "src/theming";

import { Box } from "../Box";
import { Skeleton, SkeletonProps } from "../Skeleton";

export interface SkeletonGroupProps
  extends Pick<SkeletonProps, "variant" | "height" | "width" | "sx"> {
  /**
   * Grid template for drawing columns
   * @default []
   */
  gridTemplate?: (number | string)[];
  /**
   * Number of rows that should be shown
   * @default 1
   */
  rowsCount: number;
  /**
   * SX properties for row component
   */
  rowSx?: SxProps<Theme>;
}

export const SkeletonGroup: FC<SkeletonGroupProps> = ({
  gridTemplate = [],
  rowsCount = 1,
  rowSx,
  ...props
}) => (
  <Fragment>
    {Array.from({ length: rowsCount }, () => (
      <Box
        key={`${Date.now()}_${Math.random()}`}
        sx={{
          display: "grid",
          justifyItems: "center",
          columnGap: 2.5,
          minHeight: 36,
          padding: 2.5,
          gridTemplateColumns: getGridTemplate(gridTemplate),
          ...rowSx
        }}
      >
        {Array.from({ length: Math.max(1, gridTemplate.length) }, () => (
          <Skeleton key={Math.random()} width="calc(100%)" {...props} />
        ))}
      </Box>
    ))}
  </Fragment>
);
