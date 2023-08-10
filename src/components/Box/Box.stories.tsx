import { Box, BoxProps } from "./Box";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BoxProps> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<BoxProps> = {
  render: (props) => <Box {...props} />
};
