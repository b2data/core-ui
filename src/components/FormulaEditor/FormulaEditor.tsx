import React, { useEffect, useMemo, useState } from "react";

import { Box } from "../Box";

import { FormulaAddRow, FormulaConditionRow } from "./components";
import { FormulaOperator, FormulaRow, FormulaTranslation } from "./model";

export type FormulaEditorProps = {
  /**
   * Formula rows
   */
  rows: FormulaRow[];
  /**
   * Available formula operators, by default - all
   */
  operators?: FormulaOperator[];
  /**
   * If `true` the editor will be in edit mode
   */
  isEditable?: boolean;
  /**
   * If `true` the creation of new row is hidden
   */
  disableRowCreation?: boolean;
  /**
   * If `true` the field selection is disabled
   */
  disableFieldSelection?: boolean;
  /**
   * If `true` the row actions button is hidden
   */
  disableActions?: boolean;
  /**
   * Used for setup custom translations
   */
  i18n?: FormulaTranslation;
  /**
   * Fires when some changes has made
   */
  onChange?: (item: FormulaRow[]) => void;
  /**
   * Fires when some row has moved up/down
   */
  onMove?: (field: string, index: number) => void;
  /**
   * Calls for searching autocomplete variants
   */
  onSearch?: (query: {
    searchTerm?: string;
    field?: string;
    limit?: number;
    offset?: number;
  }) => Promise<string[]>;
};

export const FormulaEditor: React.FC<FormulaEditorProps> = ({
  rows,
  operators,
  isEditable,
  disableRowCreation,
  disableFieldSelection,
  disableActions,
  i18n,
  onChange,
  onMove,
  onSearch,
}) => {
  const [options, setOptions] = useState<FormulaRow[]>([]);

  const handleAddFilter = () => {
    setOptions([
      ...options,
      {
        index: options.length + 1,
        type: "text",
        operator: FormulaOperator.Equal,
      },
    ]);
  };

  const commitChanges = (result: FormulaRow[]) => {
    const isValidRows =
      result.filter(
        (opt) =>
          !(
            opt.field &&
            opt.value &&
            opt.operator &&
            (FormulaOperator.Equal === opt.operator ? true : opt.unit)
          ),
      ).length === 0;
    if (isValidRows && onChange) {
      onChange(result);
    }
  };

  const handleChangeField = (
    index: number,
    key: string,
    val?: string | string[],
  ) => {
    const newOptions = [...options];
    newOptions.splice(index - 1, 1, { ...newOptions[index - 1], [key]: val });
    const result = newOptions.map((opt, ind) => ({ ...opt, index: ind + 1 }));
    setOptions(result);
    commitChanges(result);
  };

  const handleDeleteFilter = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index - 1, 1);
    const result = newOptions.map((opt, ind) => ({ ...opt, index: ind + 1 }));
    setOptions(result);
    commitChanges(result);
  };

  useEffect(() => {
    setOptions(rows);
  }, [rows]);

  const excludeFields = useMemo(
    () => Array.from(new Set(options.map((opt) => opt.field as string))),
    [options],
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ bgcolor: "#FAFAFA", borderRadius: 1, py: 2, pl: 3, pr: 1 }}
    >
      {options.map((opt, ind) => (
        <FormulaConditionRow
          {...opt}
          key={opt.index}
          isLastRow={ind === options.length - 1}
          isEditable={isEditable}
          disableFieldSelection={disableFieldSelection}
          disableActions={disableActions}
          operators={operators}
          i18n={i18n}
          excludeFields={excludeFields}
          onMove={onMove}
          onDelete={handleDeleteFilter}
          onChange={(key, val) => handleChangeField(opt.index, key, val)}
          onSearch={onSearch}
        />
      ))}
      {isEditable && !disableRowCreation && (
        <FormulaAddRow
          index={options.length + 1}
          onClick={handleAddFilter}
          i18n={i18n}
        />
      )}
    </Box>
  );
};
