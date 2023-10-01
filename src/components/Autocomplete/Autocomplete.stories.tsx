import { useState } from "react";

import {
  Autocomplete,
  AutocompleteOption,
  AutocompleteProps,
  createFilterOptions,
} from "./Autocomplete";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AutocompleteProps> = {
  title: "Components/Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};

export default meta;

const options = [
  { id: "1", group: 1, label: "Option 1" },
  { id: "2", group: 1, label: "Option 2" },
  { id: "3", group: 1, label: "Option 3" },
  { id: "4", group: 2, label: "Option 4" },
  { id: "5", group: 2, label: "Option 5" },
  { id: "6", group: 2, label: "Option 6" },
];

export const Base: StoryObj<AutocompleteProps<AutocompleteOption>> = {
  args: {
    label: "Single",
    options,
  },
};

export const Multiple: StoryObj<AutocompleteProps<AutocompleteOption, true>> = {
  args: {
    label: "Multiple",
    multiple: true,
    options,
  },
};

export const Loading: StoryObj<AutocompleteProps<AutocompleteOption>> = {
  args: {
    label: "Loading",
    loading: true,
    options: [],
  },
};

export const Grouped: StoryObj<
  AutocompleteProps<{ id: string; group: number; label: string }>
> = {
  args: {
    label: "Grouped",
    groupBy: (opt) => `Group ${opt.group}`,
    options,
  },
};

export const OptionDisabled: StoryObj<AutocompleteProps<AutocompleteOption>> = {
  args: {
    label: "Options Disabled",
    getOptionDisabled: (opt) => ["1", "4"].includes(opt.id),
    options,
  },
};

export const Disabled: StoryObj<AutocompleteProps<AutocompleteOption>> = {
  args: {
    label: "Disabled",
    disabled: true,
    options,
  },
};

type FreeSoloOption = { id: string; label: string; inputValue?: string };

export const FreeSolo: StoryObj<
  AutocompleteProps<FreeSoloOption, false, false, true>
> = {
  args: {
    label: "Free solo",
    freeSolo: true,
    options,
  },
  render: (props) => {
    const filter = createFilterOptions<FreeSoloOption>();
    const [value, setValue] = useState<FreeSoloOption | null>(null);

    return (
      <Autocomplete
        {...props}
        value={value}
        onChange={(_, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              label: newValue,
              id: "new",
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              label: newValue.inputValue,
              id: "new",
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.label,
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              label: `Add "${inputValue}"`,
              id: "new",
            });
          }

          return filtered;
        }}
      />
    );
  },
};
