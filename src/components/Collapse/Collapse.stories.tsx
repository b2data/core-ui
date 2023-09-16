import { useState } from "react";

import { Collapse, CollapseProps } from "./Collapse";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CollapseProps> = {
  title: "Components/Collapse",
  component: Collapse,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<CollapseProps> = {
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        I'm fixed part of content
        <button onClick={() => setOpen(!open)}>Toggle</button>
        <Collapse in={open} {...props}>
          <div>I'm collapsible</div>
        </Collapse>
      </div>
    );
  },
};
