import { SaveIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { LoadingButton, LoadingButtonProps } from "./LoadingButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<LoadingButtonProps> = {
  title: "Components/Buttons/Loading Button",
  component: LoadingButton,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<LoadingButtonProps> = {
  args: {
    loading: true,
    children: <span>Save</span>
  }
};

export const LoadingIndicator: StoryObj<LoadingButtonProps> = {
  args: {
    loading: true,
    children: <span>Fetch data</span>,
    loadingIndicator: "Loading..."
  }
};
export const LoadingPosition: StoryObj<LoadingButtonProps> = {
  args: {
    loading: true,
    children: <span>Save</span>
  },
  render: (props) => (
    <Preview>
      <LoadingButton
        {...props}
        loadingPosition="start"
        startIcon={<SaveIcon />}
      />
      <LoadingButton {...props} loadingPosition="end" endIcon={<SaveIcon />} />
    </Preview>
  )
};
