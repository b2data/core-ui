import { Stack, StackProps } from "./Stack";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<StackProps> = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<StackProps> = {
  render: (props) => <Stack {...props} />,
};
