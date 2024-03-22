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
  FormulaTranslation,
  FormulaUnit,
} from "../model";

import { FormulaTextField } from "./FormulaTextField";
import { FormulaOperatorSelector } from "./FormulaOperatorSelector";
import { FormulaUnitSelector } from "./FormulaUnitSelector";

export type FormulaConditionRowProps = FormulaRow & {
  operators?: FormulaOperator[];
  isEditable?: boolean;
  hasUnitSelection?: boolean;
  units?: FormulaUnit[];
  disableFieldSelection?: boolean;
  disableActions?: boolean;
  isLastRow?: boolean;
  i18n?: FormulaTranslation;
  excludeFields?: string[];
  onChange: (key: string, val?: string | string[]) => void;
  onMove?: (field: string, index: number) => void;
  onDelete?: (index: number) => void;
  onSearch?: (query: {
    searchTerm?: string;
    field?: string;
    limit?: number;
    offset?: number;
  }) => Promise<string[]>;
};

export const FormulaConditionRow: React.FC<FormulaConditionRowProps> = ({
  index,
  field,
  type,
  value,
  unit,
  operator,
  operators,
  isEditable,
  hasUnitSelection,
  units,
  disableFieldSelection,
  disableActions,
  isLastRow,
  disabled,
  i18n,
  excludeFields,
  onChange,
  onMove,
  onDelete,
  onSearch,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateAreas: hasUnitSelection
          ? "'number field unit operation value actions'"
          : "'number field operation value actions'",
        gridTemplateColumns: hasUnitSelection
          ? "30px 1fr 50px 20px 3fr 20px"
          : "30px 1fr 20px 3fr 20px",
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
        exclude={excludeFields}
        placeholder={i18n?.fieldPlaceholder || "Enter attribute"}
        onChange={(v) => onChange("field", v)}
        onSearch={
          onSearch ? (q) => onSearch({ searchTerm: q, limit: 50 }) : undefined
        }
      />
      {hasUnitSelection && units?.length && (
        <FormulaUnitSelector
          i18n={i18n}
          units={units}
          value={unit}
          isEditable={isEditable && !disabled}
          onChange={(v) => onChange("unit", v)}
        />
      )}
      <FormulaOperatorSelector
        sx={{ gridArea: "operation" }}
        value={operator}
        operators={operators}
        isEditable={isEditable && !disabled}
        onChange={(v) => onChange("operator", v)}
      />
      <FormulaTextField
        key="value"
        sx={{ gridArea: "value" }}
        isEditable={isEditable && !disabled}
        value={value}
        type={type}
        multiple={type === "text"}
        i18n={i18n}
        placeholder={i18n?.valuePlaceholder || "Enter value"}
        onChange={(v) => onChange("value", v)}
        onSearch={
          onSearch
            ? (q) => onSearch({ searchTerm: q, field, limit: 50 })
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
