import { SetDataBlockEditorAction } from "../store";
import {
  DataBlockBase,
  DataBlockVariant,
  DataBlockVariantVote,
} from "./blocks";
import { DataBlockEditorPublicAction } from "./state";

export type SendDataBlockEditorUpdates =
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.AddBlock,
      {
        blocks: DataBlockBase[];
        index: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditBlock,
      {
        block: Omit<DataBlockBase, "variants">;
        variant: Omit<DataBlockVariant, "votes">;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.MoveBlock,
      {
        blockId: string;
        oldIndex: number;
        targetIndex: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.DeleteBlock,
      {
        blockId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.AddVariant,
      {
        blockId: string;
        variant: Omit<DataBlockVariant, "votes">;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditVariant,
      {
        blockId: string;
        variant: Omit<DataBlockVariant, "votes">;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.DeleteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.VoteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.UnVoteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >;

export type ReceiveDataBlockEditorUpdates =
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.AddBlock,
      {
        blocks: DataBlockBase[];
        index: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditBlock,
      {
        block: DataBlockBase;
        variant: DataBlockVariant;
        oldBlockId?: string;
        oldVariantId?: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.MoveBlock,
      {
        blockId: string;
        targetIndex: number;
        oldBlockId?: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.DeleteBlock,
      {
        blockId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.AddVariant,
      {
        blockId: string;
        variant: DataBlockVariant;
        oldBlockId?: string;
        oldVariantId?: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditVariant,
      {
        blockId: string;
        variant: DataBlockVariant;
        oldBlockId?: string;
        oldVariantId?: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.DeleteVariant,
      {
        blockId: string;
        variantId: string;
        oldBlockId?: string;
        oldVariantId?: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.VoteVariant,
      {
        blockId: string;
        variantId: string;
        oldBlockId?: string;
        oldVariantId?: string;
        vote: DataBlockVariantVote;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.UnVoteVariant,
      {
        blockId: string;
        variantId: string;
        oldBlockId?: string;
        oldVariantId?: string;
        createdBy: string;
      }
    >;
