import { RefObject } from "@mui/x-internals/types";
import { GridRowEntry, gridRowNodeSelector } from "@mui/x-data-grid";
import { GridPrivateApiPro } from "../../../models/gridApiPro";

export const findSkeletonRowsSection = ({
  apiRef,
  visibleRows,
  range,
}: {
  apiRef: RefObject<GridPrivateApiPro>;
  visibleRows: GridRowEntry[];
  range: { firstRowIndex: number; lastRowIndex: number };
}) => {
  let { firstRowIndex, lastRowIndex } = range;
  const visibleRowsSection = visibleRows.slice(
    range.firstRowIndex,
    range.lastRowIndex,
  );
  let startIndex = 0;
  let endIndex = visibleRowsSection.length - 1;
  let isSkeletonSectionFound = false;

  while (!isSkeletonSectionFound && firstRowIndex < lastRowIndex) {
    const isStartingWithASkeletonRow =
      gridRowNodeSelector(apiRef, visibleRowsSection[startIndex].id)?.type ===
      "skeletonRow";
    const isEndingWithASkeletonRow =
      gridRowNodeSelector(apiRef, visibleRowsSection[endIndex].id)?.type ===
      "skeletonRow";

    if (isStartingWithASkeletonRow && isEndingWithASkeletonRow) {
      isSkeletonSectionFound = true;
    }

    if (!isStartingWithASkeletonRow) {
      startIndex += 1;
      firstRowIndex += 1;
    }

    if (!isEndingWithASkeletonRow) {
      endIndex -= 1;
      lastRowIndex -= 1;
    }
  }

  return isSkeletonSectionFound
    ? {
        firstRowIndex,
        lastRowIndex,
      }
    : undefined;
};
