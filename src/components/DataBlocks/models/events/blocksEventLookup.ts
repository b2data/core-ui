import * as React from "react";
import {
  BlocksFetchRowsParams,
  BlocksMenuParams,
  BlocksRowOrderChangeParams,
  BlocksRowParams,
  BlocksRowScrollEndParams,
  BlocksVariantParams,
} from "../params";
import { BaseEvent } from "./models";

export interface BlocksRowEventLookup {
  /**
   * Fired when a block row is clicked.
   * Not fired if the cell clicked is from an interactive column (actions, checkbox, etc).
   */
  rowClick: { params: BlocksRowParams; event: React.MouseEvent<HTMLElement> };
  /**
   * Fired when the user attempts to add new block variant to the row.
   */
  rowAddVariant: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user attempts to show all block variants in the row.
   */
  rowShowVariants: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user attempts to hide all block variants in the row.
   */
  rowHideVariants: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user attempts to open a context menu in the row.
   */
  rowContextMenu: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user attempts to append new block after the row.
   */
  rowAppendRow: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user attempts change current variant of the row.
   */
  rowSetCurrentVariant: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the mouse enters the row. Called with a [[BlocksRowParams]] object.
   */
  rowMouseEnter: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the mouse leaves the row. Called with a [[BlocksRowParams]] object.
   */
  rowMouseLeave: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * @ignore - do not document.
   */
  rowMouseOut: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * @ignore - do not document.
   */
  rowMouseOver: {
    params: BlocksRowParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when the user starts dragging a row.
   * It's mapped to the `dragstart` DOM event.
   * @ignore - do not document.
   */
  rowDragStart: {
    params: BlocksRowParams;
    event: React.DragEvent<HTMLElement>;
  };
  /**
   * Fired while an element or text selection is dragged over the row.
   * It's mapped to the `dragover` DOM event.
   * @ignore - do not document.
   */
  rowDragOver: {
    params: BlocksRowParams;
    event: React.DragEvent<HTMLElement>;
  };
  /**
   * Fired when the dragging of a row ends.
   * @ignore - do not document.
   */
  rowDragEnd: {
    params: BlocksRowParams;
    event: React.DragEvent<HTMLElement>;
  };
  /**
   * Fired when scrolling to the bottom of the grid viewport.
   */
  rowsScrollEnd: { params: BlocksRowScrollEndParams };
  /**
   * Fired when the user ends reordering a row.
   */
  rowOrderChange: { params: BlocksRowOrderChangeParams };
  /**
   * Fired when a new batch of rows is requested to be loaded. Called with a [[BlocksFetchRowsParams]] object.
   * Used to trigger `onFetchRows`.
   */
  fetchRows: { params: BlocksFetchRowsParams };
}

export interface BlocksVariantEventLookup {
  /**
   * Fired when a block variant is clicked.
   */
  variantClick: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a block variant is clicked.
   */
  variantLike: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a block variant is clicked.
   */
  variantUnlike: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a `mouseover` event happens in a column header.
   * @ignore - do not document.
   */
  variantOver: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a `mouseout` event happens in a column header.
   * @ignore - do not document.
   */
  variantOut: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a `mouseenter` event happens in a column header.
   * @ignore - do not document.
   */
  variantEnter: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a `mouseleave` event happens in a column header.
   * @ignore - do not document.*
   */
  variantLeave: {
    params: BlocksVariantParams;
    event: React.MouseEvent<HTMLElement>;
  };
  /**
   * Fired when a key is pressed in a column header. It's mapped do the `keydown` DOM event.
   */
  variantKeyDown: {
    params: BlocksVariantParams;
    event: React.KeyboardEvent<HTMLElement>;
  };
  /**
   * Fired when a column header gains focus.
   * @ignore - do not document.
   */
  variantFocus: {
    params: BlocksVariantParams;
    event: React.FocusEvent<HTMLElement>;
  };
  /**
   * Fired when a column header loses focus.
   * @ignore - do not document.
   */
  variantBlur: {
    params: BlocksVariantParams;
    event: React.FocusEvent<HTMLElement>;
  };
}

export interface BlocksEventLookup
  extends BlocksRowEventLookup,
    BlocksVariantEventLookup {
  /**
   * Fired when the grid is unmounted.
   */
  unmount: {};
  /**
   * Fired when the state of the grid is updated.
   */
  stateChange: { params: any };

  // Rows
  /**
   * Fired when the rows are updated.
   * @ignore - do not document.
   */
  rowsSet: {};

  // Focus
  /**
   * Fired when a block variant gains focus.
   * @ignore - do not document.
   */
  variantFocusIn: { params: BlocksVariantParams<any> };
  /**
   * Fired when a block variant loses focus.
   * @ignore - do not document.
   */
  variantFocusOut: { params: BlocksVariantParams<any>; event: BaseEvent };

  // Scroll
  /**
   * Fired during the scroll of the grid viewport.
   */
  scrollPositionChange: {
    // params: BlocksScrollParams;
    params: {};
    event: React.UIEvent | BaseEvent;
  };
  /**
   * Fired when the content size used by the `BlocksVirtualScroller` changes.
   * @ignore - do not document.
   */
  virtualScrollerContentSizeChange: {};
  /**
   * Fired when the content is scrolled by the mouse wheel.
   * It's attached to the "mousewheel" event.
   * @ignore - do not document.
   */
  virtualScrollerWheel: { params: {}; event: React.WheelEvent };
  /**
   * Fired when the content is moved using a touch device.
   * It's attached to the "touchmove" event.
   * @ignore - do not document.
   */
  virtualScrollerTouchMove: { params: {}; event: React.TouchEvent };

  // Clipboard
  /**
   * Fired when the data is copied to the clipboard.
   */
  clipboardCopy: { params: string };

  // Menu
  /**
   * Fired when the menu is opened.
   */
  menuOpen: { params: BlocksMenuParams };
  /**
   * Fired when the menu is closed.
   */
  menuClose: { params: BlocksMenuParams };

  // Add Popover
  /**
   * Fired when the add popover is opened.
   */
  addPopoverOpen: { params: BlocksMenuParams };
  /**
   * Fired when the add popover is closed.
   */
  addPopoverClose: { params: BlocksMenuParams };
}

export type BlocksEvents = keyof BlocksEventLookup;
