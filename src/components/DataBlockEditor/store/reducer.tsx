import { equals, omit, pick } from "ramda";

import {
  DataBlockBase,
  DataBlockEditorPublicAction,
  DataBlockEditorState,
} from "../models";
import { getPrefixesData } from "../utils";

import {
  DataBlockEditorActions,
  DataBlockEditorPrivateAction,
} from "./actions";

export const initialState: DataBlockEditorState = {
  editable: false,
  showPrefix: false,
  showVariants: false,
  focused: 0,
  focusedEnd: false,
  canChangeVariants: false,
  currentUserId: undefined,
  getFilesUrl: () => "/",
  blocks: [],
  tools: {},
  prefixes: {},
  maxPrefixLength: 1,
  onChange: undefined,
  i18n: {
    addBtnTooltip: "Add",
    moreBtnTooltip: (
      <>
        <b>Click</b> to open meny
        <br /> <b>Drag</b> to move
      </>
    ),
    showVariantsTooltip: "Show variants",
    closeVariantsTooltip: "Close variants",
    addVariantTooltip: "Add variant",
    deleteVariantTooltip: "Delete variant",
    swapCurrentVariantTooltip: "Swap current variant",
    emptyPlaceholder: "Type text",
    addBtnFilter: "Filter",
    noResults: "No results",
    indent: {
      increase: "Increase offset",
      decrease: "Decrease offset",
    },
    deleteBlock: {
      default: "Delete",
      clickToDelete: "Click to delete",
    },
  },
  keymap: [],
  mdProps: {},
};

export type DataBlockEditorStateReducer = (
  state: DataBlockEditorState,
  action: DataBlockEditorActions,
) => DataBlockEditorState;

