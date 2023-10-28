import { SaveIcon } from "src/icons";

import { Checkbox } from "../Checkbox";

import { MenuItem, MenuItemProps } from "./MenuItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MenuItemProps> = {
  title: "Components/Menu/Menu Item",
  component: MenuItem,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MenuItemProps> = {
  args: { children: "Text" },
};

export const Variants: StoryObj<MenuItemProps> = {
  render: (props) => (
    <div style={{ width: 500, padding: 10, border: "1px solid" }}>
      <MenuItem {...props}>Text</MenuItem>
      <MenuItem startAdornment={<SaveIcon />} {...props}>
        Text
      </MenuItem>
      <MenuItem endAdornment={<SaveIcon />} {...props}>
        Text
      </MenuItem>
      <MenuItem
        startAdornment={<Checkbox />}
        endAdornment={<SaveIcon />}
        {...props}
      >
        Text
      </MenuItem>
    </div>
  ),
};
