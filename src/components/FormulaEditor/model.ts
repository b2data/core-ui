export type FormulaRow = {
  index: number;
  type: "text" | "number" | "date" | "boolean";
  field?: FormulaSearchOption & {
    disableValueCreation?: boolean;
    type?: "text" | "number" | "date" | "boolean";
  };
  operator?: FormulaOperator;
  value?: null | FormulaSearchOption | FormulaSearchOption[];
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
  Exist = "exist",
}

export type FormulaTranslation = {
  fieldPlaceholder?: string;
  valuePlaceholder?: string;
  anyValue?: string;
  loading?: string;
  noOptions?: string;
  addFilter?: string;
  deleteFilter?: string;
  moveFilterUp?: string;
  moveFilterDown?: string;
  addNewOption?: string;
  operators?: Record<FormulaOperator, string>;
};

export type FormulaSearchOption = {
  id: string;
  name: string;
  description?: string;
  photo?: string;
  unit?: string;
  systemUnit?: string;
  coeff?: number;
};
