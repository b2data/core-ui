import { Paper, PaperProps } from "./Paper";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<PaperProps> = {
  title: "Components/Paper",
  component: Paper,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<PaperProps> = {
  args: {
    sx: {
      width: 100,
      height: 100,
    },
  },
  render: (props) => <Paper {...props} />,
};
