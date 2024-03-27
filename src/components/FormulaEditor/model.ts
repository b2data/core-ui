export type FormulaRow = {
  index: number;
  type: "text" | "number" | "date";
  field?: string;
  operator?: FormulaOperator;
  value?: string | string[];
  unit?: string;
  systemUnit?: string;
  coeff?: string;
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
  unitPlaceholder?: string;
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
  coeff?: string;
};
