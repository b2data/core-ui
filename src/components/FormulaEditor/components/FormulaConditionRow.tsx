import React, { useState } from "react";

import {
  ArrowDownwardIcon,
  ArrowUpwardIcon,
  DeleteIcon,
  MoreVertIcon,
} from "../../../icons";
import { AutocompleteOption } from "../../Autocomplete";
import { Box } from "../../Box";
import { Typography } from "../../Typography";
import { IconButton } from "../../IconButton";
import { Menu } from "../../Menu";
import { MenuItem } from "../../MenuItem";
import {
  FormulaOperator,
  FormulaRow,
  FormulaSearchOption,
  FormulaTranslation,
} from "../model";

import { FormulaTextField } from "./FormulaTextField";
import { FormulaOperatorSelector } from "./FormulaOperatorSelector";

export type FormulaConditionRowProps = FormulaRow & {
  operators?: FormulaOperator[];
  isEditable?: boolean;
  disableFieldSelection?: boolean;
  disableActions?: boolean;
  isLastRow?: boolean;
  i18n?: FormulaTranslation;
  onChange: (changes: Partial<FormulaRow>) => void;
  onMove?: (field: AutocompleteOption, index: number) => void;
  onDelete?: (index: number) => void;
  onSearch?: (request: {
    key: "field" | "value";
    query: { searchTerm?: string; limit?: number; offset?: number };
    state: Partial<FormulaRow>;
  }) => Promise<FormulaSearchOption[]>;
  onFieldCreation?: (data: {
    label: string;
    onCreate: (
      data?: Partial<
        Pick<FormulaRow, "field" | "unit" | "systemUnit" | "coeff">
      >,
    ) => void;
  }) => void;
};

export const FormulaConditionRow: React.FC<FormulaConditionRowProps> = ({
  index,
  field,
  type,
  value,
  unit,
  systemUnit,
  coeff,
  operator,
  operators,
  isEditable,
  disableFieldSelection,
  disableActions,
  isLastRow,
  disabled,
  i18n,
  onChange,
  onMove,
  onDelete,
  onSearch,
  onFieldCreation,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateAreas: "'number field operation value actions'",
        gridTemplateColumns: "30px 1fr 20px 3fr 20px",
        minHeight: 20,
        "&:hover .delete": { opacity: 1 },
      }}
    >
      <Typography sx={{ gridArea: "number" }} variant="caption">
        {index}
      </Typography>
      <FormulaTextField
        key="field"
        sx={{ gridArea: "field", color: "#AF361A" }}
        isEditable={isEditable && !disabled && !disableFieldSelection}
        value={field}
        type="text"
        i18n={i18n}
        placeholder={i18n?.fieldPlaceholder || "Attribute"}
        onChange={(v, optData) => {
          if (optData?.inputValue && onFieldCreation) {
            onFieldCreation({
              label: optData.inputValue,
              onCreate: (changes) =>
                onChange({
                  ...changes,
                  value: undefined,
                  type:
                    changes?.systemUnit === "s"
                      ? "date"
                      : operator !== FormulaOperator.Equal
                        ? "number"
                        : changes?.systemUnit
                          ? "number"
                          : "text",
                }),
            });
          } else if (!Array.isArray(v)) {
            onChange({
              field: v,
              unit: optData?.unit,
              systemUnit: optData?.systemUnit,
              coeff: optData?.coeff,
              value: undefined,
              type:
                optData?.systemUnit === "s"
                  ? "date"
                  : operator !== FormulaOperator.Equal
                    ? "number"
                    : optData?.systemUnit
                      ? "number"
                      : "text",
            });
          }
        }}
        onSearch={
          onSearch
            ? (q) =>
                onSearch({
                  key: "field",
                  query: { searchTerm: q, limit: 50 },
                  state: {
                    field,
                    type,
                    value,
                    unit,
                    systemUnit,
                    coeff,
                    operator,
                  },
                })
            : undefined
        }
        autocompleteProps={
          unit
            ? {
                inputProps: {
                  InputProps: { endAdornment: `[${unit}]` },
                },
              }
            : undefined
        }
      />
      <FormulaOperatorSelector
        sx={{ gridArea: "operation" }}
        value={operator}
        operators={operators}
        isEditable={isEditable && !disabled}
        onChange={(v) =>
          onChange({
            operator: v,
            type:
              systemUnit === "s"
                ? "date"
                : v !== FormulaOperator.Equal
                  ? "number"
                  : systemUnit
                    ? "number"
                    : "text",
          })
        }
      />
      <FormulaTextField
        key="value"
        sx={{ gridArea: "value" }}
        isEditable={isEditable && !disabled}
        value={value}
        type={type}
        multiple={type === "text"}
        i18n={i18n}
        placeholder={i18n?.valuePlaceholder || "Value"}
        onChange={(v) => onChange({ value: v })}
        onSearch={
          onSearch
            ? (q) =>
                onSearch({
                  key: "value",
                  query: { searchTerm: q, limit: 50 },
                  state: {
                    field,
                    type,
                    value,
                    unit,
                    systemUnit,
                    coeff,
                    operator,
                  },
                })
            : undefined
        }
      />
      {isEditable && !disabled && !disableActions && (
        <>
          <IconButton
            className="delete"
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            sx={{
              opacity: 0,
              height: 20,
              width: 20,
              p: "2px",
              "& .MuiSvgIcon-root": { fontSize: 14 },
            }}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            open={Boolean(menuAnchor)}
            anchorEl={menuAnchor}
            onClose={() => setMenuAnchor(null)}
            onClick={() => setMenuAnchor(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {onMove && field ? (
              <MenuItem
                startAdornment={<ArrowUpwardIcon />}
                onClick={() => onMove(field, index - 1)}
                disabled={index <= 1}
              >
                {i18n?.moveFilterUp || "Move filter up"}
              </MenuItem>
            ) : null}
            {onMove && field ? (
              <MenuItem
                startAdornment={<ArrowDownwardIcon />}
                onClick={() => onMove(field, index - 1)}
                disabled={isLastRow}
                divider
              >
                {i18n?.moveFilterDown || "Move filter down"}
              </MenuItem>
            ) : null}
            {onDelete ? (
              <MenuItem
                startAdornment={<DeleteIcon sx={{ color: "error.main" }} />}
                onClick={() => onDelete(index)}
                sx={{ color: "error.main" }}
              >
                {i18n?.deleteFilter || "Delete filter"}
              </MenuItem>
            ) : null}
          </Menu>
        </>
      )}
    </Box>
  );
};
