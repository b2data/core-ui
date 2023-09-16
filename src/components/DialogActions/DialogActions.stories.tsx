import { DialogActions, DialogActionsProps } from "./DialogActions";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DialogActionsProps> = {
  title: "Components/Dialogs/DialogActions",
  component: DialogActions,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DialogActionsProps> = {
  args: {
    items: [
      { label: "Cancel", variant: "outlined", color: "default" },
      { label: "Submit", variant: "contained", color: "primary" },
    ],
  },
  render: (props) => <DialogActions {...props} />,
};
