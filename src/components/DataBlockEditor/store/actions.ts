import { DataBlockProps } from "../../DataBlock";
import {
  DataBlockBase,
  DataBlockEditorPublicAction,
  DataBlockEditorTranslations,
  DataBlockTool,
  DataBlockType,
  DataBlockUserData,
  DataBlockVariant,
  ReceiveDataBlockEditorUpdates,
} from "../models";

export enum DataBlockEditorPrivateAction {
  Clear = "clear",
  SetEditable = "setEditable",
  SetTranslations = "setTranslations",
  SetTools = "setTools",
  SetBlocks = "setBlocks",
  SetShowPrefix = "setShowPrefix",
  SetShowVariants = "setShowVariants",
  SetShowNavigation = "setShowNavigation",
  SetShowIndentOffset = "setShowIndentOffset",
  SetFocused = "setFocused",
  SetCanChangeVariants = "setCanChangeVariants",
  SetCurrentUser = "setCurrentUser",
  SetKeymap = "setKeymap",
  SetMdProps = "setMdProps",
  MergeUpdates = "mergeUpdate",
}

export type SetDataBlockEditorAction<
  T extends DataBlockEditorPrivateAction | DataBlockEditorPublicAction,
  Data extends Record<string, unknown>,
> = { action: T; data: Data };

type Clear = SetDataBlockEditorAction<DataBlockEditorPrivateAction.Clear, {}>;

type SetEditable = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetEditable,
  { editable: boolean }
>;

type SetTranslations = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetTranslations,
  { i18n: DataBlockEditorTranslations }
>;

type SetTools = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetTools,
  { tools: Record<DataBlockType, DataBlockTool> }
>;

type SetShowPrefix = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetShowPrefix,
  { showPrefix: boolean }
>;

type SetShowVariants = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetShowVariants,
  { showVariants: boolean }
>;

type SetShowNavigation = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetShowNavigation,
  { showNavigation: boolean }
>;

type SetShowIndentOffset = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetShowIndentOffset,
  { showIndentOffset: boolean }
>;

type SetCanChangeVariants = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetCanChangeVariants,
  { canChangeVariants: boolean }
>;

type SetCurrentUser = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetCurrentUser,
  { currentUser: DataBlockUserData }
>;

type SetBlocks = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetBlocks,
  { blocks: DataBlockBase[] }
>;

type SetFocused = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetFocused,
  { index?: number; focusedEnd?: boolean }
>;

type SetKeymap = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetKeymap,
  { keymap: DataBlockProps["customKeymap"] }
>;

type SetMdProps = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.SetMdProps,
  { mdProps: DataBlockProps["mdProps"] }
>;

type MergeUpdates = SetDataBlockEditorAction<
  DataBlockEditorPrivateAction.MergeUpdates,
  ReceiveDataBlockEditorUpdates
>;

//////////

type AddBlock = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.AddBlock,
  {
    blocks: DataBlockBase[];
    index: number;
  }
>;

type EditBlock = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.EditBlock,
  {
    block: Omit<DataBlockBase, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
  }
>;

type MoveBlock = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.MoveBlock,
  {
    blockId: string;
    oldIndex: number;
    targetIndex: number;
  }
>;

type DeleteBlock = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.DeleteBlock,
  { blockId: string }
>;

type AddVariant = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.AddVariant,
  {
    blockId: string;
    variant: Omit<DataBlockVariant, "votes">;
  }
>;

type EditVariant = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.EditVariant,
  {
    blockId: string;
    variant: Omit<DataBlockVariant, "votes">;
  }
>;

type DeleteVariant = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.DeleteVariant,
  {
    blockId: string;
    variantId: string;
  }
>;

type VoteVariant = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.VoteVariant,
  {
    blockId: string;
    variantId: string;
    createdByData: DataBlockUserData;
  }
>;

type UnVoteVariant = SetDataBlockEditorAction<
  DataBlockEditorPublicAction.UnVoteVariant,
  {
    blockId: string;
    variantId: string;
    createdByData: DataBlockUserData;
  }
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
  | SetCurrentUser
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
