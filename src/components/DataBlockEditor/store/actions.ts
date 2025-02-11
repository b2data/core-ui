import { DataBlockProps } from "../../DataBlock";
import {
  DataBlockBase,
  DataBlockEditorTranslations,
  DataBlockTool,
  DataBlockType,
  DataBlockVariant,
  ReceiveDataBlockEditorUpdates,
} from "../models";

export enum DataBlockEditorAction {
  Clear = "clear",
  SetEditable = "setEditable",
  SetTranslations = "setTranslations",
  SetTools = "SetTools",
  SetBlocks = "setBlocks",
  SetShowPrefix = "setShowPrefix",
  SetShowVariants = "setShowVariants",
  SetShowNavigation = "setShowNavigation",
  SetShowIndentOffset = "setShowIndentOffset",
  SetFocused = "setFocused",
  SetCanChangeVariants = "setCanChangeVariants",
  SetCurrentUserId = "setCurrentUserId",
  SetGetFilesUrl = "setGetFilesUrl",
  SetKeymap = "setKeymap",
  SetMdProps = "setMdProps",
  MergeUpdates = "mergeUpdate",

  // Actions for callback
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

export type SetDataBlockEditorAction<
  T extends DataBlockEditorAction,
  Data extends Record<string, unknown>,
> = { action: T; data: Data };

type Clear = SetDataBlockEditorAction<
  DataBlockEditorAction.Clear,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {}
>;

type SetEditable = SetDataBlockEditorAction<
  DataBlockEditorAction.SetEditable,
  { editable: boolean }
>;

type SetTranslations = SetDataBlockEditorAction<
  DataBlockEditorAction.SetTranslations,
  { i18n: DataBlockEditorTranslations }
>;

type SetTools = SetDataBlockEditorAction<
  DataBlockEditorAction.SetTools,
  { tools: Record<DataBlockType, DataBlockTool> }
>;

type SetShowPrefix = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowPrefix,
  { showPrefix: boolean }
>;

type SetShowVariants = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowVariants,
  { showVariants: boolean }
>;

type SetShowNavigation = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowNavigation,
  { showNavigation: boolean }
>;

type SetShowIndentOffset = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowIndentOffset,
  { showIndentOffset: boolean }
>;

type SetCanChangeVariants = SetDataBlockEditorAction<
  DataBlockEditorAction.SetCanChangeVariants,
  { canChangeVariants: boolean }
>;

type SetCurrentUserId = SetDataBlockEditorAction<
  DataBlockEditorAction.SetCurrentUserId,
  { currentUserId: string }
>;

type SetGetFilesUrl = SetDataBlockEditorAction<
  DataBlockEditorAction.SetGetFilesUrl,
  { getFilesUrl: (id: string) => string }
>;

type SetBlocks = SetDataBlockEditorAction<
  DataBlockEditorAction.SetBlocks,
  { blocks: DataBlockBase[] }
>;

type SetFocused = SetDataBlockEditorAction<
  DataBlockEditorAction.SetFocused,
  { index?: number; focusedEnd?: boolean }
>;

type SetKeymap = SetDataBlockEditorAction<
  DataBlockEditorAction.SetKeymap,
  { keymap: DataBlockProps["customKeymap"] }
>;

type SetMdProps = SetDataBlockEditorAction<
  DataBlockEditorAction.SetMdProps,
  { mdProps: DataBlockProps["mdProps"] }
>;

type MergeUpdates = SetDataBlockEditorAction<
  DataBlockEditorAction.MergeUpdates,
  ReceiveDataBlockEditorUpdates
>;

//////////

type AddBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.AddBlock,
  {
    block: Omit<DataBlockBase, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
    index: number;
  }
>;

type EditBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.EditBlock,
  {
    block: Omit<DataBlockBase, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
  }
>;

type MoveBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.MoveBlock,
  { id: string; oldIndex: number; targetIndex: number }
>;

type DeleteBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.DeleteBlock,
  { id: string }
>;

type AddVariant = SetDataBlockEditorAction<
  DataBlockEditorAction.AddVariant,
  { id: string; variant: Omit<DataBlockVariant, "votes"> }
>;

type EditVariant = SetDataBlockEditorAction<
  DataBlockEditorAction.EditVariant,
  { id: string; variant: Omit<DataBlockVariant, "votes"> }
>;

type DeleteVariant = SetDataBlockEditorAction<
  DataBlockEditorAction.DeleteVariant,
  { id: string; variantId: string }
>;

type VoteVariant = SetDataBlockEditorAction<
  DataBlockEditorAction.VoteVariant,
  { id: string; variantId: string; createdBy: string }
>;

type UnVoteVariant = SetDataBlockEditorAction<
  DataBlockEditorAction.UnVoteVariant,
  { id: string; variantId: string; createdBy: string }
>;

export type DataBlockEditorActions =
  | Clear
  | SetEditable
  | SetTranslations
  | SetTools
  | SetShowPrefix
  | SetShowVariants
  | SetShowNavigation
  | SetShowIndentOffset
  | SetCanChangeVariants
  | SetCurrentUserId
  | SetGetFilesUrl
  | SetBlocks
  | SetKeymap
  | SetMdProps
  | MergeUpdates
  | AddBlock
  | EditBlock
  | MoveBlock
  | DeleteBlock
  | SetFocused
  | AddVariant
  | EditVariant
  | DeleteVariant
  | VoteVariant
  | UnVoteVariant;
