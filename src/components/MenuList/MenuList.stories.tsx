import { MenuItem } from "../MenuItem";

import { MenuList, MenuListProps } from "./MenuList";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MenuListProps> = {
  title: "Components/Menu/Menu List",
  component: MenuList,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MenuListProps> = {
  args: {
    sx: { border: "1px solid" },
    children: [
      <MenuItem key={1}>Profile</MenuItem>,
      <MenuItem key={2}>My account</MenuItem>,
      <MenuItem key={3}>Logout</MenuItem>,
    ],
  },
};
