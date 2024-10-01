import {
  DataBlockEditorTranslations,
  DataBlockModel,
  DataBlockType,
  DataBlockVariant,
} from "../model";

export enum DataBlockEditorAction {
  Clear = "clear",
  SetEditable = "setEditable",
  SetTranslations = "setTranslations",
  SetTypes = "setTypes",
  SetBlocks = "setBlocks",
  SetShowPrefix = "setShowPrefix",
  SetShowVariants = "setShowVariants",
  SetPrefixes = "setPrefixes",
  SetFocused = "setFocused",
  SetCanChangeVariants = "setCanChangeVariants",
  SetCurrentUserId = "setCurrentUserId",
  SetGetFilesUrl = "setGetFilesUrl",

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
> = { action: T } & Data;

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

type SetTypes = SetDataBlockEditorAction<
  DataBlockEditorAction.SetTypes,
  { types: DataBlockType[] }
>;

type SetShowPrefix = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowPrefix,
  { showPrefix: boolean }
>;

type SetShowVariants = SetDataBlockEditorAction<
  DataBlockEditorAction.SetShowVariants,
  { showVariants: boolean }
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

type SetPrefixes = SetDataBlockEditorAction<
  DataBlockEditorAction.SetPrefixes,
  { prefixes: Record<string, string> }
>;

type SetBlocks = SetDataBlockEditorAction<
  DataBlockEditorAction.SetBlocks,
  { blocks: DataBlockModel[] }
>;

type SetFocused = SetDataBlockEditorAction<
  DataBlockEditorAction.SetFocused,
  { index?: number }
>;

type AddBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.AddBlock,
  {
    block: Omit<DataBlockModel, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
    index: number;
  }
>;

type EditBlock = SetDataBlockEditorAction<
  DataBlockEditorAction.EditBlock,
  {
    block: Omit<DataBlockModel, "variants">;
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
  | SetTypes
  | SetShowPrefix
  | SetShowVariants
  | SetCanChangeVariants
  | SetCurrentUserId
  | SetGetFilesUrl
  | SetPrefixes
  | SetBlocks
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
