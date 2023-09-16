import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

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
  render: (props) => (
    <DndProvider backend={HTML5Backend}>
      <DropZone {...props} />
    </DndProvider>
  ),
};
