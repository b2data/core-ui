import { DataBlockEditorAction, SetDataBlockEditorAction } from "../store";

import { DataBlockBase, DataBlockUserData, DataBlockVariant } from "./blocks";

export type SendDataBlockEditorUpdates =
  | SetDataBlockEditorAction<
      DataBlockEditorAction.AddBlock,
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
      DataBlockEditorAction.EditBlock,
      {
        block: Omit<DataBlockBase, "variants" | "createdByData">;
        variant: Pick<
          DataBlockVariant,
          "id" | "data" | "isCurrent" | "createdBy"
        >;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.MoveBlock,
      {
        blockId: string;
        oldIndex: number;
        targetIndex: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.DeleteBlock,
      {
        blockId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.AddVariant,
      {
        blockId: string;
        variant: Pick<
          DataBlockVariant,
          "id" | "data" | "isCurrent" | "createdBy"
        >;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.EditVariant,
      {
        blockId: string;
        variant: Pick<DataBlockVariant, "id" | "data" | "isCurrent">;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.DeleteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.VoteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.UnVoteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >;

export type ReceiveDataBlockEditorUpdates =
  | SetDataBlockEditorAction<
      DataBlockEditorAction.AddBlock,
      {
        block: DataBlockBase;
        index: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.EditBlock,
      {
        block: DataBlockBase;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.MoveBlock,
      {
        blockId: string;
        oldIndex: number;
        targetIndex: number;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.DeleteBlock,
      {
        blockId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.AddVariant,
      {
        blockId: string;
        variant: DataBlockVariant;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.EditVariant,
      {
        blockId: string;
        variant: DataBlockVariant;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.DeleteVariant,
      {
        blockId: string;
        variantId: string;
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.VoteVariant,
      {
        blockId: string;
        variantId: string;
        vote: {
          createdBy: string;
          createdByData: DataBlockUserData;
          createdAt: Date;
        };
      }
    >
  | SetDataBlockEditorAction<
      DataBlockEditorAction.UnVoteVariant,
      {
        blockId: string;
        variantId: string;
        createdBy: string;
      }
    >;
