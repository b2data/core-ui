import { useState } from "react";

import { ClickAwayListener, ClickAwayListenerProps } from "./ClickAwayListener";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ClickAwayListenerProps> = {
  title: "Components/ClickAwayListener",
  component: ClickAwayListener,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<ClickAwayListenerProps> = {
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <ClickAwayListener {...props} onClickAway={() => setOpen(false)}>
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          {open && <div>opned</div>}
        </div>
      </ClickAwayListener>
    );
  }
};
