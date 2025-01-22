import { BlockRowModel, BlockValidModel } from "../blocksRows";

/**
 * Object passed as parameter in the row callbacks.
 * @demos
 *   - [Master detail](/x/react-data-grid/master-detail/)
 */
export interface BlocksVariantParams<R extends BlockValidModel = any> {
  /**
   * The grid row id.
   */
  id: string;
  /**
   * The variant of the row.
   */
  variant: R;
  /**
   * Row data.
   */
  row: BlockRowModel;
}
