import { DeleteIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { IconButton, IconButtonProps } from "./IconButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<IconButtonProps> = {
  title: "Components/Buttons/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<IconButtonProps> = {
  render: (props) => (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  ),
};

export const Colors: StoryObj<IconButtonProps> = {
  render: (props) => (
    <Preview>
      <IconButton {...props} color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="secondary">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="success">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="error">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="info">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="warning">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="inherit">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} color="default">
        <DeleteIcon />
      </IconButton>
    </Preview>
  ),
};

export const Sizes: StoryObj<IconButtonProps> = {
  render: (props) => (
    <Preview>
      <IconButton {...props} size="small">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} size="medium">
        <DeleteIcon />
      </IconButton>
      <IconButton {...props} size="large">
        <DeleteIcon />
      </IconButton>
    </Preview>
  ),
};
