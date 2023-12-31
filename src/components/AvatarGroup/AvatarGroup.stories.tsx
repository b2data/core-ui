import { Preview } from ".storybook/components";
import Avatar1 from "src/assets/images/avatar/1.jpg";
import Avatar2 from "src/assets/images/avatar/2.jpg";
import Avatar3 from "src/assets/images/avatar/3.jpg";

import { Avatar } from "../Avatar";

import { AvatarGroup, AvatarGroupProps } from "./AvatarGroup";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AvatarGroupProps> = {
  title: "Components/Avatar/Avatar Group",
  component: AvatarGroup,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <AvatarGroup {...props}>
      <Avatar src={Avatar1} />
      <Avatar src={Avatar2} />
      <Avatar src={Avatar3} />
    </AvatarGroup>
  ),
};

export const Sizes: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <Preview>
      <AvatarGroup {...props} size="small" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} size="medium" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} size="large" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
  ),
};

export const Max: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <Preview>
      <AvatarGroup {...props} max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} max={10}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
  ),
};

export const Total: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <Preview>
      <AvatarGroup {...props} total={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} total={10}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
  ),
};

export const Spacing: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <Preview>
      <AvatarGroup {...props} spacing="small">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} spacing="medium">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
  ),
};

export const Variants: StoryObj<AvatarGroupProps> = {
  render: (props) => (
    <Preview>
      <AvatarGroup {...props} variant="circular">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} variant="rounded">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} variant="square">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
  ),
};
