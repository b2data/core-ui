import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { default as ExpandMoreIcon } from "@mui/icons-material/ExpandMore";
import { default as ClearIcon } from "@mui/icons-material/Clear";
import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export { createFilterOptions } from "@mui/material/Autocomplete";

import { List } from "../List";
import { Paper } from "../Paper";
import { TextField, TextFieldProps } from "../TextField";
import { ListItem } from "../ListItem";
import { CircularProgress } from "../CircularProgress";

export interface AutocompleteOption {
  label: string;
  id: string;
}

export interface AutocompleteProps<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> extends Pick<
    MuiAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    | "options"
    | "autoComplete"
    | "blurOnSelect"
    | "componentsProps"
    | "clearOnBlur"
    | "defaultValue"
    | "disableClearable"
    | "disableCloseOnSelect"
    | "disabled"
    | "disablePortal"
    | "filterOptions"
    | "filterSelectedOptions"
    | "freeSolo"
    | "getOptionDisabled"
    | "getOptionLabel"
    | "groupBy"
    | "id"
    | "inputValue"
    | "onInputChange"
    | "multiple"
    | "onChange"
    | "onClose"
    | "onOpen"
    | "open"
    | "openOnFocus"
    | "readOnly"
    | "selectOnFocus"
    | "value"
    | "clearText"
    | "closeText"
    | "fullWidth"
    | "getLimitTagsText"
    | "loading"
    | "loadingText"
    | "limitTags"
    | "noOptionsText"
    | "openText"
    | "renderGroup"
    | "renderOption"
    | "renderTags"
    | "isOptionEqualToValue"
    | "slotProps"
    | "sx"
  > {
  /**
   * Label of the Autocomplete Input
   */
  label?: string;
  /**
   * Placeholder of the Autocomplete Input
   */
  placeholder?: string;

  /**
   * Properties that are passed renderInput
   * @param {} value The `value` provided to the component.
   */
  inputProps?: TextFieldProps;
}

export const AutocompleteRaw = React.forwardRef(function Autocomplete<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>(
  {
    label,
    placeholder,
    loading,
    inputProps,
    slotProps,
    ...props
  }: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <MuiAutocomplete
      ref={ref}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          {...inputProps}
          label={label}
          placeholder={placeholder}
          inputProps={{
            ...params.inputProps,
            ...inputProps?.inputProps,
          }}
          InputProps={{
            ...inputProps?.InputProps,
            ...params.InputProps,
            startAdornment: (
              <React.Fragment>
                {inputProps?.InputProps?.startAdornment}
                {params.InputProps.startAdornment}
              </React.Fragment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress
                    color="inherit"
                    size={18}
                    wrapSx={{ mb: 1.5 }}
                  />
                ) : null}
                {inputProps?.InputProps?.endAdornment}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
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
            selected={selected}
          />
        );
      }}
      ListboxComponent={List}
      PaperComponent={Paper}
      popupIcon={<ExpandMoreIcon />}
      clearIcon={<ClearIcon />}
      slotProps={{
        clearIndicator: { size: "small" },
        ...slotProps,
      }}
      ChipProps={{
        size: "small",
      }}
      {...props}
    />
  );
});

interface AutocompleteComponent {
  <
    Value,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
  >(
    props: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> &
      React.RefAttributes<HTMLDivElement>,
  ): React.JSX.Element;
}

export const Autocomplete = React.memo(
  AutocompleteRaw,
) as AutocompleteComponent;
