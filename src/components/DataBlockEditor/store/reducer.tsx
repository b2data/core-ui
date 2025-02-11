import { equals, omit, pick } from "ramda";

import { DataBlockBase, DataBlockEditorState } from "../models";
import { getPrefixesData } from "../utils";

import { DataBlockEditorAction, DataBlockEditorActions } from "./actions";

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
  { action, data }: DataBlockEditorActions,
): DataBlockEditorState => {
  switch (action) {
    case DataBlockEditorAction.SetEditable: {
      return { ...state, editable: data.editable };
    }

    case DataBlockEditorAction.SetShowPrefix: {
      return { ...state, showPrefix: data.showPrefix };
    }

    case DataBlockEditorAction.SetShowVariants: {
      return { ...state, showVariants: data.showVariants };
    }

    case DataBlockEditorAction.SetShowNavigation: {
      return { ...state, showNavigation: data.showNavigation };
    }

    case DataBlockEditorAction.SetShowIndentOffset: {
      return { ...state, showIndentOffset: data.showIndentOffset };
    }

    case DataBlockEditorAction.SetTranslations: {
      return { ...state, i18n: data.i18n };
    }

    case DataBlockEditorAction.SetCanChangeVariants: {
      return { ...state, canChangeVariants: data.canChangeVariants };
    }

    case DataBlockEditorAction.SetCurrentUserId: {
      return { ...state, currentUserId: data.currentUserId };
    }

    case DataBlockEditorAction.SetGetFilesUrl: {
      return { ...state, getFilesUrl: data.getFilesUrl };
    }

    case DataBlockEditorAction.SetFocused: {
      return { ...state, focused: data.index, focusedEnd: data.focusedEnd };
    }

    case DataBlockEditorAction.SetBlocks: {
      return {
        ...state,
        ...getPrefixesData(data.blocks),
        blocks: data.blocks,
      };
    }

    case DataBlockEditorAction.SetTools: {
      return {
        ...state,
        tools: data.tools,
      };
    }

    case DataBlockEditorAction.SetKeymap: {
      return {
        ...state,
        keymap: data.keymap,
      };
    }

    case DataBlockEditorAction.SetMdProps: {
      return {
        ...state,
        mdProps: data.mdProps,
      };
    }

    /*************
     *  UPDATES  *
     ************/

    case DataBlockEditorAction.AddBlock: {
      const { block, variant, index } = data;
      const blocks = [...state.blocks];

      blocks.splice(index, 0, {
        ...block,
        createdBy: state.currentUserId,
        variants: [{ ...variant, createdBy: state.currentUserId, votes: [] }],
      } as DataBlockBase);

      state.onChange?.({
        action: DataBlockEditorAction.AddBlock,
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

    case DataBlockEditorAction.EditBlock: {
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
          action: DataBlockEditorAction.EditBlock,
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

    case DataBlockEditorAction.MoveBlock: {
      const { id, oldIndex, targetIndex } = data;
      if (state.blocks[oldIndex]?.id === id) {
        const blocks = [...state.blocks];
        const data = blocks.splice(oldIndex, 1);
        const newBlock = {
          ...data[0],
          offset: blocks[targetIndex - 1]?.offset ?? data[0].offset,
        };
        blocks.splice(targetIndex, 0, newBlock);
        state.onChange?.({
          action: DataBlockEditorAction.MoveBlock,
          data: {
            blockId: id,
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

    case DataBlockEditorAction.DeleteBlock: {
      const index = state.blocks.findIndex((b) => b.id === data.id);
      if (index > -1) {
        const blocks = [...state.blocks];
        const deleted = blocks.splice(index, 1);
        state.onChange?.({
          action: DataBlockEditorAction.DeleteBlock,
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

    case DataBlockEditorAction.AddVariant: {
      const { id, variant } = data;
      const index = state.blocks.findIndex((b) => b.id === id);
      if (index > -1) {
        const blocks = [...state.blocks];
        blocks[index].variants = [
          ...blocks[index].variants,
          { ...variant, votes: [] },
        ];
        state.onChange?.({
          action: DataBlockEditorAction.AddVariant,
          data: {
            blockId: id,
            variant: pick(["id", "data", "isCurrent", "createdBy"], variant),
          },
        });
        return { ...state, blocks };
      }

      return state;
    }

    case DataBlockEditorAction.EditVariant: {
      const { id, variant } = data;
      const index = state.blocks.findIndex((b) => b.id === id);
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
            action: DataBlockEditorAction.EditVariant,
            data: {
              blockId: id,
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

    case DataBlockEditorAction.DeleteVariant: {
      const { id, variantId } = data;
      const index = state.blocks.findIndex((b) => b.id === id);
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
            action: DataBlockEditorAction.DeleteVariant,
            data: {
              blockId: id,
              variantId: variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorAction.VoteVariant: {
      const { id, variantId, createdBy } = data;

      const index = state.blocks.findIndex((b) => b.id === id);
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
            action: DataBlockEditorAction.VoteVariant,
            data: {
              blockId: id,
              variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorAction.UnVoteVariant: {
      const { id, variantId, createdBy } = data;

      const index = state.blocks.findIndex((b) => b.id === id);
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
            action: DataBlockEditorAction.UnVoteVariant,
            data: {
              blockId: id,
              variantId,
            },
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockEditorAction.MergeUpdates: {
      const { action: updateAction, data: changes } = data;
      switch (updateAction) {
        case DataBlockEditorAction.AddBlock: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.block.id,
          );
          if (
            blockIndex > -1 &&
            !equals(state.blocks[blockIndex], changes.block)
          ) {
            state.blocks.splice(blockIndex, 1, changes.block);
          }
          if (blockIndex === -1) {
            state.blocks.splice(changes.index, 0, changes.block);
          }
          break;
        }
        case DataBlockEditorAction.EditBlock: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.block.id,
          );
          if (
            blockIndex > -1 &&
            !equals(state.blocks[blockIndex], changes.block)
          ) {
            state.blocks.splice(blockIndex, 1, changes.block);
          }
          break;
        }
        case DataBlockEditorAction.MoveBlock: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const data = state.blocks.splice(blockIndex, 1);
            state.blocks.splice(changes.targetIndex, 0, data[0]);
          }
          break;
        }
        case DataBlockEditorAction.DeleteBlock: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            state.blocks.splice(blockIndex, 1);
          }
          break;
        }
        case DataBlockEditorAction.AddVariant:
        case DataBlockEditorAction.EditVariant: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const variantIndex = state.blocks[blockIndex].variants.findIndex(
              (v) => v.id === changes.variant.id,
            );
            if (variantIndex === -1) {
              state.blocks[blockIndex].variants.push(changes.variant);
            } else {
              state.blocks[blockIndex].variants.splice(
                variantIndex,
                1,
                changes.variant,
              );
            }
          }
          break;
        }
        case DataBlockEditorAction.DeleteVariant: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const variantIndex = state.blocks[blockIndex].variants.findIndex(
              (v) => v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              state.blocks[blockIndex].variants.splice(variantIndex, 1);
            }
          }
          break;
        }
        case DataBlockEditorAction.VoteVariant: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const variantIndex = state.blocks[blockIndex].variants.findIndex(
              (v) => v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              const voteIndex = state.blocks[blockIndex].variants[
                variantIndex
              ].votes.findIndex((v) => v.createdBy === changes.vote.createdBy);
              if (voteIndex === -1) {
                state.blocks[blockIndex].variants[variantIndex].votes.push(
                  changes.vote,
                );
              } else {
                state.blocks[blockIndex].variants[variantIndex].votes.splice(
                  voteIndex,
                  1,
                  changes.vote,
                );
              }
            }
          }
          break;
        }
        case DataBlockEditorAction.UnVoteVariant: {
          const blockIndex = state.blocks.findIndex(
            (b) => b.id === changes.blockId,
          );
          if (blockIndex > -1) {
            const variantIndex = state.blocks[blockIndex].variants.findIndex(
              (v) => v.id === changes.variantId,
            );
            if (variantIndex > -1) {
              const voteIndex = state.blocks[blockIndex].variants[
                variantIndex
              ].votes.findIndex((v) => v.createdBy === changes.createdBy);
              if (voteIndex > -1) {
                state.blocks[blockIndex].variants[variantIndex].votes.splice(
                  voteIndex,
                  1,
                );
              }
            }
          }
          break;
        }
        default:
          break;
      }
      return state;
    }

    case DataBlockEditorAction.Clear: {
      return { ...initialState };
    }

    default:
      return state;
  }
};
