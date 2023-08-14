import { Preview } from ".storybook/components";

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

export const Variants: StoryObj<AlertProps> = {
  args: { title: "Title", children: "content", sx: { width: 400 } },
  render: (props) => (
    <Preview>
      <Preview style={{ flexDirection: "column", alignItems: "start" }}>
        <Alert {...props} />
        <Alert {...props} severity="success" />
        <Alert {...props} severity="error" />
        <Alert {...props} severity="warning" />
        <Alert {...props} severity="info" />
      </Preview>
      <Preview style={{ flexDirection: "column", alignItems: "start" }}>
        <Alert {...props} variant="outlined" />
        <Alert {...props} severity="success" variant="outlined" />
        <Alert {...props} severity="error" variant="outlined" />
        <Alert {...props} severity="warning" variant="outlined" />
        <Alert {...props} severity="info" variant="outlined" />
      </Preview>
    </Preview>
  )
};

export const Close: StoryObj<AlertProps> = {
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
