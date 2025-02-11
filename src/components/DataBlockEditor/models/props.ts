import { UIEventHandler } from "react";
import { SxProps } from "@mui/material";

import { DataBlockProps } from "../../DataBlock";

import { DataBlockBase, DataBlockType } from "./blocks";
import { DataBlockEditorState, onChangeCallback } from "./state";
import { DataBlockEditorTranslations } from "./i18n";
import { DataBlockTool } from "./tools";
import { ReceiveDataBlockEditorUpdates } from "./updates";

export interface DataBlockEditorApi {
  setFocused: (index?: number, focusedEnd?: boolean) => void;
  updateData: (data: ReceiveDataBlockEditorUpdates) => void;
  getState: () => DataBlockEditorState;
}

export type DataBlockEditorProps<T extends DataBlockBase = DataBlockBase> = {
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
   * Show navigation
   */
  showNavigation?: boolean;
  /**
   * Apply offset for indent of blocks
   */
  showIndentOffset?: boolean;
  /**
   * Allows to change current variant
   */
  canChangeVariants?: boolean;
  /**
   * Used to determinate which `vote` related to user.
   */
  currentUserId?: string;
  /**
   * URL to files
   */
  getFilesUrl: (id: string) => string;
  /**
   * Translations
   */
  i18n?: DataBlockEditorTranslations;
  /**
   * Blocks data
   */
  blocks: T[];
  /**
   * Tools components to render variant
   */
  tools?: Record<DataBlockType, DataBlockTool>;
  /**
   * Callback `onChange` action
   * - action: DataBlockEditorAction;
   * - data: { block?: DataBlockBase; variant?: DataBlockVariant; index?: number; oldIndex?: number; targetIndex?: number; };
   */
  onChange?: onChangeCallback;
  /**
   * Scroll event handler
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * Custom keymap for editor
   */
  keymap?: DataBlockProps["customKeymap"];
  /**
   * Props for the markdown plugin
   */
  mdProps?: DataBlockProps["mdProps"];
  /**
   * sx props
   */
  sx?: SxProps;
};
