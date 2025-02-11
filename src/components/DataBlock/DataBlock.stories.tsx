import { useState } from "react";

import { uuid } from "../../hooks";

import { DataBlock, DataBlockProps } from "./DataBlock";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DataBlockProps> = {
  title: "Components/Data Block/Data Block",
  component: DataBlock,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<DataBlockProps> = {
  args: {
    editable: true,
    placeholderText: "Enter markdown here ...",
    content: `==Участники==
@Туров Николай|0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
[[Устав Кооператива#2#2.1|da9ff288-9c79-412e-997c-b2e06c2a0d2d#da9ff288-9c79-412e-997c-b2e06c2a0d23#da9ff288-9c79-412e-997c-b2e06c2a0d25]]

\`\`\`js
const a = 10;
const b = 20;
\`\`\`

### Вопрос: Что сделано в модуле @Документы?

Сделал понятие блок, который имеет тип.
***
Есть конвертер из Markdown в HTML и обратно.

### Вопрос: Какие задачи решает редактор?

- создание документы из блоков
	- текст
		- [x] заголовок - имеет отдельный тип, т.к. по нему строиться структура документа, если нажимаешь Enter - создается новый блок.
		- [ ] не нумерованный список ( - )
- создание блоков
`,
    customKeymap: [],
    onTrackChanges: (content) => console.info(content),
    mdProps: {
      onSearchMentions: async ({ query = "" }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              [
                { name: `Group 1`, id: uuid() },
                { name: `Group 2`, id: uuid() },
                {
                  name: `User 1`,
                  detailId: uuid(),
                  detailLabel: "Space 1",
                  id: "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                },
                {
                  name: `User 2`,
                  detailId: uuid(),
                  detailLabel: "Space 1",
                  id: "-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                },
              ].filter((o) => (!query ? true : o.name.indexOf(query) > -1)),
            );
          }, 1000);
        });
      },
      onSearchReference: async ({ query = "", docId, versionId }) => {
        return new Promise((resolve) => {
          if (versionId) {
            setTimeout(() => {
              resolve(
                [
                  { label: `1`, displayLabel: "Paragraph 1", id: uuid() },
                  { label: `1.1`, id: uuid() },
                  { label: `1.1.1`, id: uuid() },
                  { label: `1.2`, id: uuid() },
                  { label: `1.3`, id: uuid() },
                  { label: `2`, displayLabel: "Paragraph 2", id: uuid() },
                  { label: `2.1`, id: uuid() },
                  { label: `2.2`, id: uuid() },
                ].filter((o) => (!query ? true : o.label.indexOf(query) > -1)),
              );
            }, 1000);
          } else if (docId) {
            setTimeout(() => {
              resolve(
                [
                  { label: `1`, displayLabel: "Version 1", id: uuid() },
                  { label: `2`, displayLabel: "Version 2", id: uuid() },
                ].filter((o) => (!query ? true : o.label.indexOf(query) > -1)),
              );
            }, 1000);
          } else {
            setTimeout(() => {
              resolve(
                [
                  { label: `doc1`, id: uuid() },
                  { label: `doc2`, id: uuid() },
                  { label: `doc3`, id: uuid() },
                ].filter((o) => (!query ? true : o.label.indexOf(query) > -1)),
              );
            }, 1000);
          }
        });
      },
    },
  },
  render: (props) => {
    const [val, setVal] = useState(props.content);

    const handleChange = (v: string) => {
      setVal(v);
      props.onTrackChanges?.(v);
    };

    return <DataBlock {...props} content={val} onTrackChanges={handleChange} />;
  },
};
