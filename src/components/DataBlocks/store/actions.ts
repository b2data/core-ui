import {
  DataBlockTranslations,
  DataBlockModel,
  DataBlockType,
  DataBlockVariant,
} from "../model";

export enum DataBlockAction {
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

export type SetDataBlockAction<
  T extends DataBlockAction,
  Data extends Record<string, unknown>,
> = { action: T } & Data;

type Clear = SetDataBlockAction<
  DataBlockAction.Clear,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {}
>;

type SetEditable = SetDataBlockAction<
  DataBlockAction.SetEditable,
  { editable: boolean }
>;

type SetTranslations = SetDataBlockAction<
  DataBlockAction.SetTranslations,
  { i18n: DataBlockTranslations }
>;

type SetTypes = SetDataBlockAction<
  DataBlockAction.SetTypes,
  { types: DataBlockType[] }
>;

type SetShowPrefix = SetDataBlockAction<
  DataBlockAction.SetShowPrefix,
  { showPrefix: boolean }
>;

type SetShowVariants = SetDataBlockAction<
  DataBlockAction.SetShowVariants,
  { showVariants: boolean }
>;

type SetCanChangeVariants = SetDataBlockAction<
  DataBlockAction.SetCanChangeVariants,
  { canChangeVariants: boolean }
>;

type SetCurrentUserId = SetDataBlockAction<
  DataBlockAction.SetCurrentUserId,
  { currentUserId: string }
>;

type SetGetFilesUrl = SetDataBlockAction<
  DataBlockAction.SetGetFilesUrl,
  { getFilesUrl: (id: string) => string }
>;

type SetPrefixes = SetDataBlockAction<
  DataBlockAction.SetPrefixes,
  { prefixes: Record<string, string> }
>;

type SetBlocks = SetDataBlockAction<
  DataBlockAction.SetBlocks,
  { blocks: DataBlockModel[] }
>;

type SetFocused = SetDataBlockAction<
  DataBlockAction.SetFocused,
  { index?: number }
>;

type AddBlock = SetDataBlockAction<
  DataBlockAction.AddBlock,
  {
    block: Omit<DataBlockModel, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
    index: number;
  }
>;

type EditBlock = SetDataBlockAction<
  DataBlockAction.EditBlock,
  {
    block: Omit<DataBlockModel, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
  }
>;

type MoveBlock = SetDataBlockAction<
  DataBlockAction.MoveBlock,
  { id: string; oldIndex: number; targetIndex: number }
>;

type DeleteBlock = SetDataBlockAction<
  DataBlockAction.DeleteBlock,
  { id: string }
>;

type AddVariant = SetDataBlockAction<
  DataBlockAction.AddVariant,
  { id: string; variant: Omit<DataBlockVariant, "votes"> }
>;

type EditVariant = SetDataBlockAction<
  DataBlockAction.EditVariant,
  { id: string; variant: Omit<DataBlockVariant, "votes"> }
>;

type DeleteVariant = SetDataBlockAction<
  DataBlockAction.DeleteVariant,
  { id: string; variantId: string }
>;

type VoteVariant = SetDataBlockAction<
  DataBlockAction.VoteVariant,
  { id: string; variantId: string; createdBy: string }
>;

type UnVoteVariant = SetDataBlockAction<
  DataBlockAction.UnVoteVariant,
  { id: string; variantId: string; createdBy: string }
>;

export type DataBlockActions =
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
