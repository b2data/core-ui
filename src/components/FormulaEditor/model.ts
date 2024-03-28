import { AutocompleteOption } from "../Autocomplete";

export type FormulaRow = {
  index: number;
  type: "text" | "number" | "date";
  field?: AutocompleteOption;
  operator?: FormulaOperator;
  value?: AutocompleteOption | AutocompleteOption[];
  unit?: string;
  systemUnit?: string;
  coeff?: number;
  disabled?: boolean;
};

export enum FormulaOperator {
  Equal = "equal",
  NotEqual = "not_equal",
  Less = "less",
  LessEqual = "less_equal",
  More = "more",
  MoreEqual = "more_equal",
}

export type FormulaTranslation = {
  fieldPlaceholder?: string;
  valuePlaceholder?: string;
  loading?: string;
  noOptions?: string;
  addFilter?: string;
  deleteFilter?: string;
  moveFilterUp?: string;
  moveFilterDown?: string;
  addNewOption?: string;
};

export type FormulaSearchOption = {
  id: string;
  label: string;
  description?: string;
  photo?: string;
  unit?: string;
  systemUnit?: string;
  coeff?: number;
};
