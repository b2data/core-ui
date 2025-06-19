import { FormulaOperator, FormulaTranslation } from "../model";

export const useFormulaOperators = (i18n: FormulaTranslation["operators"]) => {
  const options: Record<FormulaOperator, { label: string; tooltip: string }> = {
    [FormulaOperator.Equal]: {
      label: "=",
      tooltip: i18n?.[FormulaOperator.Equal] || "=",
    },
    [FormulaOperator.NotEqual]: {
      label: "≠",
      tooltip: i18n?.[FormulaOperator.NotEqual] || "≠",
    },
    [FormulaOperator.Less]: {
      label: "<",
      tooltip: i18n?.[FormulaOperator.Less] || "<",
    },
    [FormulaOperator.LessEqual]: {
      label: "≤",
      tooltip: i18n?.[FormulaOperator.LessEqual] || "≤",
    },
    [FormulaOperator.More]: {
      label: ">",
      tooltip: i18n?.[FormulaOperator.More] || ">",
    },
    [FormulaOperator.MoreEqual]: {
      label: "≥",
      tooltip: i18n?.[FormulaOperator.MoreEqual] || "≥",
    },
    [FormulaOperator.Exist]: {
      label: "~",
      tooltip: i18n?.[FormulaOperator.Exist] || "~",
    },
  };
  return options;
};
