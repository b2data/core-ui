import { useState } from "react";

import { Drawer, DrawerProps } from "./Drawer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DrawerProps> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<DrawerProps> = {
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <Drawer open={open} onClose={() => setOpen(false)} {...props}>
          <div style={{ padding: 16 }}>Drawer content</div>
        </Drawer>
      </div>
    );
  }
};
