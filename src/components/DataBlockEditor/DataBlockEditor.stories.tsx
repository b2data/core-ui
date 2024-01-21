import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { DataBlockEditor } from "./DataBlockEditor";
import { DataBlockEditorProps } from "./model";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DataBlockEditorProps> = {
  title: "Components/Data Block Editor",
  component: DataBlockEditor,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DataBlockEditorProps> = {
  args: {},
  render: () => (
    <DndProvider backend={HTML5Backend}>
      <DataBlockEditor />
    </DndProvider>
  ),
};
