import { useState } from "react";

import { Button } from "../Button";

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
          <Button onClick={() => setOpen(true)}>Open</Button>
          {open && <div>opned</div>}
        </div>
      </ClickAwayListener>
    );
  }
};
