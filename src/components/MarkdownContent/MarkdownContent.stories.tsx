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
    value: `
# Heading 1
- test
- test 2
## Heading 2
- test 3
- test 4

some content:
- test 5
`,
  },
};
