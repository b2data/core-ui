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
  gridPinnedRowsSelector,
} from "../hooks";
import { useGridPrivateApiContext } from "../hooks/utils/useGridPrivateApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";

import type { DataGridProcessedProps } from "../models";

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
    topPinnedRows: ["pinnedRows", "pinnedRows--top"],
    bottomPinnedRows: ["pinnedRows", "pinnedRows--bottom"],
    pinnedRowsRenderZone: ["pinnedRowsRenderZone"],
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

enum PinnedRowsPosition {
  top = "top",
  bottom = "bottom",
}

const VirtualScrollerPinnedRows = styled("div", {
  name: "MuiDataGrid",
  slot: "PinnedRows",
  overridesResolver: (props, styles) => [
    { [`&.${gridClasses["pinnedRows--top"]}`]: styles["pinnedRows--top"] },
    {
      [`&.${gridClasses["pinnedRows--bottom"]}`]: styles["pinnedRows--bottom"],
    },
    styles.pinnedRows,
  ],
})<{ ownerState: OwnerState & { position: PinnedRowsPosition } }>(({
  theme,
  ownerState,
}) => {
  const boxShadowColor = getBoxShadowColor(theme);
  return {
    position: "sticky",
    // should be above the no rows overlay
    zIndex: 4,
    backgroundColor: theme.palette.background.default,
    ...(theme.palette.mode === "dark" && {
      backgroundImage: darkModeBackgroundImage,
    }),
    ...(ownerState.position === "top" && {
      top: 0,
      boxShadow: `0px 3px 4px -2px ${boxShadowColor}`,
    }),
    ...(ownerState.position === PinnedRowsPosition.bottom && {
      boxShadow: `0px -3px 4px -2px ${boxShadowColor}`,
      bottom: 0,
    }),
  };
});

