import { FormulaOperator } from "../model";

export const useOperators = () => {
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
