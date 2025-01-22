/**
 * Object passed as parameter to the [[onFetchRows]] option.
 */
export interface BlocksFetchRowsParams {
  /**
   * The index of the first row to render.
   */
  firstRowToRender: number;
  /**
   * The index of the last row to render.
   */
  lastRowToRender: number;
}
