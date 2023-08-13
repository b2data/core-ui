import { Button } from "../Button";
import { Box } from "../Box";

import { Alert, AlertProps } from "./Alert";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AlertProps> = {
  title: "Components/Alert/Alert",
  component: Alert,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<AlertProps> = {
  args: { title: "Title", children: "content" }
};

export const Outlined: StoryObj<AlertProps> = {
  args: { title: "Title", children: "content", variant: "outlined" }
};

export const CloseIcon: StoryObj<AlertProps> = {
  args: { title: "Title", children: "content" },
  argTypes: { onClose: { action: "onClose" } }
};

export const Action: StoryObj<AlertProps> = {
  args: {
    title: "Title",
    children: "content",
    actions: (
      <Box>
        <Button color="default" size="small">
          Cancel
        </Button>
        <Button color="primary" size="small">
          Confirm
        </Button>
      </Box>
    )
  }
};
