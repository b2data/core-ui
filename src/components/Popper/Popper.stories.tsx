import { useState } from "react";

import { Popper, PopperProps } from "./Popper";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<PopperProps> = {
  title: "Components/Popper",
  component: Popper,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<PopperProps> = {
  render: (props) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    return (
      <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper {...props} id="demo" open={open} anchorEl={anchorEl}>
          <div
            style={{ border: "1px solid red", background: "white", padding: 8 }}
          >
            The content of the Popper.
          </div>
        </Popper>
      </>
    );
  },
};
