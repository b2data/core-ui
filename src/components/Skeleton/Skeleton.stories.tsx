import { Preview } from ".storybook/components";

import { Skeleton, SkeletonProps } from "./Skeleton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SkeletonProps> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<SkeletonProps> = {};

export const Variants: StoryObj<SkeletonProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Skeleton {...props} variant="text" width="100%" />
      <Skeleton {...props} variant="circular" width={40} height={40} />
      <Skeleton {...props} variant="rectangular" width={210} height={60} />
      <Skeleton {...props} variant="rounded" width={210} height={60} />
    </Preview>
  )
};
