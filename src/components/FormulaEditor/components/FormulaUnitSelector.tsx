import React, { useMemo } from "react";
import { SxProps } from "@mui/material";

import { Autocomplete } from "../../Autocomplete";

import { FormulaTranslation, FormulaUnit } from "../model";

export type FormulaUnitSelectorProps = {
  i18n?: FormulaTranslation;
  units?: FormulaUnit[];
  isEditable?: boolean;
  value?: string;
  onChange?: (value?: string) => void;
  sx?: SxProps;
};

export const FormulaUnitSelector: React.FC<FormulaUnitSelectorProps> = ({
  i18n,
  units = [],
  isEditable,
  value,
  onChange,
  sx,
}) => {
  const selectedValue = useMemo(
    () => units.find((u) => u.id === value),
    [units, value],
  );

  return (
    <Autocomplete
      value={selectedValue}
      disableClearable
      options={units}
      readOnly={!isEditable}
      noOptionsText={i18n?.noOptions}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(_, newValue: any) => {
        if (typeof newValue !== "string") {
          onChange?.(newValue.id);
        }
      }}
      inputProps={{ InputProps: { startAdornment: "[", endAdornment: "]" } }}
      componentsProps={{ popper: { style: { width: "fit-content" } } }}
      sx={{
        "& .MuiAutocomplete-endAdornment button": { display: "none" },
        "& .MuiAutocomplete-input": { p: "0 !important", textAlign: "center" },
        "& .MuiInputBase-root": {
          minHeight: "auto !important",
          fontSize: 12,
          p: "0 !important",
          color: "inherit",
          "&:before": { content: "none" },
          "&:after": { content: "none" },
        },
        ...sx,
      }}
      placeholder={isEditable ? i18n?.unitPlaceholder || "Unit" : undefined}
    />
  );
};
