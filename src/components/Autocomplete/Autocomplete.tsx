import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteOwnerState,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderOptionState,
  AutocompleteValue,
  FilterOptionsState,
  Autocomplete as MuiAutocomplete,
  SxProps,
  Theme,
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
> {
  /**
   * Label of the Autocomple Input
   */
  label?: string;
  /**
   * Placeholder of the Autocomple Input
   */
  placeholder?: string;
  /**
   * Array of options.
   */
  options: ReadonlyArray<Value>;
  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete?: boolean;
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect?: "touch" | "mouse" | true | false;
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur?: boolean;
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue?: AutocompleteValue<Value, Multiple, DisableClearable, FreeSolo>;
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable?: DisableClearable;
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal?: boolean;
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions?: (
    options: Value[],
    state: FilterOptionsState<Value>,
  ) => Value[];
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions?: boolean;
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo?: FreeSolo;
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled?: (option: Value) => boolean;
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel?: (option: Value | string) => string;
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy?: (option: Value) => string;
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id?: string;
  /**
   * The input value.
   */
  inputValue?: string;
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple?: Multiple;
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange?: (
    event: React.SyntheticEvent,
    value: AutocompleteValue<Value, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Value>,
  ) => void;
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose?: (
    event: React.SyntheticEvent,
    reason: AutocompleteCloseReason,
  ) => void;
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus?: boolean;
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly?: boolean;
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus?: boolean;
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value?: AutocompleteValue<Value, Multiple, DisableClearable, FreeSolo>;
  /**
   * Children of the component
   */
  children?: React.ReactNode;
  /**
   * Override the default text for the *clear* icon button.
   * @default 'Clear'
   */
  clearText?: string;
  /**
   * Override the default text for the *close popup* icon button.
   * @default 'Close'
   */
  closeText?: string;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default true
   */
  fullWidth?: boolean;
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText?: (more: number) => React.ReactNode;

  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading?: boolean;
  /**
   * Text to display when in a loading state.
   * @default 'Loading…'
   */
  loadingText?: React.ReactNode;
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags?: number;
  /**
   * Text to display when there are no options.
   * @default 'No options'
   */
  noOptionsText?: React.ReactNode;
  /**
   * Override the default text for the *open popup* icon button.
   * @default 'Open'
   */
  openText?: string;
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode;
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: Value,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      React.ElementType
    >,
  ) => React.ReactNode;
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags?: (
    value: Value[],
    getTagProps: AutocompleteRenderGetTagProps,
    ownerState: AutocompleteOwnerState<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      React.ElementType
    >,
  ) => React.ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
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
            ...params.InputProps,
            ...inputProps?.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress
                    color="inherit"
                    size={18}
                    wrapSx={{ mb: 1.5 }}
                  />
                ) : null}
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
