import { SkeletonGroup, SkeletonGroupProps } from "./SkeletonGroup";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SkeletonGroupProps> = {
  title: "Components/SkeletonGroup",
  component: SkeletonGroup,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<SkeletonGroupProps> = {};

export const OneColumn: StoryObj<SkeletonGroupProps> = {
  args: {
    rowsCount: 5
  }
};

export const MultipleColumn: StoryObj<SkeletonGroupProps> = {
  args: {
    rowsCount: 5,
    gridTemplate: [
      "minmax(80px, 1fr)",
      "5fr",
      "minmax(110px, 1fr)",
      "minmax(80px, 1fr)",
      "minmax(80px, 1fr)"
    ]
  }
};
