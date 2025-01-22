import { BlockValidModel } from "../blocksRows";

/**
 * Object passed as parameter in the row callbacks.
 */
export interface BlocksRowParams<R extends BlockValidModel = any> {
  /**
   * The  row id.
   */
  id: string;
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: R;
}
