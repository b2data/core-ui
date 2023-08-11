import { useState } from "react";

import { Popover, PopoverProps } from "./Popover";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<PopoverProps> = {
  render: (props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popover
        </button>
        <Popover
          {...props}
          id="demo"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          The content of the Popover.
        </Popover>
      </>
    );
  }
};
