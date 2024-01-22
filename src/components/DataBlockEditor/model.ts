import { SxProps } from "@mui/material";
import { ReactNode, UIEventHandler } from "react";

import { DataBlockEditorAction } from "./store";

export enum DataBlockType {
  Paragraph = "paragraph",
  Header = "header",
}

export enum DataBlockAlign {
  Left = "left",
  Right = "right",
  Center = "center",
  Justify = "justify",
}

export type DataBlockEditorTranslations = {
  addBtnTooltip: string | ReactNode;
  moreBtnTooltip: string | ReactNode;
  showVariantsTooltip: string | ReactNode;
  closeVariantsTooltip: string | ReactNode;
  addVariantTooltip: string | ReactNode;
  deleteVariantTooltip: string | ReactNode;
  swapCurrentVariantTooltip: string | ReactNode;
  emptyPlaceholder: string;
  filterPlaceholder: string;
  noResults: string;
  blocks: Record<DataBlockType, string>;
  indent: {
    increase: string;
    decrease: string;
  };
  deleteBlock: {
    default: string;
    clickToDelete: string;
  };
  align: {
    title: string;
    left: string;
    right: string;
    center: string;
    justify: string;
  };
};

type UserData = {
  id: string;
  avatar?: string;
  lastName?: string;
  firstName: string;
  middleName?: string;
};

export type DataBlockVariant<Data = Record<string, any>> = {
  id: string;
  data: Data;
  isCurrent: boolean;
  createdBy?: string;
  createdByData?: UserData;
  votes: {
    createdBy: string;
    createdByData?: UserData;
    createdAt: Date;
  }[];
};

type DataBlockBase<T = DataBlockType, Data = Record<string, any>> = {
  id: string;
  type: T | string;
  offset: number;
  number: number;
  isTemplate?: boolean;
  createdBy?: string;
  createdByData?: UserData;
  variants: DataBlockVariant<Data>[];
};

export type DataBlockHeader = DataBlockBase<
  DataBlockType.Header,
  {
    text?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    align?: DataBlockAlign;
  }
>;

export type DataBlockParagraph = DataBlockBase<
  DataBlockType.Paragraph,
  {
    text?: string;
    align?: DataBlockAlign;
  }
>;

export type DataBlockModel = DataBlockHeader | DataBlockParagraph;

type onChangeCallback = (
  action: DataBlockEditorAction,
  data: {
    block?: Omit<DataBlockModel, "variants">;
    variant?: Omit<DataBlockVariant, "votes">;
    index?: number;
    oldIndex?: number;
    targetIndex?: number;
  },
) => void;

export type DataBlockEditorState = {
  editable: boolean;
  showPrefix: boolean;
  showVariants?: boolean;
  canChangeVariants?: boolean;
  currentUserId?: string;
  types: DataBlockType[];
  i18n: DataBlockEditorTranslations;
  prefixes: Record<string, string>;
  blocks: DataBlockModel[];
  maxPrefixLength: number;
  focused?: number;
  onChange?: onChangeCallback;
};

export interface DataBlockEditorRef {
  setFocused: (index?: number) => void;
  getState: () => DataBlockEditorState;
}

export type DataBlockEditorProps = {
  /**
   * Set `editable` or readonly mode
   */
  editable?: boolean;
  /**
   * Show prefixes for each block
   */
  showPrefix?: boolean;
  /**
   * Always show blocks variants
   */
  showVariants?: boolean;
  /**
   * Allows to change current variant
   */
  canChangeVariants?: boolean;
  /**
   * Used to determinate whitch `vote` related to user.
   */
  currentUserId?: string;
  /**
   * Show only specific block type (by default - all)
   */
  types?: DataBlockType[];
  /**
   * Translations
   */
  i18n?: DataBlockEditorTranslations;
  /**
   * Blocks data
   */
  blocks?: DataBlockModel[];
  /**
   * Prefixes data
   */
  prefixes?: Record<string, string>;
  /**
   * Callback `onChange` action
   * - action: DataBlockEditorAction;
   * - data: { block?: DataBlockModel; oldIndex?: number; targetIndex?: number; };
   */
  onChange?: onChangeCallback;
  /**
   * Scroll event handler
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * sx props
   */
  sx?: SxProps;
};

export { DataBlockEditorAction };
