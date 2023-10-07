import * as React from "react";
import {
  alpha,
  getOverlayAlpha,
  styled,
  Theme,
  useTheme,
} from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/utils";
import {
  getDataGridUtilityClass,
  gridClasses,
  GridOverlays,
  GridRowId,
  gridVisibleColumnFieldsSelector,
  useGridApiEventHandler,
  useGridSelector,
} from "@mui/x-data-grid";
import {
  calculatePinnedRowsHeight,
  GridVirtualScroller,
  GridVirtualScrollerContent,
  GridVirtualScrollerRenderZone,
  useGridVirtualScroller,
} from "@mui/x-data-grid/internals";

import {
  GridPinnedColumns,
  gridPinnedColumnsSelector,
  GridPinnedPosition,
} from "../hooks/features/columnPinning";
import { useGridPrivateApiContext } from "../hooks/utils/useGridPrivateApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";

import type { DataGridProcessedProps } from "../models/dataGridProps";

export const filterColumns = (
  pinnedColumns: GridPinnedColumns,
  columns: string[],
): [string[], string[]] => {
  if (
    !Array.isArray(pinnedColumns.left) &&
    !Array.isArray(pinnedColumns.right)
  ) {
    return [[], []];
  }

  if (pinnedColumns.left?.length === 0 && pinnedColumns.right?.length === 0) {
    return [[], []];
  }

  const filter = (
    newPinnedColumns: any[] | undefined,
    remainingColumns: string[],
  ) => {
    if (!Array.isArray(newPinnedColumns)) {
      return [];
    }
    return newPinnedColumns.filter((field) => remainingColumns.includes(field));
  };

  const leftPinnedColumns = filter(pinnedColumns.left, columns);
  const columnsWithoutLeftPinnedColumns = columns.filter(
    // Filter out from the remaining columns those columns already pinned to the left
    (field) => !leftPinnedColumns.includes(field),
  );
  const rightPinnedColumns = filter(
    pinnedColumns.right,
    columnsWithoutLeftPinnedColumns,
  );

  return [leftPinnedColumns, rightPinnedColumns];
};

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    leftPinnedColumns: ["pinnedColumns", "pinnedColumns--left"],
    rightPinnedColumns: [
      "pinnedColumns",
      "pinnedColumns--right",
      "withBorderColor",
    ],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface VirtualScrollerPinnedColumnsProps {
  side: GridPinnedPosition;
  showCellVerticalBorder: boolean;
}

const getBoxShadowColor = (theme: Theme) => {
  return alpha(theme.palette.common.black, 0.21);
};

const darkModeBackgroundImage = `linear-gradient(${alpha(
  "#fff",
  Number(getOverlayAlpha(2)),
)}, ${alpha("#fff", Number(getOverlayAlpha(2)))})`;

const VirtualScrollerPinnedColumns = styled("div", {
  name: "MuiDataGrid",
  slot: "PinnedColumns",
  overridesResolver: (props, styles) => [
    {
      [`&.${gridClasses["pinnedColumns--left"]}`]:
        styles["pinnedColumns--left"],
    },
    {
      [`&.${gridClasses["pinnedColumns--right"]}`]:
        styles["pinnedColumns--right"],
    },
    styles.pinnedColumns,
  ],
})<{ ownerState: OwnerState & VirtualScrollerPinnedColumnsProps }>(({
  theme,
  ownerState,
}) => {
  const boxShadowColor = getBoxShadowColor(theme);
  return {
    position: "sticky",
    overflow: "hidden",
    zIndex: 1,
    backgroundColor: theme.palette.background.default,
    ...(theme.palette.mode === "dark" && {
      backgroundImage: darkModeBackgroundImage,
    }),
    ...(ownerState.side === GridPinnedPosition.left && {
      left: 0,
      float: "left",
      boxShadow: `2px 0px 4px -2px ${boxShadowColor}`,
    }),
    ...(ownerState.side === GridPinnedPosition.right && {
      right: 0,
      float: "right",
      boxShadow: `-2px 0px 4px -2px ${boxShadowColor}`,
    }),
    ...(ownerState.side === GridPinnedPosition.right &&
      ownerState.showCellVerticalBorder && {
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
      }),
  };
});

interface DataGridVirtualScrollerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disableVirtualization?: boolean;
}

const DataGridVirtualScroller = React.forwardRef<
  HTMLDivElement,
  DataGridVirtualScrollerProps
