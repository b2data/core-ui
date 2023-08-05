import type { Meta, StoryObj } from "@storybook/react";
import { FolderIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Avatar, AvatarProps } from "./Avatar";
import Avatar1 from "src/assets/images/avatar/1.jpg";

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<AvatarProps> = {};

export const Mixed: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Avatar alt="Remy Sharp" src={Avatar1} />
      <Avatar alt="Remy Sharp" src="unknown.jpg" />
      <Avatar src="unknown.jpg" />
      <Avatar>RS</Avatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </Preview>
  ),
};

export const Sizes: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
    </Preview>
  ),
};

export const Variants: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Avatar variant="circular" />
      <Avatar variant="rounded" />
      <Avatar variant="square" />
    </Preview>
  ),
};
