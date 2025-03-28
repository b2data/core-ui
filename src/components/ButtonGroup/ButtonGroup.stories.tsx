import { ArrowDropDownIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Button } from "../Button";

import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonGroupProps> = {
  title: "Components/Buttons/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;

const buttons = [
  <Button key={1}>One</Button>,
  <Button key={2}>Two</Button>,
  <Button key={3}>Three</Button>,
];

export const Base: StoryObj<ButtonGroupProps> = {
  render: (props) => <ButtonGroup {...props}>{buttons}</ButtonGroup>,
};

export const Variants: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <ButtonGroup {...props} variant="outlined">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} variant="contained">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} variant="text">
        {buttons}
      </ButtonGroup>
    </Preview>
  ),
};

export const Colors: StoryObj<ButtonGroupProps> = {
  args: { variant: "contained" },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <ButtonGroup {...props} color="primary">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="secondary">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="success">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="error">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="info">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="warning">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} color="inherit">
        {buttons}
      </ButtonGroup>
    </Preview>
  ),
};

export const Sizes: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <ButtonGroup {...props} size="small">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} size="medium">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} size="large">
        {buttons}
      </ButtonGroup>
    </Preview>
  ),
};

export const Orientation: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <Preview>
      <ButtonGroup {...props} orientation="vertical" variant="text">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} orientation="vertical" variant="contained">
        {buttons}
      </ButtonGroup>
      <ButtonGroup {...props} orientation="vertical" variant="outlined">
        {buttons}
      </ButtonGroup>
    </Preview>
  ),
};

export const FullWidth: StoryObj<ButtonGroupProps> = {
  args: { fullWidth: true, children: buttons, size: "large" },
};

export const SplitButton: StoryObj<ButtonGroupProps> = {
  render: (props) => (
    <ButtonGroup {...props} variant="contained">
      <Button>Some text</Button>
      <Button size="small">
        <ArrowDropDownIcon />
      </Button>
    </ButtonGroup>
  ),
};
