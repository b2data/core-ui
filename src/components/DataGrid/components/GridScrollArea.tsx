import * as React from "react";
import { clsx } from "clsx";
import {
  unstable_composeClasses as composeClasses,
  unstable_useEventCallback as useEventCallback,
} from "@mui/utils";
import { styled } from "@mui/system";
import { getTotalHeaderHeight, useTimeout } from "@mui/x-data-grid/internals";
import {
  getDataGridUtilityClass,
  gridClasses,
  gridColumnsTotalWidthSelector,
  gridDensityFactorSelector,
  GridEventListener,
  GridScrollParams,
  useGridApiContext,
  useGridApiEventHandler,
  useGridSelector,
} from "@mui/x-data-grid";

import { DataGridProcessedProps } from "../models";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";

const CLIFF = 1;
const SLOP = 1.5;

interface ScrollAreaProps {
  scrollDirection: "left" | "right";
}

type OwnerState = DataGridProcessedProps &
  Pick<ScrollAreaProps, "scrollDirection">;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { scrollDirection, classes } = ownerState;

  const slots = {
    root: ["scrollArea", `scrollArea--${scrollDirection}`],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridScrollAreaRawRoot = styled("div", {
  name: "MuiDataGrid",
  slot: "ScrollArea",
  overridesResolver: (_, styles) => [
    { [`&.${gridClasses["scrollArea--left"]}`]: styles["scrollArea--left"] },
    { [`&.${gridClasses["scrollArea--right"]}`]: styles["scrollArea--right"] },
    styles.scrollArea,
  ],
})<{ ownerState: OwnerState }>(() => ({
  position: "absolute",
  top: 0,
  zIndex: 101,
  width: 20,
  bottom: 0,
  [`&.${gridClasses["scrollArea--left"]}`]: {
    left: 0,
  },
  [`&.${gridClasses["scrollArea--right"]}`]: {
    right: 0,
  },
}));

function GridScrollAreaRaw(props: ScrollAreaProps) {
  const { scrollDirection } = props;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const apiRef = useGridApiContext();
  const timeout = useTimeout();
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [canScrollMore, setCanScrollMore] = React.useState<boolean>(true);
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const columnsTotalWidth = useGridSelector(
    apiRef,
    gridColumnsTotalWidthSelector,
  );

  const scrollPosition = React.useRef<GridScrollParams>({
    left: 0,
    top: 0,
  });

  const rootProps = useGridRootProps();
  const ownerState = { ...rootProps, scrollDirection };
  const classes = useUtilityClasses(ownerState);
  const totalHeaderHeight = getTotalHeaderHeight(
    apiRef,
    rootProps.columnHeaderHeight,
  );
  const headerHeight = Math.floor(rootProps.columnHeaderHeight * densityFactor);

  const handleScrolling = React.useCallback<
    GridEventListener<"scrollPositionChange">
  >(
    (newScrollPosition) => {
      scrollPosition.current = newScrollPosition;

      const dimensions = apiRef.current.getRootDimensions();

      setCanScrollMore(() => {
        if (scrollDirection === "left") {
          // Only render if the user has not reached yet the start of the list
          return scrollPosition.current.left > 0;
        }

        if (scrollDirection === "right") {
          // Only render if the user has not reached yet the end of the list
          const maxScrollLeft =
            columnsTotalWidth - dimensions!.viewportInnerSize.width;
          return scrollPosition.current.left < maxScrollLeft;
        }

        return false;
      });
    },
    [apiRef, columnsTotalWidth, scrollDirection],
  );

  const handleDragOver = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      let offset: number;

      // Prevents showing the forbidden cursor
      event.preventDefault();

      if (scrollDirection === "left") {
        offset = event.clientX - rootRef.current!.getBoundingClientRect().right;
      } else if (scrollDirection === "right") {
        offset = Math.max(
          1,
          event.clientX - rootRef.current!.getBoundingClientRect().left,
        );
      } else {
        throw new Error("MUI: Wrong drag direction");
      }

      offset = (offset - CLIFF) * SLOP + CLIFF;

      // Avoid freeze and inertia.
      timeout.start(0, () => {
        apiRef.current.scroll({
          left: scrollPosition.current.left + offset,
          top: scrollPosition.current.top,
        });
      });
    },
    [scrollDirection, apiRef, timeout],
  );

  const handleColumnHeaderDragStart = useEventCallback(() => {
    setDragging(true);
  });

  const handleColumnHeaderDragEnd = useEventCallback(() => {
    setDragging(false);
  });

  useGridApiEventHandler(apiRef, "scrollPositionChange", handleScrolling);
  useGridApiEventHandler(
    apiRef,
    "columnHeaderDragStart",
    handleColumnHeaderDragStart,
  );
  useGridApiEventHandler(
    apiRef,
    "columnHeaderDragEnd",
    handleColumnHeaderDragEnd,
  );

  if (!dragging || !canScrollMore) {
    return null;
  }

  return (
    <GridScrollAreaRawRoot
      ref={rootRef}
      className={clsx(classes.root)}
      ownerState={ownerState}
      onDragOver={handleDragOver}
      style={{ height: headerHeight, top: totalHeaderHeight - headerHeight }}
    />
  );
}

export const GridScrollArea = React.memo(GridScrollAreaRaw);
