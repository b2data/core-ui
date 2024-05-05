import React, { useState } from "react";

import {
  ArrowDownwardIcon,
  ArrowUpwardIcon,
  DeleteIcon,
  MoreVertIcon,
} from "../../../icons";
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
  onMove?: (field: FormulaSearchOption, index: number) => void;
  onDelete?: (index: number) => void;
  onSearch?: (request: {
    key: "field" | "value";
    query: { searchTerm?: string; limit?: number; offset?: number };
    state: Partial<FormulaRow>;
  }) => Promise<FormulaSearchOption[]>;
  onFieldCreation?: (data: {
    inputValue: string;
    onCreate: (data: FormulaSearchOption) => void;
  }) => void;
  onValueCreation?: (data: {
    inputValue: string;
    onCreate: (data: FormulaSearchOption) => void;
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
  onValueCreation,
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
        ...(disabled ? { opacity: ".6" } : {}),
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
        onChange={(v) => {
          if (!Array.isArray(v) && v?.inputValue && onFieldCreation) {
            onFieldCreation({
              inputValue: v.inputValue,
              onCreate: (changes) =>
                onChange({
                  field: changes,
                  unit: changes.unit,
                  systemUnit: changes.systemUnit,
                  coeff: changes.coeff,
                  value: undefined,
                  type:
                    changes?.systemUnit === "s"
                      ? "date"
                      : ![
                            FormulaOperator.Equal,
                            FormulaOperator.NotEqual,
                          ].includes(operator as FormulaOperator)
                        ? "number"
                        : changes?.systemUnit
                          ? "number"
                          : "text",
                }),
            });
          } else if (!Array.isArray(v)) {
            onChange({
              field: v,
              unit: v?.unit,
              systemUnit: v?.systemUnit,
              coeff: v?.coeff,
              value: undefined,
              type:
                v?.systemUnit === "s"
                  ? "date"
                  : ![FormulaOperator.Equal, FormulaOperator.NotEqual].includes(
                        operator as FormulaOperator,
                      )
                    ? "number"
                    : v?.systemUnit
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
                : ![FormulaOperator.Equal, FormulaOperator.NotEqual].includes(
                      v as FormulaOperator,
                    )
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
        disableValueCreation={field?.disableValueCreation}
        onChange={(v) => {
          if (
            Array.isArray(v) &&
            onValueCreation &&
            !field?.disableValueCreation
          ) {
            const index = v.findIndex((c) => c.inputValue);
            if (index > -1) {
              onValueCreation({
                inputValue: v[index].inputValue as string,
                onCreate: (val) => {
                  v[index] = val;
                  onChange({ value: v });
                },
              });
            } else {
              onChange({ value: v });
            }
          } else {
            onChange({ value: v });
          }
        }}
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
