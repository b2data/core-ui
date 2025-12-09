import React, { useEffect, useState } from "react";
import { SxProps } from "@mui/material";

import { Box } from "../Box";

import { FormulaAddRow, FormulaConditionRow } from "./components";
import {
  FormulaOperator,
  FormulaRow,
  FormulaSearchOption,
  FormulaTranslation,
} from "./model";

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
  onMove?: (field: FormulaSearchOption, index: number) => void;
  /**
   * Calls for searching autocomplete variants
   */
  onSearch?: (request: {
    key: "field" | "value";
    query: { searchTerm?: string; limit?: number; offset?: number };
    state: Partial<FormulaRow>;
  }) => Promise<FormulaSearchOption[]>;
  /**
   * Calls before new field creation
   */
  onFieldCreation?: (data: {
    inputValue: string;
    onCreate: (data: FormulaSearchOption) => void;
  }) => void;
  /**
   * Calls before new value creation
   */
  onValueCreation?: (data: {
    inputValue: string;
    onCreate: (data: FormulaSearchOption) => void;
  }) => void;
  /** */
  sx?: SxProps;
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
  onFieldCreation,
  onValueCreation,
  sx,
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
    const invalidRows = result.filter((opt) => {
      if (opt.disabled) {
        return false;
      }

      if (!opt.field || !opt.operator) {
        return false;
      }

      if (opt.operator === FormulaOperator.Exist) {
        return false;
      }

      return !opt.value;
    });

    if (invalidRows.length === 0 && onChange) {
      onChange(result);
    }
  };

  const handleChangeField = (index: number, changes: Partial<FormulaRow>) => {
    const newOptions = [...options];
    newOptions.splice(index - 1, 1, { ...newOptions[index - 1], ...changes });
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ bgcolor: "#FAFAFA", borderRadius: 1, py: 2, pl: 3, pr: 1, ...sx }}
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
          onMove={onMove}
          onDelete={handleDeleteFilter}
          onChange={(changes) => handleChangeField(opt.index, changes)}
          onSearch={onSearch}
          onFieldCreation={onFieldCreation}
          onValueCreation={onValueCreation}
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
