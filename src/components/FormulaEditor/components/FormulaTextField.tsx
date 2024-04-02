import React, { useMemo, useState } from "react";
import {
  debounce,
  styled,
  SxProps,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import dayjs from "dayjs";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { equals } from "ramda";

import { Autocomplete, AutocompleteProps } from "../../Autocomplete";
import { CircularProgress } from "../../CircularProgress";
import { DatePicker } from "../../DatePicker";
import { InputBase } from "../../InputBase";
import { Typography } from "../../Typography";
import { ListItem } from "../../ListItem";
import { IconButton } from "../../IconButton";
import { Avatar } from "../../Avatar";
import { InfoIcon } from "../../../icons";
import { FormulaRow, FormulaSearchOption, FormulaTranslation } from "../model";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[6],
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "8px",
    padding: "10px",
    maxWidth: 300,
  },
  [`& .MuiTooltip-arrow`]: {
    color: theme.palette.background.paper,
  },
}));

export type FormulaTextFieldProps = {
  type: FormulaRow["type"];
  value?: FormulaSearchOption | FormulaSearchOption[];
  multiple?: boolean;
  placeholder?: string;
  isEditable?: boolean;
  onChange?: (
    value?:
      | (FormulaSearchOption & { inputValue?: string })
      | (FormulaSearchOption & { inputValue?: string })[],
  ) => void;
  onSearch?: (query: string) => Promise<FormulaSearchOption[]>;
  sx?: SxProps;
  i18n?: FormulaTranslation;
  autocompleteProps?: Partial<
    Omit<AutocompleteProps<any, false, false, false>, "options" | "value">
  >;
};

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
  autocompleteProps,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<FormulaSearchOption[]>([]);

  const loadData = (searchTerm: string) => {
    if (onSearch) {
      setIsLoading(true);
      onSearch(searchTerm)
        .then(setOptions)
        .finally(() => setIsLoading(false));
    }
  };

  const handleChange = (
    val?:
      | (FormulaSearchOption & { inputValue?: string })
      | FormulaSearchOption[],
  ) => {
    if (!equals(val, value)) {
      onChange?.(val);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    loadData(e.target.value);
  };

  const selectedValue = useMemo(
    () =>
      multiple
        ? Array.isArray(value)
          ? value
          : []
        : value && !Array.isArray(value)
          ? value
          : null,
    [value, multiple, type],
  );

  if (type === "date") {
    return (
      <DatePicker
        readOnly={!isEditable}
        value={value ? dayjs((value as FormulaSearchOption).id) : null}
        onChange={(val) =>
          handleChange(
            val
              ? { id: val?.toISOString(), label: val?.toISOString() }
              : undefined,
          )
        }
        sx={{
          "& .MuiInputBase-root": {
            height: "auto",
            fontSize: '12px !important',
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
        readOnly={!isEditable}
        placeholder={isEditable ? placeholder : undefined}
        defaultValue={(value as FormulaSearchOption)?.id || ""}
        onBlur={(e) =>
          handleChange({ id: e.target.value, label: e.target.value })
        }
        sx={{ p: 0, fontSize: '12px !important', ...sx, "&>input": { p: 0 } }}
      />
    );
  }

  return (
    <Autocomplete
      {...autocompleteProps}
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
      onChange={(_, newValue) => {
        if (typeof newValue !== "string") {
          handleChange(newValue);
        }
      }}
      getOptionLabel={(opt) =>
        typeof opt === "string"
          ? opt
          : `${opt.label}${opt.unit ? ` (${opt.unit})` : ""}`
      }
      sx={{
        "& .MuiAutocomplete-endAdornment button": { display: "none" },
        "& .MuiAutocomplete-input": { p: "0 !important" },
        "& .MuiInputBase-root": {
          minHeight: "auto !important",
          fontSize: '12px !important',
          p: "0 !important",
          color: "inherit",
          "&:before": { content: "none" },
          "&:after": { content: "none" },
        },
        "& .MuiAutocomplete-tag": {
          m: 0,
          p: "2px 3px",
          height: "auto",
          "&::first-of-type": { pl: 0 },
          "&:after": { content: `', '` },
          ...(!isEditable
            ? {
                "&:last-of-type:after": { content: "none" },
              }
            : {}),
        },
        ...sx,
      }}
      placeholder={isEditable ? placeholder : undefined}
      inputProps={{
        ...autocompleteProps?.inputProps,
        onChange: debounce(handleSearch, 500),
        InputProps: {
          ...autocompleteProps?.inputProps?.InputProps,
          endAdornment: (
            <>
              {isLoading ? (
                <CircularProgress color="inherit" size={12} sx={{ mr: 1 }} />
              ) : undefined}
              {autocompleteProps?.inputProps?.InputProps?.endAdornment}
            </>
          ),
        },
      }}
      renderTags={(value, getTagProps) =>
        value.map((v, index) => (
          <Typography {...getTagProps({ index })} variant="caption">
            {v.inputValue || v.label}
          </Typography>
        ))
      }
      renderOption={(
        props,
        option,
        { selected, inputValue },
        { getOptionLabel, getOptionDisabled },
      ) => {
        if (typeof option === "string") {
          return <ListItem text={option} />;
        }
        const matches = match(getOptionLabel(option), inputValue, {
          insideWords: true,
        });
        const parts = parse(getOptionLabel(option), matches);
        return (
          <ListItem
            {...props}
            asButton
            text={
              (option as any)?.inputValue ? (
                getOptionLabel(option)
              ) : (
                <>
                  {parts.map((part, index) =>
                    part.highlight && !getOptionDisabled?.(option) ? (
                      <mark key={index}>{part.text}</mark>
                    ) : (
                      <span key={index}>{part.text}</span>
                    ),
                  )}
                </>
              )
            }
            sx={{ "& > .MuiButtonBase-root": { pr: "28px" } }}
            action={
              option.description || option.photo ? (
                <CustomTooltip
                  arrow
                  title={
                    <>
                      {option.photo && (
                        <Avatar
                          src={option.photo}
                          variant="rounded"
                          sx={{ width: 100, height: 100 }}
                        />
                      )}
                      <Typography
                        variant="body1"
                        noWrap
                        wrapLines={7}
                        sx={{ wordBreak: "break-all" }}
                      >
                        {option.description}
                      </Typography>
                    </>
                  }
                >
                  <IconButton
                    size="small"
                    edge="end"
                    disableRipple
                    sx={{ width: 18, height: 18 }}
                  >
                    <InfoIcon sx={{ width: 14, height: 14 }} />
                  </IconButton>
                </CustomTooltip>
              ) : undefined
            }
            selected={selected}
          />
        );
      }}
      filterOptions={(opts: any, { inputValue }) => {
        const filtered =
          inputValue === ""
            ? opts
            : opts.filter(
                (opt: any) =>
                  match(opt.label, inputValue, { insideWords: true }).length,
              );

        if (inputValue !== "") {
          filtered.push({
            inputValue,
            label: `${i18n?.addNewOption || "Add new"}: ${inputValue}`,
            id: inputValue,
          });
        }
        return (
          filtered.length ? filtered : i18n?.noOptions ? [i18n?.noOptions] : []
        ) as FormulaSearchOption[];
      }}
    />
  );
};
