import { BlockRowModel } from "../blocksRows";

/**
 * Object passed as parameter of the row order change event.
 */
export interface BlocksRowOrderChangeParams {
  /**
   * The row data.
   */
  row: BlockRowModel;
  /**
   * The target row index.
   */
  targetIndex: number;
  /**
   * The old row index.
   */
  oldIndex: number;
}
