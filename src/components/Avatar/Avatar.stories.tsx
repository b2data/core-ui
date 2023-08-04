import type { Meta, StoryObj } from "@storybook/react";
import { FolderIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Avatar, AvatarProps } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Base: Story = {};

export const Mixed: Story = {
  render: () => (
    <Preview>
      <Avatar alt="Cindy Baker" src="/images/avatar/1.jpg" />
      <Avatar alt="Cindy Baker" src="/images/avatar/brocken.jpg" />
      <Avatar>CB</Avatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </Preview>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Preview>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
    </Preview>
  ),
};

export const Variants: Story = {
  render: () => (
    <Preview>
      <Avatar variant="circular" />
      <Avatar variant="rounded" />
      <Avatar variant="square" />
    </Preview>
  ),
};
