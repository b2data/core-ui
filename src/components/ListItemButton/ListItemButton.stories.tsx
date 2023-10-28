import { ListItemButton, ListItemButtonProps } from "./ListItemButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemButtonProps> = {
  title: "Components/List/List Item Button",
  component: ListItemButton,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemButtonProps> = {
  args: {
    children: "Text",
  },
};
