export type BlockValidModel = { [key: string | symbol]: any };

export type BlocksRowProp<R extends BlockValidModel = BlockValidModel> =
  Readonly<BlockRowModel<R>[]>;

/**
 * The key value object representing the data of a block.
 */
export type BlockRowModel<R extends BlockValidModel = BlockValidModel> = R;

export interface BlocksRowEntry<R extends BlockValidModel = BlockValidModel> {
  /**
   * The row id.
   */
  id: string;
  /**
   * The row model.
   */
  model: R;
}

/**
 * The function to retrieve the id of a [[GridRowModel]].
 */
export type BlocksRowIdGetter<R extends BlockValidModel = BlockValidModel> = (
  row: R,
) => string;
