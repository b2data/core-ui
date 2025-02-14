import { DataBlockProps } from "../../DataBlock";

import { DataBlockEditorTranslations } from "./i18n";
import { DataBlockBase, DataBlockType } from "./blocks";
import { DataBlockTool } from "./tools";
import { SendDataBlockEditorUpdates } from "./updates";

export type DataBlockEditorOnChangeCallback = (
  data: SendDataBlockEditorUpdates,
) => void;

export type DataBlockEditorState = {
  editable: boolean;
  showPrefix: boolean;
  showVariants?: boolean;
  showNavigation?: boolean;
  showIndentOffset?: boolean;
  canChangeVariants?: boolean;
  currentUserId?: string;
  getFilesUrl: (id: string) => string;
  i18n: DataBlockEditorTranslations;
  blocks: DataBlockBase[];
  tools: Record<DataBlockType, DataBlockTool>;
  prefixes: Record<string, string | null>;
  maxPrefixLength: number;
  focused?: number;
  focusedEnd?: boolean;
  onChange?: DataBlockEditorOnChangeCallback;
  keymap: DataBlockProps["customKeymap"];
  mdProps: DataBlockProps["mdProps"];
};

export enum DataBlockEditorPublicAction {
  AddBlock = "addBlock",
  MoveBlock = "moveBlock",
  EditBlock = "editBlock",
  DeleteBlock = "deleteBlock",
  AddVariant = "addVariant",
  EditVariant = "editVariant",
  DeleteVariant = "deleteVariant",
  VoteVariant = "voteVariant",
  UnVoteVariant = "unVoteVariant",
}
