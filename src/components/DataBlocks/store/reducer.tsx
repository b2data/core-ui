import { omit } from "ramda";

import { DataBlockState, DataBlockModel, DataBlockType } from "../model";

import { DataBlockAction, DataBlockActions } from "./actions";

const getDefaultData = (type: DataBlockType) => {
  switch (type) {
    case DataBlockType.Header: {
      return { text: "", tag: "h1" };
    }
    default:
      return { text: "" };
  }
};

const calcMaxPrefix = (prefixes: Record<string, string>): number => {
  return Math.max(1, ...Object.values(prefixes).map((v) => v.length));
};

export const initialState: DataBlockState = {
  editable: false,
  showPrefix: false,
  showVariants: false,
  maxPrefixLength: 1,
  focused: undefined,
  canChangeVariants: false,
  currentUserId: undefined,
  getFilesUrl: () => "/",
  prefixes: {},
  types: Object.values(DataBlockType),
  blocks: [],
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
    filterPlaceholder: "Filter",
    noResults: "No results",
    blocks: {
      [DataBlockType.Header]: "Header",
      [DataBlockType.Paragraph]: "Text",
    },
    indent: {
      increase: "Increase offset",
      decrease: "Decrease offset",
    },
    deleteBlock: {
      default: "Delete",
      clickToDelete: "Click to delete",
    },
    align: {
      title: "Align",
      left: "Left",
      right: "Right",
      center: "Center",
      justify: "Justify",
    },
  },
};

export type DataBlockStateReducer = (
  state: DataBlockState,
  action: DataBlockActions,
) => DataBlockState;

