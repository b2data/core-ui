import { DropZone, DropZoneProps } from "./DropZone";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DropZoneProps> = {
  title: "Components/DropZone",
  component: DropZone,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DropZoneProps> = {
  args: {
    sx: {
      width: 1,
      height: "200px",
    },
    hintText: "Select or drop files",
  },
  argTypes: {
    onDrop: { action: "onDrop" },
    onSelect: { action: "onSelect" },
    onTypeError: { action: "onTypeError" },
  },
  render: (props) => <DropZone {...props} />,
};
