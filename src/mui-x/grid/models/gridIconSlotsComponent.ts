import * as React from "react";
import { IconProps } from "./gridBaseSlots";

/**
 * Set of icons used in the grid component UI.
 */
export interface GridIconSlotsComponent {
  /**
   * Icon displayed on the boolean cell to represent the true value.
   * @default GridCheckIcon
   */
  booleanCellTrueIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the boolean cell to represent the false value.
   * @default GridCloseIcon
   */
  booleanCellFalseIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the side of the column header title to display the filter input component.
   * @default GridTripleDotsVerticalIcon
   */
  columnMenuIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the open filter button present in the toolbar by default.
   * @default GridFilterListIcon
   */
  openFilterButtonIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the column header menu to show that a filter has been applied to the column.
   * @default GridFilterAltIcon
   */
  columnFilteredIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the column menu selector tab.
   * @default GridColumnIcon
   */
  columnSelectorIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the side of the column header title when sorted in ascending order.
   * @default GridArrowUpwardIcon
   */
  columnSortedAscendingIcon: React.JSXElementConstructor<IconProps> | null;
  /**
   * Icon displayed on the side of the column header title when sorted in descending order.
   * @default GridArrowDownwardIcon
   */
  columnSortedDescendingIcon: React.JSXElementConstructor<IconProps> | null;
  /**
   * Icon displayed in between two column headers that allows to resize the column header.
   * @default GridSeparatorIcon
   */
  columnResizeIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the compact density option in the toolbar.
   * @default GridViewHeadlineIcon
   */
  densityCompactIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the standard density option in the toolbar.
   * @default GridTableRowsIcon
   */
  densityStandardIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the "comfortable" density option in the toolbar.
   * @default GridViewStreamIcon
   */
  densityComfortableIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the open export button present in the toolbar by default.
   * @default GridDownloadIcon
   */
  exportIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the `actions` column type to open the menu.
   * @default GridMoreVertIcon
   */
  moreActionsIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the tree data toggling column when the children are collapsed
   * @default GridKeyboardArrowRight
   */
  treeDataExpandIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the tree data toggling column when the children are expanded
   * @default GridExpandMoreIcon
   */
  treeDataCollapseIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the grouping column when the children are collapsed
   * @default GridKeyboardArrowRight
   */
  groupingCriteriaExpandIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the grouping column when the children are expanded
   * @default GridExpandMoreIcon
   */
  groupingCriteriaCollapseIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the detail panel toggle column when collapsed.
   * @default GridAddIcon
   */
  detailPanelExpandIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the detail panel toggle column when expanded.
   * @default GridRemoveIcon
   */
  detailPanelCollapseIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed for deleting the filter from filter panel.
   * @default GridAddIcon
   */
  filterPanelAddIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed for deleting the filter from filter panel.
   * @default GridDeleteIcon
   */
  filterPanelDeleteIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed for deleting all the active filters from filter panel.
   * @default GridDeleteForeverIcon
   */
  filterPanelRemoveAllIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the `reorder` column type to reorder a row.
   * @default GridDragIcon
   */
  rowReorderIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the quick filter input.
   * @default GridSearchIcon
   */
  quickFilterIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the quick filter reset input.
   * @default GridCloseIcon
   */
  quickFilterClearIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for hiding column
   * @default GridVisibilityOffIcon
   */
  columnMenuHideIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for ascending sort
   * @default GridArrowUpwardIcon
   */
  columnMenuSortAscendingIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for descending sort
   * @default GridArrowDownwardIcon
   */
  columnMenuSortDescendingIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for unsort
   * @default null
   */
  columnMenuUnsortIcon: React.JSXElementConstructor<IconProps> | null;
  /**
   * Icon displayed in column menu for filter
   * @default GridFilterAltIcon
   */
  columnMenuFilterIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for showing all columns
   * @default GridViewColumnIcon
   */
  columnMenuManageColumnsIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed in column menu for clearing values
   * @default GridClearIcon
   */
  columnMenuClearIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the input while processing.
   * @default GridLoadIcon
   */
  loadIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed on the column reorder button.
   * @default GridDragIcon
   */
  columnReorderIcon: React.JSXElementConstructor<IconProps>;
  /**
   * Icon displayed to indicate that a menu item is selected.
   * @default GridCheckIcon
   */
  menuItemCheckIcon: React.JSXElementConstructor<IconProps>;
}
