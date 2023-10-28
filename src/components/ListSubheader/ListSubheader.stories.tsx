import { ListSubheader, ListSubheaderProps } from "./ListSubheader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListSubheaderProps> = {
  title: "Components/List/List Subheader",
  component: ListSubheader,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListSubheaderProps> = {
  args: {
    children: "Subheader",
  },
};
