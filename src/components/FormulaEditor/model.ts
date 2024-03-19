export type FormulaRow = {
  index: number;
  type: "text" | "number" | "date";
  field?: string;
  operator?: FormulaOperator;
  value?: string | string[];
  unit?: string;
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
