import { CircularProgress } from "../CircularProgress";

import { Backdrop, BackdropProps } from "./Backdrop";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BackdropProps> = {
  title: "Components/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<BackdropProps> = {
  args: {
    children: <CircularProgress />,
  },
  render: (props) => (
    <div style={{ height: 300 }}>
      <Backdrop {...props} open={props.open} />
    </div>
  ),
};

export const Light: StoryObj<BackdropProps> = {
  args: {
    variant: "light",
    children: <CircularProgress color="inherit" />,
  },
  render: (props) => (
    <div style={{ height: 200 }}>
      <Backdrop {...props} open />
    </div>
  ),
};

export const Dark: StoryObj<BackdropProps> = {
  args: {
    variant: "dark",
    children: <CircularProgress color="inherit" />,
  },
  render: (props) => (
    <div style={{ height: 200 }}>
      <Backdrop {...props} open />
    </div>
  ),
};
