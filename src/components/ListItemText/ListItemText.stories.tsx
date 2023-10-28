import { ListItemText, ListItemTextProps } from "./ListItemText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemTextProps> = {
  title: "Components/List/List Item Text",
  component: ListItemText,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemTextProps> = {
  args: {
    children: "Some text",
  },
};

export const Variants: StoryObj<ListItemTextProps> = {
  args: {
    primary: "Primary text",
    secondary: "Secondary text",
  },
};

export const WithTooltipSmallText: StoryObj<ListItemTextProps> = {
  args: {
    primary: "Primary text",
    withTooltip: true,
  },
};

export const WithTooltipLargeText: StoryObj<ListItemTextProps> = {
  args: {
    primary:
      "Primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text - primary text",
    withTooltip: true,
    primaryTypographyProps: { noWrap: true },
  },
};
