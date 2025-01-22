/**
 * Object passed as parameter in the onRowsScrollEnd callback.
 */
export interface BlocksRowScrollEndParams {
  /**
   * The number of rows that fit in the viewport.
   */
  viewportPageSize: number;
  /**
   * The number of rows allocated for the rendered zone.
   */
  visibleRowsCount: number;
}
