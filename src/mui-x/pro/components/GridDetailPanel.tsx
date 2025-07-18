"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { GridRowId, gridRowNodeSelector } from "@mui/x-data-grid";
import { vars } from "@mui/x-data-grid/internals";
import { useResizeObserver } from "@mui/x-internals/useResizeObserver";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { useGridPrivateApiContext } from "../hooks/utils/useGridPrivateApiContext";
import { DataGridProProcessedProps } from "../models/dataGridProProps";

type OwnerState = DataGridProProcessedProps;

const DetailPanel = styled("div", {
  name: "MuiDataGrid",
  slot: "DetailPanel",
})<{ ownerState: OwnerState }>({
  width:
    "calc(var(--DataGrid-rowWidth) - var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
  backgroundColor: vars.colors.background.base,
  overflow: "auto",
});

interface GridDetailPanelProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "children"> {
  /**
   * The row ID that this panel belongs to.
   */
  rowId: GridRowId;
  /**
   * The panel height.
   */
  height: number | "auto";
}

function GridDetailPanel(props: GridDetailPanelProps) {
  const { rowId, height, className, children } = props;
  const apiRef = useGridPrivateApiContext();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rootProps = useGridRootProps();
  const ownerState = rootProps;
  const hasAutoHeight = height === "auto";
  const rowNode = gridRowNodeSelector(apiRef, rowId);

  React.useLayoutEffect(() => {
    if (hasAutoHeight && typeof ResizeObserver === "undefined") {
      // Fallback for IE
      apiRef.current.storeDetailPanelHeight(rowId, ref.current!.clientHeight);
    }
  }, [apiRef, hasAutoHeight, rowId]);

  useResizeObserver(
    ref,
    (entries) => {
      const [entry] = entries;
      const observedHeight =
        entry.borderBoxSize && entry.borderBoxSize.length > 0
          ? entry.borderBoxSize[0].blockSize
          : entry.contentRect.height;

      apiRef.current.storeDetailPanelHeight(rowId, observedHeight);
    },
    hasAutoHeight,
  );

  if (rowNode?.type === "skeletonRow") {
    return null;
  }

  return (
    <DetailPanel
      ref={ref}
      ownerState={ownerState}
      role="presentation"
      style={{ height }}
      className={className}
    >
      {children}
    </DetailPanel>
  );
}

export { GridDetailPanel };
