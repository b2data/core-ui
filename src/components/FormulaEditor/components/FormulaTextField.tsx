import React, { useEffect, useState } from "react";
import { debounce, SxProps } from "@mui/material";
import dayjs from "dayjs";
import match from "autosuggest-highlight/match";

import { Autocomplete, AutocompleteOption } from "../../Autocomplete";
import { CircularProgress } from "../../CircularProgress";
import { DatePicker } from "../../DatePicker";
import { InputBase } from "../../InputBase";
import { Typography } from "../../Typography";
import { FormulaRow, FormulaTranslation } from "../model";

export type FormulaTextFieldProps = {
  type: FormulaRow["type"];
  value?: string | string[];
  multiple?: boolean;
  placeholder?: string;
  isEditable?: boolean;
  onChange?: (value?: string | string[]) => void;
  onSearch?: (query: string) => Promise<string[]>;
  sx?: SxProps;
  i18n?: FormulaTranslation;
  exclude?: string[];
};

const transformToOption = (val: string): AutocompleteOption => ({
  id: val,
  label: val,
});

export const FormulaTextField: React.FC<FormulaTextFieldProps> = ({
  type,
  value,
  multiple,
  placeholder,
  isEditable,
  onChange,
  onSearch,
  sx,
  i18n,
  exclude,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<
    AutocompleteOption | AutocompleteOption[] | null
  >(multiple ? [] : null);

  const loadData = (searchTerm: string) => {
    if (onSearch) {
      setIsLoading(true);
      onSearch(searchTerm)
        .then((val) =>
          setOptions(
            val
              .filter(
                (v) =>
                  !exclude?.includes(v) ||
                  (Array.isArray(value) ? value?.includes(v) : value === v),
              )
              .map(transformToOption),
          ),
        )
        .finally(() => setIsLoading(false));
    }
  };

  const handleChange = (val?: string | string[]) => {
    onChange?.(val);
    setSelectedValue(
      Array.isArray(val)
        ? val.map(transformToOption)
        : val
          ? transformToOption(val)
          : null,
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    loadData(e.target.value);
  };

  useEffect(() => {
    if (multiple && Array.isArray(value)) {
      setSelectedValue(value.map(transformToOption));
    } else if (value && !Array.isArray(value)) {
      setSelectedValue(transformToOption(value));
    }
  }, [value, multiple]);

  if (type === "date") {
    return (
      <DatePicker
        readOnly={!isEditable}
        value={value ? dayjs(value as string) : null}
        onChange={(val) => handleChange(val?.toISOString())}
        sx={{
          "& .MuiInputBase-root": {
            height: "auto",
            fontSize: 12,
            "&:before": { content: "none" },
            "&:after": { content: "none" },
          },
          "& .MuiInputBase-input": { p: 0 },
          "& .MuiButtonBase-root": { p: "2px" },
          "& .MuiButtonBase-root .MuiSvgIcon-root": { fontSize: 14 },
        }}
      />
    );
  }

  if (type === "number") {
    return (
      <InputBase
        type="number"
        placeholder={isEditable ? placeholder : undefined}
        defaultValue={value}
        onBlur={(e) => handleChange(e.target.value)}
        sx={{ p: 0, fontSize: 12, ...sx, "&>input": { p: 0 } }}
      />
    );
  }

  return (
    <Autocomplete
      value={selectedValue}
      options={options}
      freeSolo
      clearOnBlur
      disableCloseOnSelect={multiple}
      multiple={multiple}
      readOnly={!isEditable}
      onOpen={isEditable ? () => loadData("") : undefined}
      loadingText={i18n?.loading}
      noOptionsText={i18n?.noOptions}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(_, newValue: any) => {
        if (typeof newValue !== "string") {
          handleChange(
            Array.isArray(newValue) ? newValue.map((v) => v.id) : newValue.id,
          );
        }
      }}
      getOptionLabel={(opt) => (typeof opt === "string" ? opt : opt.label)}
      sx={{
        "& .MuiAutocomplete-endAdornment": { display: "none" },
        "& .MuiAutocomplete-input": { p: "0 !important" },
        "& .MuiInputBase-root": {
          minHeight: "auto !important",
          fontSize: 12,
          p: 0,
          color: "inherit",
          "&:before": { content: "none" },
          "&:after": { content: "none" },
        },
        "& .MuiAutocomplete-tag": {
          m: 0,
          p: "2px 3px",
          height: "auto",
          "&::first-of-type": { pl: 0 },
          "&:not(:last-of-type):after": { content: `', '` },
        },
        ...sx,
      }}
      placeholder={isEditable ? placeholder : undefined}
      inputProps={{
        onChange: debounce(handleSearch, 500),
        InputProps: {
          endAdornment: isLoading ? (
            <CircularProgress color="inherit" size={12} />
          ) : undefined,
        },
      }}
      renderTags={(value, getTagProps) =>
        value.map((v, index) => (
          <Typography {...getTagProps({ index })} variant="caption">
            {v.label}
          </Typography>
        ))
      }
      filterOptions={(opts: any, { inputValue }) => {
        const filtered =
          inputValue === ""
            ? opts
            : opts.filter(
                (opt: any) =>
                  match(opt.label, inputValue, { insideWords: true }).length,
              );

        const isExisting = opts.some((opt: any) => inputValue === opt.label);

        if (inputValue !== "" && !isExisting) {
          filtered.push({
            label: `${i18n?.addNewOption || "Add new"}: ${inputValue}`,
            id: inputValue,
          });
        }
        return (
          filtered.length ? filtered : i18n?.noOptions ? [i18n?.noOptions] : []
        ) as AutocompleteOption[];
      }}
    />
  );
};
