import * as React from "react";

export interface GridIconSlotsComponentCustom {
  /**
   * Icon displayed in column menu for left pinning
   * @default GridPushPinLeftIcon
   */
  ColumnMenuPinLeftIcon: React.JSXElementConstructor<any>;
  /**
   * Icon displayed in column menu for right pinning
   * @default GridPushPinRightIcon
   */
  ColumnMenuPinRightIcon: React.JSXElementConstructor<any>;
}
