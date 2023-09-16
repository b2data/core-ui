import { ListItemText, ListItemTextProps } from "./ListItemText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemTextProps> = {
  title: "Components/List/ListItemText",
  component: ListItemText,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemTextProps> = {
  args: {
    children: "Some text",
  },
};

export const Variants: StoryObj<ListItemTextProps> = {
  args: {
    primary: "Primary text",
    secondary: "Secondary text",
  },
};