const VirtualScrollerPinnedRowsRenderZone = styled("div")({
  position: "absolute",
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
  const topPinnedRowsRenderZoneRef = React.useRef<HTMLDivElement>(null);
  const bottomPinnedRowsRenderZoneRef = React.useRef<HTMLDivElement>(null);

  const handleRenderZonePositioning = React.useCallback(
    ({ top, left }: { top: number; left: number }) => {
      if (leftColumns.current) {
        leftColumns.current!.style.transform = `translate3d(0px, ${top}px, 0px)`;
      }
      if (rightColumns.current) {
        rightColumns.current!.style.transform = `translate3d(0px, ${top}px, 0px)`;
      }
      if (topPinnedRowsRenderZoneRef.current) {
        topPinnedRowsRenderZoneRef.current!.style.transform = `translate3d(${left}px, 0px, 0px)`;
      }
      if (bottomPinnedRowsRenderZoneRef.current) {
        bottomPinnedRowsRenderZoneRef.current!.style.transform = `translate3d(${left}px, 0px, 0px)`;
      }
    },
    [],
  );

  const pinnedColumns = useGridSelector(apiRef, gridPinnedColumnsSelector);
  const [leftPinnedColumns, rightPinnedColumns] = filterColumns(
    pinnedColumns,
    visibleColumnFields,
  );

  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const topPinnedRowsData = React.useMemo(
    () => pinnedRows?.top || [],
    [pinnedRows?.top],
  );
  const bottomPinnedRowsData = React.useMemo(
    () => pinnedRows?.bottom || [],
    [pinnedRows?.bottom],
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
  useGridApiEventHandler(apiRef, "rowOrderChange", refreshRenderZonePosition);

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

  const topPinnedRows = getRows({
    renderContext,
    rows: topPinnedRowsData,
    position: "center",
  });

  const pinnedRowsHeight = calculatePinnedRowsHeight(apiRef);

  const mainRows = getRows({
    renderContext,
    rowIndexOffset: 0,
    position: "center",
  });

  const bottomPinnedRows = getRows({
    renderContext,
    rows: bottomPinnedRowsData,
    rowIndexOffset: topPinnedRowsData.length + (mainRows ? mainRows.length : 0),
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
      {topPinnedRowsData.length > 0 ? (
        <VirtualScrollerPinnedRows
          className={classes.topPinnedRows}
          ownerState={{ ...ownerState, position: PinnedRowsPosition.top }}
          style={{
            width: contentProps.style.width,
            height: pinnedRowsHeight.top,
          }}
          role="rowgroup"
        >
          {leftRenderContext && (
            <VirtualScrollerPinnedColumns
              className={classes.leftPinnedColumns}
              ownerState={{
                ...ownerState,
                side: GridPinnedPosition.left,
                showCellVerticalBorder: rootProps.showCellVerticalBorder,
              }}
            >
              {getRows({
                renderContext: leftRenderContext,
                minFirstColumn: leftRenderContext.firstColumnIndex,
                maxLastColumn: leftRenderContext.lastColumnIndex,
                availableSpace: 0,
                rows: topPinnedRowsData,
                position: "left",
              })}
            </VirtualScrollerPinnedColumns>
          )}
          <VirtualScrollerPinnedRowsRenderZone
            className={classes.pinnedRowsRenderZone}
            ref={topPinnedRowsRenderZoneRef}
            role="presentation"
          >
            {topPinnedRows}
          </VirtualScrollerPinnedRowsRenderZone>
          {rightRenderContext && (
            <VirtualScrollerPinnedColumns
              className={classes.rightPinnedColumns}
              ownerState={{
                ...ownerState,
                side: GridPinnedPosition.right,
                showCellVerticalBorder: rootProps.showCellVerticalBorder,
              }}
            >
              {getRows({
                renderContext: rightRenderContext,
                minFirstColumn: rightRenderContext.firstColumnIndex,
                maxLastColumn: rightRenderContext.lastColumnIndex,
                availableSpace: 0,
                rows: topPinnedRowsData,
                position: "right",
              })}
            </VirtualScrollerPinnedColumns>
          )}
        </VirtualScrollerPinnedRows>
      ) : null}
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
      {bottomPinnedRowsData.length > 0 ? (
        <VirtualScrollerPinnedRows
          className={classes.bottomPinnedRows}
          ownerState={{ ...ownerState, position: PinnedRowsPosition.bottom }}
          style={{
            width: contentProps.style.width,
            height: pinnedRowsHeight.bottom,
          }}
          role="rowgroup"
        >
          {leftRenderContext && (
            <VirtualScrollerPinnedColumns
              className={classes.leftPinnedColumns}
              ownerState={{
                ...ownerState,
                side: GridPinnedPosition.left,
                showCellVerticalBorder: rootProps.showCellVerticalBorder,
              }}
            >
              {getRows({
                renderContext: leftRenderContext,
                minFirstColumn: leftRenderContext.firstColumnIndex,
                maxLastColumn: leftRenderContext.lastColumnIndex,
                availableSpace: 0,
                rows: bottomPinnedRowsData,
                rowIndexOffset:
                  topPinnedRowsData.length + (mainRows ? mainRows.length : 0),
                position: "left",
              })}
            </VirtualScrollerPinnedColumns>
          )}
          <VirtualScrollerPinnedRowsRenderZone
            className={classes.pinnedRowsRenderZone}
            ref={bottomPinnedRowsRenderZoneRef}
            role="presentation"
          >
            {bottomPinnedRows}
          </VirtualScrollerPinnedRowsRenderZone>
          {rightRenderContext && (
            <VirtualScrollerPinnedColumns
              className={classes.rightPinnedColumns}
              ownerState={{
                ...ownerState,
                side: GridPinnedPosition.right,
                showCellVerticalBorder: rootProps.showCellVerticalBorder,
              }}
            >
              {getRows({
                renderContext: rightRenderContext,
                minFirstColumn: rightRenderContext.firstColumnIndex,
                maxLastColumn: rightRenderContext.lastColumnIndex,
                availableSpace: 0,
                rows: bottomPinnedRowsData,
                rowIndexOffset:
                  topPinnedRowsData.length + (mainRows ? mainRows.length : 0),
                position: "right",
              })}
            </VirtualScrollerPinnedColumns>
          )}
        </VirtualScrollerPinnedRows>
      ) : null}
    </GridVirtualScroller>
  );
});

export { DataGridVirtualScroller };
