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
    value: `# Heading 1`,
  },
};
