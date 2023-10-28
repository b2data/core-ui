import { SaveIcon } from "src/icons";

import { ListItemIcon, ListItemIconProps } from "./ListItemIcon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemIconProps> = {
  title: "Components/List/List Item Icon",
  component: ListItemIcon,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemIconProps> = {
  args: {
    children: <SaveIcon />,
  },
};
