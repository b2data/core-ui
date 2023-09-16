import { DialogContent, DialogContentProps } from "./DialogContent";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DialogContentProps> = {
  title: "Components/Dialogs/DialogContent",
  component: DialogContent,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DialogContentProps> = {
  args: {
    children: <>Dialog content</>,
  },
  render: (props) => <DialogContent {...props} />,
};
