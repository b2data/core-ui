import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  debounce,
  styled,
  SxProps,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import dayjs from "dayjs";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { omit } from "ramda";

import { Autocomplete, AutocompleteProps } from "../../Autocomplete";
import { CircularProgress } from "../../CircularProgress";
import { DatePicker } from "../../DatePicker";
import { InputBase, InputBaseProps } from "../../InputBase";
import { Typography } from "../../Typography";
import { ListItem } from "../../ListItem";
import { IconButton } from "../../IconButton";
import { Avatar } from "../../Avatar";
import { InfoIcon } from "../../../icons";
import { FormulaRow, FormulaSearchOption, FormulaTranslation } from "../model";
import { FormHelperText } from "../../../components/FormHelperText";

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
  value?: null | FormulaSearchOption | FormulaSearchOption[];
  multiple?: boolean;
  placeholder?: string;
  isEditable?: boolean;
  autoFocus?: boolean;
  disableValueCreation?: boolean;
  onChange?: (
    value?:
      | null
      | (FormulaSearchOption & { inputValue?: string })
      | (FormulaSearchOption & { inputValue?: string })[],
  ) => void;
  onSearch?: (query: string) => Promise<FormulaSearchOption[]>;
  sx?: SxProps;
  i18n?: FormulaTranslation;
  autocompleteProps?: Partial<
    Omit<
      AutocompleteProps<any, false, false, false>,
      "options" | "value" | "startAdornment" | "endAdornment" | "inputProps"
    >
  >;
  startAdornment?: InputBaseProps["startAdornment"];
  endAdornment?: InputBaseProps["endAdornment"];
  inputProps?: InputBaseProps["inputProps"] & {
    maxDate?: dayjs.Dayjs;
    minDate?: dayjs.Dayjs;
  };
  helperText?: string;
};

