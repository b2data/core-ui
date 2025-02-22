import * as React from "react";
import {
  unstable_composeClasses as composeClasses,
  unstable_useEventCallback as useEventCallback,
} from "@mui/utils";
import { alpha, getOverlayAlpha, styled } from "@mui/material/styles";
import {
  getDataGridUtilityClass,
  gridClasses,
  GridColumnHeaderSeparatorSides,
  useGridApiEventHandler,
} from "@mui/x-data-grid";
import {
  GridBaseColumnHeaders,
  GridColumnHeadersInner,
  useGridColumnHeaders,
  UseGridColumnHeadersProps,
} from "@mui/x-data-grid/internals";

import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { DataGridProcessedProps } from "../models";
import { GridPinnedColumns, GridPinnedPosition } from "../hooks";

import { filterColumns } from "./DataGridVirtualScroller";
import { GridScrollArea } from "./GridScrollArea";

type OwnerState = DataGridProcessedProps & {
  leftPinnedColumns: GridPinnedColumns["left"];
  rightPinnedColumns: GridPinnedColumns["right"];
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { leftPinnedColumns, rightPinnedColumns, classes } = ownerState;

  const slots = {
    leftPinnedColumns: [
      "pinnedColumnHeaders",
      leftPinnedColumns &&
        leftPinnedColumns.length > 0 &&
        `pinnedColumnHeaders--left`,
    ],
    rightPinnedColumns: [
      "pinnedColumnHeaders",
      rightPinnedColumns &&
        rightPinnedColumns.length > 0 &&
        `pinnedColumnHeaders--right`,
      "withBorderColor",
    ],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface GridColumnHeadersPinnedColumnHeadersProps {
  side: GridPinnedPosition;
  showCellVerticalBorder: boolean;
}

const GridColumnHeadersPinnedColumnHeaders = styled("div", {
  name: "MuiDataGrid",
  slot: "PinnedColumnHeaders",
  overridesResolver: (_, styles) => [
    {
      [`&.${gridClasses["pinnedColumnHeaders--left"]}`]:
        styles["pinnedColumnHeaders--left"],
    },
    {
      [`&.${gridClasses["pinnedColumnHeaders--right"]}`]:
        styles["pinnedColumnHeaders--right"],
    },
    styles.pinnedColumnHeaders,
  ],
})<{ ownerState: OwnerState & GridColumnHeadersPinnedColumnHeadersProps }>(
  ({ theme, ownerState }) => ({
    position: "absolute",
    top: 0,
    overflow: "hidden",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.default,
    ...(theme.palette.mode === "dark" && {
      backgroundImage: `linear-gradient(${alpha(
        "#fff",
        Number(getOverlayAlpha(2)),
      )}, ${alpha("#fff", Number(getOverlayAlpha(2)))})`,
    }),
    ...(ownerState.side === GridPinnedPosition.left && { left: 0 }),
    ...(ownerState.side === GridPinnedPosition.right && { right: 0 }),
    ...(ownerState.side === GridPinnedPosition.right &&
      ownerState.showCellVerticalBorder && {
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
      }),
  }),
);

interface DataGridColumnHeadersProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<UseGridColumnHeadersProps, "innerRef"> {
  innerRef?: React.Ref<HTMLDivElement>;
  pinnedColumns: GridPinnedColumns;
}

const GridColumnHeaders = React.forwardRef<
  HTMLDivElement,
  DataGridColumnHeadersProps
>(function GridColumnHeaders(props, ref) {
  const {
    style,
    className,
    innerRef,
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnPositions,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    densityFactor,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence,
    pinnedColumns,
    ...other
  } = props;
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const [scrollbarSize, setScrollbarSize] = React.useState(0);

  const handleContentSizeChange = useEventCallback(() => {
    const rootDimensions = apiRef.current.getRootDimensions();
    if (!rootDimensions) {
      return;
    }

    const newScrollbarSize = rootDimensions.hasScrollY
      ? rootDimensions.scrollBarSize
      : 0;
    if (scrollbarSize !== newScrollbarSize) {
      setScrollbarSize(newScrollbarSize);
    }
  });

  useGridApiEventHandler(
    apiRef,
    "virtualScrollerContentSizeChange",
    handleContentSizeChange,
  );

  const visibleColumnFields = React.useMemo(
    () => visibleColumns.map(({ field }) => field),
    [visibleColumns],
  );

  const [leftPinnedColumns, rightPinnedColumns] = filterColumns(
    pinnedColumns,
    visibleColumnFields,
  );

  const {
    isDragging,
    renderContext,
    getRootProps,
    getInnerProps,
    getColumnHeaders,
  } = useGridColumnHeaders({
    innerRef,
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnPositions,
    columnHeaderTabIndexState,
    hasOtherElementInTabSequence,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    densityFactor,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    minColumnIndex: leftPinnedColumns.length,
  });

  const ownerState = {
    ...rootProps,
    leftPinnedColumns,
    rightPinnedColumns,
    classes: rootProps.classes,
  };
  const classes = useUtilityClasses(ownerState);

  const leftRenderContext =
    renderContext && leftPinnedColumns.length
      ? {
          ...renderContext,
          firstColumnIndex: 0,
          lastColumnIndex: leftPinnedColumns.length,
        }
      : null;

  const rightRenderContext =
    renderContext && rightPinnedColumns.length
      ? {
          ...renderContext,
          firstColumnIndex:
            visibleColumnFields.length - rightPinnedColumns.length,
          lastColumnIndex: visibleColumnFields.length,
        }
      : null;

  const innerProps = getInnerProps();

  const pinnedColumnHeadersProps = {
    role: innerProps.role,
  };

  return (
    <GridBaseColumnHeaders
      ref={ref}
      className={className}
      {...getRootProps(other)}
    >
      {leftRenderContext && (
        <GridColumnHeadersPinnedColumnHeaders
          className={classes.leftPinnedColumns}
          ownerState={{
            ...ownerState,
            side: GridPinnedPosition.left,
            showCellVerticalBorder: rootProps.showCellVerticalBorder,
          }}
          {...pinnedColumnHeadersProps}
        >
          {getColumnHeaders(
            {
              renderContext: leftRenderContext,
              minFirstColumn: leftRenderContext.firstColumnIndex,
              maxLastColumn: leftRenderContext.lastColumnIndex,
            },
            { disableReorder: true },
          )}
        </GridColumnHeadersPinnedColumnHeaders>
      )}

      <GridScrollArea scrollDirection="left" />
      <GridColumnHeadersInner isDragging={isDragging} {...innerProps}>
        {getColumnHeaders({
          renderContext,
          minFirstColumn: leftPinnedColumns.length,
          maxLastColumn: visibleColumnFields.length - rightPinnedColumns.length,
        })}
      </GridColumnHeadersInner>
      <GridScrollArea scrollDirection="right" />
      {rightRenderContext && (
        <GridColumnHeadersPinnedColumnHeaders
          ownerState={{
            ...ownerState,
            side: GridPinnedPosition.right,
            showCellVerticalBorder: rootProps.showCellVerticalBorder,
          }}
          className={classes.rightPinnedColumns}
          style={{ paddingRight: scrollbarSize }}
          {...pinnedColumnHeadersProps}
        >
          {getColumnHeaders(
            {
              renderContext: rightRenderContext,
              minFirstColumn: rightRenderContext.firstColumnIndex,
              maxLastColumn: rightRenderContext.lastColumnIndex,
            },
            {
              disableReorder: true,
              separatorSide: GridColumnHeaderSeparatorSides.Left,
            },
          )}
        </GridColumnHeadersPinnedColumnHeaders>
      )}
    </GridBaseColumnHeaders>
  );
});

export { GridColumnHeaders };
