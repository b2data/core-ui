import { MailIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Badge, BadgeProps } from "./Badge";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<BadgeProps> = {
  args: {
    badgeContent: 4
  },
  render: (props) => (
    <Badge {...props}>
      <MailIcon />
    </Badge>
  )
};

export const Colors: StoryObj<BadgeProps> = {
  args: {
    badgeContent: 4,
    children: <MailIcon />
  },
  render: (props) => (
    <Preview>
      <Badge {...props} color="primary" />
      <Badge {...props} color="secondary" />
      <Badge {...props} color="error" />
      <Badge {...props} color="success" />
      <Badge {...props} color="warning" />
      <Badge {...props} color="info" />
      <Badge {...props} color="default" />
    </Preview>
  )
};

export const Max: StoryObj<BadgeProps> = {
  args: {
    children: <MailIcon />
  },
  render: (props) => (
    <Preview>
      <Badge {...props} badgeContent={99} />
      <Badge {...props} badgeContent={100} />
      <Badge {...props} badgeContent={1000} max={999} />
    </Preview>
  )
};

export const Visibility: StoryObj<BadgeProps> = {
  args: {
    children: <MailIcon />
  },
  render: (props) => (
    <Preview>
      <Badge {...props} variant="dot" invisible={false} />
      <Badge {...props} variant="dot" invisible={true} />
      <Badge {...props} showZero={false} badgeContent={0} />
      <Badge {...props} showZero={true} badgeContent={0} />
    </Preview>
  )
};

export const Variants: StoryObj<BadgeProps> = {
  args: {
    badgeContent: 4,
    children: <MailIcon />
  },
  render: (props) => (
    <Preview>
      <Badge {...props} variant="standard" />
      <Badge {...props} variant="dot" />
      <Badge
        {...props}
        variant="liveDot"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Preview>
  )
};
