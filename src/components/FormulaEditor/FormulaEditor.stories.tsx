import "dayjs/locale/ru";

import { FormulaEditor, FormulaEditorProps } from "./FormulaEditor";
import { FormulaOperator, FormulaRow } from "./model";

import type { Meta, StoryObj } from "@storybook/react";
import { Preview } from ".storybook/components";
import { useState } from "react";

const meta: Meta<FormulaEditorProps> = {
  title: "Components/Formula Editor/Formula Editor",
  component: FormulaEditor,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<FormulaEditorProps> = {
  args: {
    rows: [],
    onChange: console.log,
    isEditable: true,
  },
  render: (props) => (
    <Preview>
      <FormulaEditor {...props} />
    </Preview>
  ),
};

export const WithUnit: StoryObj<FormulaEditorProps> = {
  args: {
    rows: [],
    isEditable: true,
    onSearch: () =>
      Promise.resolve([
        { id: "Option 1", name: "Option 1", description: "Demo description" },
        {
          id: "Option 2",
          name: "Option 2",
          description:
            "Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 Demo description 2 ",
          photo: "/favicon.svg",
        },
        { id: "Option 3", name: "Option 3" },
        {
          id: "Длина",
          name: "Длина",
          unit: "метр",
          systemUnit: "m",
          coeff: 1,
        },
        {
          id: "Дата производства",
          name: "Дата производства",
          unit: "день",
          systemUnit: "s",
          coeff: 24 * 60 * 60,
        },
      ]),
  },
  render: (props) => (
    <Preview>
      <FormulaEditor {...props} />
    </Preview>
  ),
};

export const WithDisabledRow: StoryObj<FormulaEditorProps> = {
  args: {
    isEditable: true,
    onSearch: (request) => {
      if (request.key === "field") {
        return Promise.resolve([
          { id: "__PARENT__", name: "Родительская папка" },
          { id: "Type", name: "Тип" },
          { id: "Tag", name: "Тег" },
          { id: "Creator", name: "Создатель" },
        ]);
      }

      if (request.state.field?.id === "__PARENT__") {
        return Promise.resolve([
          { id: "folder-1", name: "Папка 1" },
          { id: "folder-2", name: "Папка 2" },
          { id: "folder-3", name: "Папка 3" },
        ]);
      }

      if (request.state.field?.id === "Type") {
        return Promise.resolve([
          { id: "type-1", name: "Тип 1" },
          { id: "type-2", name: "Тип 2" },
        ]);
      }

      if (request.state.field?.id === "Tag") {
        return Promise.resolve([
          { id: "tag-1", name: "Тег 1" },
          { id: "tag-2", name: "Тег 2" },
        ]);
      }

      if (request.state.field?.id === "Creator") {
        return Promise.resolve([
          { id: "user-1", name: "Пользователь 1" },
          { id: "user-2", name: "Пользователь 2" },
        ]);
      }

      return Promise.resolve([]);
    },
  },
  render: (props) => {
    const [rows, setRows] = useState<FormulaRow[]>([
      {
        index: 1,
        type: "text",
        field: {
          id: "__PARENT__",
          name: "Родительская папка",
        },
        operator: FormulaOperator.Equal,
        value: {
          id: "folder-1",
          name: "Папка 1",
        },
        disabled: true,
      },
      {
        index: 2,
        type: "text",
        field: {
          id: "Type",
          name: "Тип",
        },
        operator: FormulaOperator.Equal,
      },
    ]);

    return (
      <Preview>
        <FormulaEditor
          {...props}
          rows={rows}
          onChange={(newRows) => {
            console.log("Changed rows:", newRows);
            setRows(newRows);
          }}
        />
      </Preview>
    );
  },
};
