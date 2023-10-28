import { Preview } from ".storybook/components";

import { Button } from "../Button";

import { Tooltip, TooltipProps } from "./Tooltip";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<TooltipProps> = {
  args: {
    text: "Delete",
    children: <Button color="inherit">Delete</Button>,
  },
};

export const Positions: StoryObj<TooltipProps> = {
  render: (props) => (
    <Preview>
      {[
        "top-end",
        "top-start",
        "top",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "bottom-end",
        "bottom-start",
        "bottom",
      ].map((key) => (
        <Tooltip {...props} key={key} text={key} placement={key as any}>
          <Button color="inherit">{key}</Button>
        </Tooltip>
      ))}
    </Preview>
  ),
};

export const Follow: StoryObj<TooltipProps> = {
  args: {
    text: "Delete",
    followCursor: true,
    placement: "top",
    children: <Button color="inherit">Delete</Button>,
  },
};
