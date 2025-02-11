import { ReactNode } from "react";

export type DataBlockEditorTranslations = {
  addBtnTooltip: string | ReactNode;
  moreBtnTooltip: string | ReactNode;
  showVariantsTooltip: string | ReactNode;
  closeVariantsTooltip: string | ReactNode;
  addVariantTooltip: string | ReactNode;
  deleteVariantTooltip: string | ReactNode;
  swapCurrentVariantTooltip: string | ReactNode;
  emptyPlaceholder: string;
  addBtnFilter: string;
  noResults: string;
  indent: {
    increase: string;
    decrease: string;
  };
  deleteBlock: {
    default: string;
    clickToDelete: string;
  };
};