export const FormulaTextField: React.FC<FormulaTextFieldProps> = ({
  type,
  value,
  multiple,
  placeholder,
  isEditable,
  autoFocus,
  disableValueCreation,
  onChange,
  onSearch,
  sx,
  i18n,
  autocompleteProps,
  startAdornment,
  endAdornment,
  inputProps,
  helperText,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<FormulaSearchOption[]>(() => {
    if (!isEditable && value) {
      return Array.isArray(value) ? value : [value];
    }
    return [];
  });

  const loadData = useCallback(
    (searchTerm: string) => {
      if (onSearch) {
        setIsLoading(true);
        onSearch(searchTerm)
          .then((newOptions) => {
            setOptions((prev) => {
              const existingIds = new Set(prev.map((opt) => opt.id));
              const uniqueNewOptions = newOptions.filter(
                (opt) => !existingIds.has(opt.id),
              );
              return [...prev, ...uniqueNewOptions];
            });
          })
          .finally(() => setIsLoading(false));
      }
    },
    [onSearch],
  );

  useEffect(() => {
    if (!isEditable && value) {
      setOptions((prev) => {
        if (!Array.isArray(value)) {
          const valueInOptions = prev.find((opt) => opt.id === value.id);
          if (!valueInOptions) {
            return [value, ...prev];
          }
        } else if (value.length > 0) {
          const existingIds = new Set(prev.map((opt) => opt.id));
          const missingValues = value.filter((val) => !existingIds.has(val.id));
          if (missingValues.length > 0) {
            return [...missingValues, ...prev];
          }
        }
        return prev;
      });
    }
  }, [isEditable, value]);

  const handleChange = useCallback(
    (
      val?:
        | null
        | (FormulaSearchOption & { inputValue?: string })
        | FormulaSearchOption[],
    ) => {
      onChange?.(val);
    },
    [onChange],
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      loadData(e.target.value);
    },
    [loadData],
  );

  const selectedValue = useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }
    return value && !Array.isArray(value) ? value : null;
  }, [value, multiple]);

  if (type === "date") {
    return (
      <Box width={1}>
        <DatePicker
          readOnly={!isEditable}
          autoFocus={autoFocus}
          value={value ? dayjs((value as FormulaSearchOption).id) : null}
          onChange={(val) =>
            handleChange(
              val ? { id: val?.toISOString(), name: val?.toISOString() } : null,
            )
          }
          slotProps={{ textField: { startAdornment, endAdornment } }}
          maxDate={inputProps?.maxDate}
          minDate={inputProps?.minDate}
          sx={{
            "& .MuiInputBase-root": {
              height: "auto",
              minHeight: "auto",
              p: 0,
              "&:before": { content: "none" },
              "&:after": { content: "none" },
            },
            "& .MuiInputBase-input": { p: 0 },
            "& .MuiButtonBase-root": { p: "2px" },
            "& .MuiButtonBase-root .MuiSvgIcon-root": { fontSize: 14 },
          }}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </Box>
    );
  }

  if (type === "number") {
    return (
      <Box width={1}>
        <InputBase
          type="number"
          {...omit(["minDate", "maxDate"], inputProps || {})}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          autoFocus={autoFocus}
          readOnly={!isEditable}
          placeholder={isEditable ? placeholder : undefined}
          defaultValue={(value as FormulaSearchOption)?.id || ""}
          onBlur={(e) => {
            const newVal = Number(e.target.value);
            handleChange(
              !isNaN(newVal) ? { id: `${newVal}`, name: `${newVal}` } : null,
            );
          }}
          sx={{
            p: 0,
            ...sx,
            "&>input": { p: 0 },
          }}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </Box>
    );
  }

  return (
    <Box width={1}>
      <Autocomplete
        {...autocompleteProps}
        value={selectedValue}
        options={options}
        freeSolo
        clearOnBlur
        disableCloseOnSelect={multiple}
        multiple={multiple}
        disableClearable={multiple}
        readOnly={!isEditable}
        onOpen={isEditable ? () => loadData("") : undefined}
        loadingText={i18n?.loading}
        noOptionsText={i18n?.noOptions}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(_, newValue) => {
          handleChange(newValue ?? null);
        }}
        slotProps={{
          paper: { sx: { minWidth: 200, maxHeight: 500 } },
        }}
        getOptionLabel={(opt) => (typeof opt === "string" ? opt : opt.name)}
        sx={{
          "& .MuiAutocomplete-endAdornment button": { display: "none" },
          "& .MuiAutocomplete-input": {
            p: "0 !important",
            ...(!isEditable ? { minWidth: "auto !important" } : {}),
          },
          "& .MuiInputBase-root": {
            minHeight: "auto !important",
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
            "&:after": { content: `'; '` },
            ...(!isEditable
              ? {
                  "&:last-of-type:after": { content: "none" },
                }
              : {}),
          },
          ...sx,
        }}
        placeholder={isEditable ? placeholder : undefined}
        // @ts-ignore
        inputProps={{
          ...inputProps,
          autoFocus,
          onChange: debounce(handleSearch, 500),
          startAdornment,
          endAdornment: (
            <>
              {isLoading ? (
                <CircularProgress color="inherit" size={12} sx={{ mr: 1 }} />
              ) : undefined}
              {endAdornment}
            </>
          ),
        }}
        renderTags={(value, getTagProps) =>
          value.map((v, index) => (
            <CustomTooltip
              key={getTagProps({ index }).key}
              enterDelay={1000}
              arrow
              title={
                v.photo || v.description ? (
                  <>
                    {v.photo && (
                      <Avatar
                        src={v.photo}
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
                      {v.description}
                    </Typography>
                  </>
                ) : undefined
              }
            >
              <Typography
                data-tag-index={getTagProps({ index })["data-tag-index"]}
                tabIndex={getTagProps({ index }).tabIndex}
                className={getTagProps({ index }).className}
                sx={{ wordBreak: "break-all" }}
              >
                {v.inputValue || v.name}
              </Typography>
            </CustomTooltip>
          ))
        }
        renderOption={(
          props,
          option,
          { selected, inputValue },
          { getOptionLabel, getOptionDisabled },
        ) => {
          if (typeof option === "string") {
            return <ListItem key={option} text={option} />;
          }
          const matches = match(getOptionLabel(option), inputValue, {
            insideWords: true,
          });
          const parts = parse(getOptionLabel(option), matches);
          return (
            <ListItem
              {...props}
              key={option.id}
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
              disabled={getOptionDisabled?.(option)}
            />
          );
        }}
        filterOptions={(opts: FormulaSearchOption[], { inputValue }) => {
          const filtered =
            inputValue === ""
              ? opts
              : opts.filter(
                  (opt) =>
                    match(opt.name, inputValue, { insideWords: true }).length,
                );

          const isExisting = opts.some((opt) => inputValue === opt.name);

          if (inputValue !== "" && !isExisting && !disableValueCreation) {
            filtered.push({
              inputValue,
              name: `${i18n?.addNewOption || "Add new"}: ${inputValue}`,
              id: inputValue,
            } as FormulaSearchOption & { inputValue?: string });
          }
          return filtered.length
            ? filtered
            : i18n?.noOptions
              ? [{ id: i18n.noOptions, name: i18n.noOptions }]
              : [];
        }}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  );
};
