import { MarkdownContent, MarkdownContentProps } from "./MarkdownContent";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MarkdownContentProps> = {
  title: "Components/Inputs/Markdown Content",
  component: MarkdownContent,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<MarkdownContentProps> = {
  args: {
    placeholder: "Placeholder",
    value: `==Участники==
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
- создание блоков`,
  },
};