export const dataBlockEditorStateReducer: DataBlockStateReducer = (
  state = initialState,
  action: DataBlockActions,
): DataBlockState => {
  switch (action.action) {
    case DataBlockAction.SetEditable: {
      return { ...state, editable: action.editable };
    }

    case DataBlockAction.SetShowPrefix: {
      return { ...state, showPrefix: action.showPrefix };
    }

    case DataBlockAction.SetShowVariants: {
      return { ...state, showVariants: action.showVariants };
    }

    case DataBlockAction.SetTranslations: {
      return { ...state, i18n: action.i18n };
    }

    case DataBlockAction.SetTypes: {
      return { ...state, types: action.types };
    }

    case DataBlockAction.SetCanChangeVariants: {
      return { ...state, canChangeVariants: action.canChangeVariants };
    }

    case DataBlockAction.SetCurrentUserId: {
      return { ...state, currentUserId: action.currentUserId };
    }

    case DataBlockAction.SetGetFilesUrl: {
      return { ...state, getFilesUrl: action.getFilesUrl };
    }

    case DataBlockAction.SetFocused: {
      return { ...state, focused: action.index };
    }

    case DataBlockAction.SetBlocks: {
      return {
        ...state,
        blocks: action.blocks,
      };
    }

    case DataBlockAction.SetPrefixes: {
      return {
        ...state,
        maxPrefixLength: calcMaxPrefix(action.prefixes),
        prefixes: action.prefixes,
      };
    }

    case DataBlockAction.AddBlock: {
      const { block, variant, index } = action;
      const blocks = [...state.blocks];

      blocks.splice(index, 0, {
        ...block,
        createdBy: state.currentUserId,
        variants: [{ ...variant, createdBy: state.currentUserId }],
      } as DataBlockModel);

      state.onChange?.(DataBlockAction.AddBlock, {
        block,
        variant,
        index,
      });

      return { ...state, blocks, focused: index };
    }

    case DataBlockAction.EditBlock: {
      const { block, variant } = action;
      const index = state.blocks.findIndex((b) => b.id === block.id);
      if (index > -1) {
        const prefixes = { ...state.prefixes };
        const blocks = [...state.blocks];
        const variants = [...blocks[index].variants];
        const index2 = variants.findIndex((v) => v.id === variant.id);

        if (index2 > -1) {
          variants.splice(index2, 1, {
            ...variants[index2],
            data: {
              ...variants[index2].data,
              ...variant.data,
            },
          });
        }
        blocks.splice(index, 1, { ...block, variants });

        if (block.offset !== blocks[index].offset) {
          delete prefixes[block.id];
        }

        state.onChange?.(DataBlockAction.EditBlock, {
          block,
          variant,
        });

        return { ...state, blocks, prefixes };
      }
      return state;
    }

    case DataBlockAction.MoveBlock: {
      const { id, oldIndex, targetIndex } = action;
      if (state.blocks[oldIndex]?.id === id) {
        const blocks = [...state.blocks];
        const prefixes = { ...state.prefixes };
        const data = blocks.splice(oldIndex, 1);
        blocks.splice(targetIndex, 0, ...data);
        for (let i = Math.min(oldIndex, targetIndex); i < blocks.length; i++) {
          delete prefixes[blocks[i]?.id];
        }
        state.onChange?.(DataBlockAction.MoveBlock, {
          block: omit(["variants"], {
            ...data[0],
            offset: blocks[targetIndex - 1]?.offset || data[0].offset,
          }),
          oldIndex,
          targetIndex,
        });
        return { ...state, blocks, prefixes };
      }
      return state;
    }

    case DataBlockAction.DeleteBlock: {
      const index = state.blocks.findIndex((b) => b.id === action.id);
      if (index > -1) {
        const blocks = [...state.blocks];
        const prefixes = { ...state.prefixes };
        const deleted = blocks.splice(index, 1);
        delete state.prefixes[deleted[0].id];
        state.onChange?.(DataBlockAction.DeleteBlock, {
          block: deleted[0],
        });
        return { ...state, blocks, prefixes };
      }
      return state;
    }

    case DataBlockAction.AddVariant: {
      const { id, variant } = action;
      const index = state.blocks.findIndex((b) => b.id === id);
      if (index > -1) {
        const blocks = [...state.blocks];
        blocks[index].variants = [
          ...blocks[index].variants,
          { ...variant, votes: [] },
        ];
        state.onChange?.(DataBlockAction.AddVariant, {
          block: blocks[index],
          variant,
        });
        return { ...state, blocks };
      }

      return state;
    }

    case DataBlockAction.EditVariant: {
      const { id, variant } = action;
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
          state.onChange?.(DataBlockAction.EditVariant, {
            block: omit(["variants"], blocks[index]),
            variant: omit(["votes", "createdByData"], {
              ...variants[index2],
              ...variant,
            }),
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockAction.DeleteVariant: {
      const { id, variantId } = action;
      const index = state.blocks.findIndex((b) => b.id === id);
      if (index > -1) {
        const blocks = [...state.blocks];
        const index2 = blocks[index].variants.findIndex(
          (v) => v.id === variantId,
        );
        if (index2 > -1) {
          const variants = [...blocks[index].variants];
          const deleted = variants.splice(index2, 1);
          blocks.splice(index, 1, { ...blocks[index], variants });
          state.onChange?.(DataBlockAction.DeleteVariant, {
            block: omit(["variants"], blocks[index]),
            variant: omit(["votes", "createdByData"], deleted[0]),
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockAction.VoteVariant: {
      const { id, variantId, createdBy } = action;

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
          state.onChange?.(DataBlockAction.VoteVariant, {
            block: omit(["variants"], blocks[index]),
            variant: omit(["votes", "createdByData"], variants[index2]),
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockAction.UnVoteVariant: {
      const { id, variantId, createdBy } = action;

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
          state.onChange?.(DataBlockAction.UnVoteVariant, {
            block: omit(["variants"], blocks[index]),
            variant: omit(["votes", "createdByData"], variants[index2]),
          });
          return { ...state, blocks };
        }
      }

      return state;
    }

    case DataBlockAction.Clear: {
      return { ...initialState };
    }

    default:
      return state;
  }
};
