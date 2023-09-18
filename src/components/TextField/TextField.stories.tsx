import { Wallet as WalletIcon } from "@mui/icons-material";

import { Preview } from ".storybook/components";

import { TextField, TextFieldProps } from "./TextField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextFieldProps> = {
  title: "Components/Inputs/Text Field",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<TextFieldProps> = {
  args: {
    label: "Base",
  },
  render: (props) => <TextField {...props} />,
};

const Content = (props: TextFieldProps) => (
  <Preview style={{ flexFlow: "unset" }}>
    <TextField {...props} variant="outlined" />
    <TextField {...props} variant="standard" />
  </Preview>
);

export const Default: StoryObj<TextFieldProps> = {
  args: {
    label: "Default",
  },
  render: Content,
};

export const Required: StoryObj<TextFieldProps> = {
  args: {
    label: "Required",
    required: true,
    defaultValue: "Hello World",
  },
  render: Content,
};

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    label: "Disabled",
    disabled: true,
    defaultValue: "Hello World",
  },
  render: Content,
};

export const HelperText: StoryObj<TextFieldProps> = {
  args: {
    label: "Helper text",
    helperText: "Helper text",
    defaultValue: "Hello World",
  },
  render: Content,
};

export const WithError: StoryObj<TextFieldProps> = {
  args: {
    label: "With Error",
    helperText: "Error text",
    error: true,
    defaultValue: "Hello World",
  },
  render: Content,
};

export const ReadOnly: StoryObj<TextFieldProps> = {
  args: {
    label: "ReadOnly",
    readOnly: true,
    defaultValue: "Hello World",
  },
  render: Content,
};

export const Number: StoryObj<TextFieldProps> = {
  args: {
    label: "Number",
    type: "number",
    defaultValue: 21,
  },
  render: Content,
};

export const Search: StoryObj<TextFieldProps> = {
  args: {
    label: "Search",
    type: "search",
    defaultValue: "Hello World",
  },
  render: Content,
};

export const Multiline: StoryObj<TextFieldProps> = {
  args: {
    label: "Multiline",
    multiline: true,
    minRows: 2,
    maxRows: 5,
  },
  render: Content,
};

export const StartAdornment: StoryObj<TextFieldProps> = {
  args: {
    label: "Start Adornment",
    defaultValue: "Hello World",
    startAdornment: <WalletIcon />,
  },
  render: Content,
};

export const EndAdornment: StoryObj<TextFieldProps> = {
  args: {
    label: "End Adornment",
    defaultValue: "Hello World",
    endAdornment: <WalletIcon />,
  },
  render: Content,
};
