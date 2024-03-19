import { FormulaOperator } from "../model";

export const useFormulaOperators = () => {
  const options: Record<FormulaOperator, string> = {
    [FormulaOperator.Equal]: "=",
    [FormulaOperator.NotEqual]: "!=",
    [FormulaOperator.Less]: "<",
    [FormulaOperator.LessEqual]: "≤",
    [FormulaOperator.More]: ">",
    [FormulaOperator.MoreEqual]: "≥",
  };
  return options;
};