export const dataBlockEditorStateReducer: DataBlockEditorStateReducer = (
  state = initialState,
  { action, data },
): DataBlockEditorState => {
  switch (action) {
    case DataBlockEditorPrivateAction.SetEditable: {
      return { ...state, editable: data.editable };
    }

    case DataBlockEditorPrivateAction.SetShowPrefix: {
      return { ...state, showPrefix: data.showPrefix };
    }

    case DataBlockEditorPrivateAction.SetShowVariants: {
      return { ...state, showVariants: data.showVariants };
    }

    case DataBlockEditorPrivateAction.SetShowNavigation: {
      return { ...state, showNavigation: data.showNavigation };
    }

    case DataBlockEditorPrivateAction.SetShowIndentOffset: {
      return { ...state, showIndentOffset: data.showIndentOffset };
    }

    case DataBlockEditorPrivateAction.SetTranslations: {
      return { ...state, i18n: data.i18n };
    }

    case DataBlockEditorPrivateAction.SetCanChangeVariants: {
      return { ...state, canChangeVariants: data.canChangeVariants };
    }

    case DataBlockEditorPrivateAction.SetCurrentUserId: {
      return { ...state, currentUserId: data.currentUserId };
    }

    case DataBlockEditorPrivateAction.SetFocused: {
      return { ...state, focused: data.index, focusedEnd: data.focusedEnd };
    }

    case DataBlockEditorPrivateAction.SetBlocks: {
      return {
        ...state,
        ...getPrefixesData(data.blocks),
        blocks: data.blocks,
      };
    }

    case DataBlockEditorPrivateAction.SetTools: {
      return {
        ...state,
        tools: data.tools,
      };
    }

    case DataBlockEditorPrivateAction.SetKeymap: {
      return {
        ...state,
        keymap: data.keymap,
      };
    }

    case DataBlockEditorPrivateAction.SetMdProps: {
      return {
        ...state,
        mdProps: data.mdProps,
      };
    }

    /*************
     *  UPDATES  *
     ************/

    case DataBlockEditorPublicAction.AddBlock: {
      const { block, variant, index } = data;
      const blocks = [...state.blocks];

      blocks.splice(index, 0, {
        ...block,
        createdBy: state.currentUserId,
        variants: [{ ...variant, createdBy: state.currentUserId, votes: [] }],
      } as DataBlockBase);

      state.onChange?.({
        action: DataBlockEditorPublicAction.AddBlock,
        data: {
          block: omit(["createdByData"], block),
          variant: pick(["id", "data", "isCurrent", "createdBy"], variant),
          index,
        },
      });

      return {
        ...state,
        ...getPrefixesData(blocks),
        blocks,
        focused: index,
        focusedEnd: true,
      };
    }

    case DataBlockEditorPublicAction.EditBlock: {
      const { block, variant } = data;
      const index = state.blocks.findIndex((b) => b.id === block.id);

      if (index > -1) {
        const blocks = [...state.blocks];
        const variants = [...blocks[index].variants];
        const index2 = variants.findIndex((v) => v.id === variant.id);

        block.offset =
          !state.prefixes[block.id] && blocks[index].offset < block.offset
            ? blocks[index].offset
            : block.offset;

        if (index2 > -1) {
          variants.splice(index2, 1, {
            ...variants[index2],
            ...variant,
            data: {
              ...variants[index2].data,
              ...variant.data,
            },
          });
        }

        blocks.splice(index, 1, { ...blocks[index], ...block, variants });

        state.onChange?.({
          action: DataBlockEditorPublicAction.EditBlock,
          data: {
            block: omit(["createdByData"], block),
            variant: pick(["id", "data", "isCurrent", "createdBy"], variant),
          },
        });

        return {
          ...state,
          ...getPrefixesData(blocks),
          blocks,
        };
      }

      return state;
    }

    case DataBlockEditorPublicAction.MoveBlock: {
      const { blockId, oldIndex, targetIndex } = data;
      if (state.blocks[oldIndex]?.id === blockId) {
        const blocks = [...state.blocks];
        const data = blocks.splice(oldIndex, 1);
        const newBlock = {
          ...data[0],
          offset: blocks[targetIndex - 1]?.offset ?? data[0].offset,
        };
        blocks.splice(targetIndex, 0, newBlock);
        state.onChange?.({
          action: DataBlockEditorPublicAction.MoveBlock,
          data: {
            blockId,
            oldIndex,
            targetIndex,
          },
        });
        return {
          ...state,
          ...getPrefixesData(blocks),
          blocks,
        };
      }
      return state;
    }

    case DataBlockEditorPublicAction.DeleteBlock: {
      const index = state.blocks.findIndex((b) => b.id === data.blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        const deleted = blocks.splice(index, 1);
        state.onChange?.({
          action: DataBlockEditorPublicAction.DeleteBlock,
          data: {
            blockId: deleted[0].id,
          },
        });
        return {
          ...state,
          ...getPrefixesData(blocks),
          focused: Math.max(0, Math.min(index - 1, blocks.length - 1)),
          blocks,
        };
      }
      return state;
    }

    case DataBlockEditorPublicAction.AddVariant: {
      const { blockId, variant } = data;
      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        blocks[index].variants = [
          ...blocks[index].variants,
          { ...variant, votes: [] },
        ];
        state.onChange?.({
          action: DataBlockEditorPublicAction.AddVariant,
          data: {
            blockId,
            variant: pick(["id", "data", "isCurrent", "createdBy"], variant),
          },
        });
        return { ...state, blocks };
      }

      return state;
    }

    case DataBlockEditorPublicAction.EditVariant: {
      const { blockId, variant } = data;
      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        const index2 = blocks[index].variants.findIndex(
          (v) => v.id === variant.id,
        );
        if (index2 > -1) {
          const variants = [...blocks[index].variants];
          variants.splice(index2, 1, {
            ...blocks[index].variants[index2],
            ...variant,
          });
          blocks.splice(index, 1, {
            ...blocks[index],
            variants: variants.map((v) => ({
              ...v,
              isCurrent:
                variant.isCurrent && v.id === variant.id
                  ? true
                  : variant.isCurrent
                    ? false
                    : v.isCurrent,
            })),
          });
          state.onChange?.({
            action: DataBlockEditorPublicAction.EditVariant,
            data: {
              blockId,
              variant: pick(["id", "data", "isCurrent", "createdBy"], {
                ...variants[index2],
                ...variant,
              }),
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorPublicAction.DeleteVariant: {
      const { blockId, variantId } = data;
      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        const index2 = blocks[index].variants.findIndex(
          (v) => v.id === variantId,
        );
        if (index2 > -1) {
          const variants = [...blocks[index].variants];
          variants.splice(index2, 1);
          blocks.splice(index, 1, { ...blocks[index], variants });
          state.onChange?.({
            action: DataBlockEditorPublicAction.DeleteVariant,
            data: {
              blockId,
              variantId: variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorPublicAction.VoteVariant: {
      const { blockId, variantId, createdBy } = data;

      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        const index2 = blocks[index].variants.findIndex(
          (v) => v.id === variantId,
        );
        if (index2 > -1) {
          const variants = [...blocks[index].variants];
          variants.splice(index2, 1, {
            ...variants[index2],
            votes: (variants[index2].votes || []).concat([
              { createdBy, createdAt: new Date() },
            ]),
          });
          blocks.splice(index, 1, { ...blocks[index], variants });
          state.onChange?.({
            action: DataBlockEditorPublicAction.VoteVariant,
            data: {
              blockId,
              variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorPublicAction.UnVoteVariant: {
      const { blockId, variantId, createdBy } = data;

      const index = state.blocks.findIndex((b) => b.id === blockId);
      if (index > -1) {
        const blocks = [...state.blocks];
        const index2 = blocks[index].variants.findIndex(
          (v) => v.id === variantId,
        );
        if (index2 > -1) {
          const variants = [...blocks[index].variants];
          variants.splice(index2, 1, {
            ...variants[index2],
            votes: (variants[index2].votes || []).filter(
              (vt) => vt.createdBy !== createdBy,
            ),
          });
          blocks.splice(index, 1, { ...blocks[index], variants });
          state.onChange?.({
            action: DataBlockEditorPublicAction.UnVoteVariant,
            data: {
              blockId,
              variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorPrivateAction.MergeUpdates: {
      const { action: updateAction, data: changes } = data;
      const updatedState = { ...state };
      switch (updateAction) {
        case DataBlockEditorPublicAction.AddBlock: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.block.id,
          );
          if (
            blockIndex > -1 &&
            !equals(updatedState.blocks[blockIndex], changes.block)
          ) {
            updatedState.blocks.splice(blockIndex, 1, changes.block);
          }
          if (blockIndex === -1) {
            updatedState.blocks.splice(changes.index, 0, changes.block);
          }
          const { prefixes, maxPrefixLength } = getPrefixesData(
            updatedState.blocks,
          );
          updatedState.prefixes = prefixes;
          updatedState.maxPrefixLength = maxPrefixLength;
          break;
        }
        case DataBlockEditorPublicAction.EditBlock: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.block.id,
          );
          if (blockIndex > -1) {
            if (!equals(updatedState.blocks[blockIndex], changes.block)) {
              updatedState.blocks.splice(blockIndex, 1, {
                ...changes.block,
                id: changes.oldBlockId || changes.block.id,
              });
            }
            const variantIndex = updatedState.blocks[
              blockIndex
            ].variants.findIndex(
              (v) =>
                v.id === changes.oldVariantId || v.id === changes.variant.id,
            );
            if (
              variantIndex > -1 &&
              !equals(
                updatedState.blocks[blockIndex].variants[variantIndex],
                changes.variant,
              )
            ) {
              updatedState.blocks[blockIndex].variants.splice(
                variantIndex,
                1,
                changes.variant,
              );
            }
            const { prefixes, maxPrefixLength } = getPrefixesData(
              updatedState.blocks,
            );
            updatedState.prefixes = prefixes;
            updatedState.maxPrefixLength = maxPrefixLength;
          }
          break;
        }
        case DataBlockEditorPublicAction.MoveBlock: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const data = updatedState.blocks.splice(blockIndex, 1);
            updatedState.blocks.splice(changes.targetIndex, 0, {
              ...data[0],
              id: changes.oldBlockId || changes.blockId,
            });

            const { prefixes, maxPrefixLength } = getPrefixesData(
              updatedState.blocks,
            );
            updatedState.prefixes = prefixes;
            updatedState.maxPrefixLength = maxPrefixLength;
          }
          break;
        }
        case DataBlockEditorPublicAction.DeleteBlock: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            updatedState.blocks.splice(blockIndex, 1);
          }
          break;
        }
        case DataBlockEditorPublicAction.AddVariant:
        case DataBlockEditorPublicAction.EditVariant: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            if (updatedState.blocks[blockIndex].id !== changes.blockId) {
              updatedState.blocks[blockIndex].id = changes.blockId;
              alert("t");
            }
            const variantIndex = updatedState.blocks[
              blockIndex
            ].variants.findIndex(
              (v) =>
                v.id === changes.oldVariantId || v.id === changes.variant.id,
            );
            if (variantIndex === -1) {
              updatedState.blocks[blockIndex].variants.push(changes.variant);
            } else {
              updatedState.blocks[blockIndex].variants.splice(
                variantIndex,
                1,
                changes.variant,
              );
            }
          }
          break;
        }
        case DataBlockEditorPublicAction.DeleteVariant: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            if (updatedState.blocks[blockIndex].id !== changes.blockId) {
              updatedState.blocks[blockIndex].id = changes.blockId;
            }
            const variantIndex = updatedState.blocks[
              blockIndex
            ].variants.findIndex(
              (v) =>
                v.id === changes.oldVariantId || v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              updatedState.blocks[blockIndex].variants.splice(variantIndex, 1);
            }
          }
          break;
        }
        case DataBlockEditorPublicAction.VoteVariant: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            if (updatedState.blocks[blockIndex].id !== changes.blockId) {
              updatedState.blocks[blockIndex].id = changes.blockId;
            }
            const variantIndex = updatedState.blocks[
              blockIndex
            ].variants.findIndex(
              (v) =>
                v.id === changes.oldVariantId || v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              if (
                updatedState.blocks[blockIndex].variants[variantIndex].id !==
                changes.variantId
              ) {
                updatedState.blocks[blockIndex].variants[variantIndex].id =
                  changes.variantId;
              }
              const voteIndex = updatedState.blocks[blockIndex].variants[
                variantIndex
              ].votes.findIndex((v) => v.createdBy === changes.vote.createdBy);
              if (voteIndex === -1) {
                updatedState.blocks[blockIndex].variants[
                  variantIndex
                ].votes.push(changes.vote);
              } else {
                updatedState.blocks[blockIndex].variants[
                  variantIndex
                ].votes.splice(voteIndex, 1, changes.vote);
              }
            }
          }
          break;
        }
        case DataBlockEditorPublicAction.UnVoteVariant: {
          const blockIndex = updatedState.blocks.findIndex(
            (b) => b.id === changes.oldBlockId || b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            if (updatedState.blocks[blockIndex].id !== changes.blockId) {
              updatedState.blocks[blockIndex].id = changes.blockId;
            }
            const variantIndex = updatedState.blocks[
              blockIndex
            ].variants.findIndex(
              (v) =>
                v.id === changes.oldVariantId || v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              if (
                updatedState.blocks[blockIndex].variants[variantIndex].id !==
                changes.variantId
              ) {
                updatedState.blocks[blockIndex].variants[variantIndex].id =
                  changes.variantId;
              }
              const voteIndex = updatedState.blocks[blockIndex].variants[
                variantIndex
              ].votes.findIndex((v) => v.createdBy === changes.createdBy);
              if (voteIndex > -1) {
                updatedState.blocks[blockIndex].variants[
                  variantIndex
                ].votes.splice(voteIndex, 1);
              }
            }
          }
          break;
        }
        default:
          break;
      }
      return updatedState;
    }

    case DataBlockEditorPrivateAction.Clear: {
      return { ...initialState };
    }

    default:
      return state;
  }
};
