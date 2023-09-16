import { MenuItem } from "../MenuItem";

import { MenuList, MenuListProps } from "./MenuList";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MenuListProps> = {
  title: "Components/Menu/MenuList",
  component: MenuList,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MenuListProps> = {
  args: {
    sx: { border: "1px solid" },
    children: [
      <MenuItem>Profile</MenuItem>,
      <MenuItem>My account</MenuItem>,
      <MenuItem>Logout</MenuItem>,
    ],
  },
};
