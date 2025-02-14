import { SetDataBlockEditorAction } from "../store";

import { DataBlockBase, DataBlockUserData, DataBlockVariant } from "./blocks";
import { DataBlockEditorPublicAction } from "./state";

export type SendDataBlockEditorUpdates =
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.AddBlock,
      {
        block: Omit<DataBlockBase, "variants" | "createdByData">;
        variant: Pick<
          DataBlockVariant,
          "id" | "data" | "isCurrent" | "createdBy"
        >;
        index: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditBlock,
      {
        block: Omit<DataBlockBase, "variants" | "createdByData">;
        variant: Pick<
          DataBlockVariant,
          "id" | "data" | "isCurrent" | "createdBy"
        >;
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
        variant: Pick<
          DataBlockVariant,
          "id" | "data" | "isCurrent" | "createdBy"
        >;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorPublicAction.EditVariant,
      {
        blockId: string;
        variant: Pick<DataBlockVariant, "id" | "data" | "isCurrent">;
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
        block: DataBlockBase;
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
        vote: {
          createdBy: string;
          createdByData: DataBlockUserData;
          createdAt: Date;
        };
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
