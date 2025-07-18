import composeClasses from "@mui/utils/composeClasses";
import { getDataGridUtilityClass } from "../constants/gridClasses";
import type { DataGridProcessedProps } from "../models/props/DataGridProps";

export function composeGridClasses(
  classes: DataGridProcessedProps["classes"],
  slots: Parameters<typeof composeClasses>[0],
) {
  return composeClasses(slots, getDataGridUtilityClass, classes);
}
