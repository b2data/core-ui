import { Tab, TabProps } from "./Tab";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TabProps> = {
  title: "Components/Tabs/Tab",
  component: Tab,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<TabProps> = {
  args: { label: "Tab one" }
};
