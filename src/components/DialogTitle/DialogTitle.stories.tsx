import { DialogTitle, DialogTitleProps } from "./DialogTitle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DialogTitleProps> = {
  title: "Components/Dialogs/DialogTitle",
  component: DialogTitle,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DialogTitleProps> = {
  args: {
    children: <>Dialog title</>,
  },
  render: (props) => <DialogTitle {...props} />,
};
