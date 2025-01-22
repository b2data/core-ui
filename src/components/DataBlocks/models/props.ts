import { BlockValidModel } from "./blocksRows";

export type DataBlockProps<R extends BlockValidModel = any> = {
  // /**
  //  * Set `editable` or readonly mode
  //  */
  // editable?: boolean;
  // /**
  //  * Show prefixes for each block
  //  */
  // showPrefix?: boolean;
  // /**
  //  * Always show blocks variants
  //  */
  // showVariants?: boolean;
  // /**
  //  * Allows to change current variant
  //  */
  // canChangeVariants?: boolean;
  // /**
  //  * Used to determinate which `vote` related to user.
  //  */
  // currentUserId?: string;
  // /**
  //  * URL to files
  //  */
  // getFilesUrl: (id: string) => string;
  // /**
  //  * Show only specific block type (by default - all)
  //  */
  // types?: DataBlockType[];
  // /**
  //  * Translations
  //  */
  // i18n?: DataBlockTranslations;
  // /**
  //  * Blocks data
  //  */
  // blocks?: DataBlockModel[];
  // /**
  //  * Prefixes data
  //  */
  // prefixes?: Record<string, string>;
  // /**
  //  * Callback `onChange` action
  //  * - action: DataBlockAction;
  //  * - data: { block?: DataBlockModel; oldIndex?: number; targetIndex?: number; };
  //  */
  // onChange?: onChangeCallback;
  // /**
  //  * Scroll event handler
  //  */
  // onScroll?: UIEventHandler<HTMLDivElement>;
  // /**
  //  * sx props
  //  */
  // sx?: SxProps;
};
