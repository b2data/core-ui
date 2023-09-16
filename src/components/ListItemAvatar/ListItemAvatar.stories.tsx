import Avatar1 from "src/assets/images/avatar/1.jpg";

import { Avatar } from "../Avatar";

import { ListItemAvatar, ListItemAvatarProps } from "./ListItemAvatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemAvatarProps> = {
  title: "Components/List/ListItemAvatar",
  component: ListItemAvatar,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemAvatarProps> = {
  render: (props) => (
    <ListItemAvatar {...props}>
      <Avatar size="small" alt="Remy Sharp" src={Avatar1} />
    </ListItemAvatar>
  ),
};
