import { useState } from "react";

import { Button } from "../Button";

import { Dialog, DialogProps } from "./Dialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DialogProps> = {
  title: "Components/Dialogs/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DialogProps> = {
  args: {
    title: "Base Dialog",
    children:
      "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    actions: [
      { label: "Cancel", variant: "outlined", color: "default" },
      { label: "Submit", variant: "contained", color: "primary" },
    ],
  },
  render: (props) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <Dialog {...props} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};
