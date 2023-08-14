import { Link, LinkProps } from "./Link";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<LinkProps> = {
  args: { children: "Text" }
};
