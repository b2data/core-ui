import { useState } from "react";

import { MenuItem } from "../MenuItem";
import { Button } from "../Button";

import { Menu, MenuProps } from "./Menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MenuProps> = {
  title: "Components/Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MenuProps> = {
  render: (props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClose = () => setAnchorEl(null);

    return (
      <div>
        <Button
          variant="contained"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Open Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          {...props}
        >
          <MenuItem onClick={handleClose}>Telegram</MenuItem>
          <MenuItem onClick={handleClose}>Whatsapp</MenuItem>
          <MenuItem>Mail</MenuItem>
        </Menu>
      </div>
    );
  },
};
