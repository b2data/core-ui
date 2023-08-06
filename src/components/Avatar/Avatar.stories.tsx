import { AccessTimeFilledIcon, CancelIcon, CheckCircleIcon } from "src/icons";
import { Preview } from ".storybook/components";
import Avatar1 from "src/assets/images/avatar/1.jpg";

import { Badge } from "../Badge";

import { Avatar, AvatarProps } from "./Avatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar/Avatar",
  component: Avatar,
  tags: ["autodocs"]
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
        <CheckCircleIcon />
      </Avatar>
    </Preview>
  )
};

export const Sizes: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
    </Preview>
  )
};

export const Variants: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Avatar variant="circular" />
      <Avatar variant="rounded" />
      <Avatar variant="square" />
    </Preview>
  )
};

export const WithBadge: StoryObj<AvatarProps> = {
  render: () => (
    <Preview>
      <Badge
        variant="liveDot"
        overlap="circular"
        badgeContent=""
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar alt="Remy Sharp" src={Avatar1} size="large" />
      </Badge>
      <Badge
        overlap="circular"
        color="default"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <CheckCircleIcon
            color="success"
            sx={({ palette }) => ({
              fontSize: 18,
              border: `1px solid ${palette.background.paper}`,
              bgcolor: palette.background.paper,
              borderRadius: 50
            })}
          />
        }
      >
        <Avatar alt="Remy Sharp" src={Avatar1} size="large" />
      </Badge>
      <Badge
        overlap="circular"
        color="default"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <AccessTimeFilledIcon
            color="warning"
            sx={({ palette }) => ({
              fontSize: 14,
              border: `1px solid ${palette.background.paper}`,
              bgcolor: palette.background.paper,
              borderRadius: 50
            })}
          />
        }
      >
        <Avatar alt="Remy Sharp" src={Avatar1} />
      </Badge>
      <Badge
        overlap="circular"
        color="default"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <CancelIcon
            color="error"
            sx={({ palette }) => ({
              fontSize: 10,
              border: `1px solid ${palette.background.paper}`,
              bgcolor: palette.background.paper,
              borderRadius: 50
            })}
          />
        }
      >
        <Avatar alt="Remy Sharp" src={Avatar1} size="small" />
      </Badge>
    </Preview>
  )
};
