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
  args: {
    editable: true,
    currentUserId: "user1",
    blocks: [
      {
        id: "1",
        type: "paragraph",
        offset: 0,
        number: 1,
        variants: [
          {
            id: "11",
            data: { text: "Hello, World!" },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user1", firstName: "John" },
          },
          {
            id: "12",
            data: { text: "Hello, World!" },
            isCurrent: false,
            votes: [],
            createdBy: "user2",
            createdByData: { id: "user2", firstName: "Maria" },
          },
        ],
      },
      {
        id: "2",
        type: "paragraph",
        offset: 0,
        number: 2,
        variants: [
          {
            id: "22",
            data: { text: "Hello, World!" },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user1", firstName: "John" },
          },
        ],
      },
    ],
  },
  render: (props) => (
    <DndProvider backend={HTML5Backend}>
      <DataBlockEditor {...props} />
    </DndProvider>
  ),
};
