import { SnackbarMessage, SnackbarMessageProps } from "./SnackbarMessage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SnackbarMessageProps> = {
  title: "Components/Alert/Snackbar Message",
  component: SnackbarMessage,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<SnackbarMessageProps> = {
  args: {
    id: "test",
    title: "Error",
    variant: "error",
    message: "Please trye again!",
    displayVariant: "outlined",
    closeText: "Cancel"
  }
};