>(function DataGridVirtualScroller(props, ref) {
  const { className, disableVirtualization, ...other } = props;
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumnFields = useGridSelector(
    apiRef,
    gridVisibleColumnFieldsSelector,
  );

  const leftColumns = React.useRef<HTMLDivElement>(null);
  const rightColumns = React.useRef<HTMLDivElement>(null);

  const handleRenderZonePositioning = React.useCallback(
    ({ top, left }: { top: number; left: number }) => {
      if (leftColumns.current) {
        leftColumns.current!.style.transform = `translate3d(0px, ${top}px, 0px)`;
      }
      if (rightColumns.current) {
        rightColumns.current!.style.transform = `translate3d(0px, ${top}px, 0px)`;
      }
    },
    [],
  );

  const pinnedColumns = useGridSelector(apiRef, gridPinnedColumnsSelector);
  const [leftPinnedColumns, rightPinnedColumns] = filterColumns(
    pinnedColumns,
    visibleColumnFields,
  );

  const ownerState = { ...rootProps, classes: rootProps.classes };
  const classes = useUtilityClasses(ownerState);

  const {
    renderContext,
    getRows,
    getRootProps,
    getContentProps,
    getRenderZoneProps,
    updateRenderZonePosition,
  } = useGridVirtualScroller({
    ref,
    renderZoneMinColumnIndex: leftPinnedColumns.length,
    renderZoneMaxColumnIndex:
      visibleColumnFields.length - rightPinnedColumns.length,
    onRenderZonePositioning: handleRenderZonePositioning,
    ...props,
  });

  const refreshRenderZonePosition = React.useCallback(() => {
    if (renderContext) {
      updateRenderZonePosition(renderContext);
    }
  }, [renderContext, updateRenderZonePosition]);

  useGridApiEventHandler(
    apiRef,
    "columnWidthChange",
    refreshRenderZonePosition,
  );
  useGridApiEventHandler(
    apiRef,
    "columnOrderChange",
    refreshRenderZonePosition,
  );

  const leftRenderContext =
    renderContext && leftPinnedColumns.length > 0
      ? {
          ...renderContext,
          firstColumnIndex: 0,
          lastColumnIndex: leftPinnedColumns.length,
        }
      : null;

  const rightRenderContext =
    renderContext && rightPinnedColumns.length > 0
      ? {
          ...renderContext,
          firstColumnIndex:
            visibleColumnFields.length - rightPinnedColumns.length,
          lastColumnIndex: visibleColumnFields.length,
        }
      : null;

  const pinnedRowsHeight = calculatePinnedRowsHeight(apiRef);

  const mainRows = getRows({
    renderContext,
    rowIndexOffset: 0,
    position: "center",
  });

  const contentProps = getContentProps();

  const pinnedColumnsStyle = { minHeight: contentProps.style.minHeight };

  if (contentProps.style.minHeight && contentProps.style.minHeight === "100%") {
    contentProps.style.minHeight = `calc(100% - ${pinnedRowsHeight.top}px - ${pinnedRowsHeight.bottom}px)`;
  }

  return (
    <GridVirtualScroller {...getRootProps(other)}>
      <GridOverlays />
      <GridVirtualScrollerContent {...contentProps}>
        {leftRenderContext && (
          <VirtualScrollerPinnedColumns
            ref={leftColumns}
            className={classes.leftPinnedColumns}
            ownerState={{
              ...ownerState,
              side: GridPinnedPosition.left,
              showCellVerticalBorder: rootProps.showCellVerticalBorder,
            }}
            style={pinnedColumnsStyle}
          >
            {getRows({
              renderContext: leftRenderContext,
              minFirstColumn: leftRenderContext.firstColumnIndex,
              maxLastColumn: leftRenderContext.lastColumnIndex,
              availableSpace: 0,
              rowIndexOffset: 0,
              position: "left",
            })}
          </VirtualScrollerPinnedColumns>
        )}
        <GridVirtualScrollerRenderZone {...getRenderZoneProps()}>
          {mainRows}
        </GridVirtualScrollerRenderZone>
        {rightRenderContext && (
          <VirtualScrollerPinnedColumns
            ref={rightColumns}
            ownerState={{
              ...ownerState,
              side: GridPinnedPosition.right,
              showCellVerticalBorder: rootProps.showCellVerticalBorder,
            }}
            className={classes.rightPinnedColumns}
            style={pinnedColumnsStyle}
          >
            {getRows({
              renderContext: rightRenderContext,
              minFirstColumn: rightRenderContext.firstColumnIndex,
              maxLastColumn: rightRenderContext.lastColumnIndex,
              availableSpace: 0,
              rowIndexOffset: 0,
              position: "right",
            })}
          </VirtualScrollerPinnedColumns>
        )}
      </GridVirtualScrollerContent>
    </GridVirtualScroller>
  );
});

export { DataGridVirtualScroller };
