import { DeleteIcon, SendIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Button, ButtonProps } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "Components/Buttons/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<ButtonProps> = {
  render: (props) => <Button {...props}>Text</Button>
};

export const Text: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview>
      <Button {...props} variant="text">
        Primary
      </Button>
      <Button {...props} variant="text" disabled>
        Disabled
      </Button>
      <Button {...props} variant="text" href="#link">
        Link
      </Button>
    </Preview>
  )
};

export const Contained: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview>
      <Button {...props} variant="contained">
        Primary
      </Button>
      <Button {...props} variant="contained" disabled>
        Disabled
      </Button>
      <Button {...props} variant="contained" href="#link">
        Link
      </Button>
    </Preview>
  )
};

export const Outlined: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview>
      <Button {...props} variant="outlined">
        Primary
      </Button>
      <Button {...props} variant="outlined" disabled>
        Disabled
      </Button>
      <Button {...props} variant="outlined" href="#link">
        Link
      </Button>
    </Preview>
  )
};

export const Colors: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Button {...props} color="primary">
          Primary
        </Button>
        <Button {...props} color="secondary">
          Secondary
        </Button>
        <Button {...props} color="success">
          Success
        </Button>
        <Button {...props} color="error">
          Error
        </Button>
        <Button {...props} color="info">
          Info
        </Button>
        <Button {...props} color="warning">
          Warning
        </Button>
        <Button {...props} color="inherit">
          Inherit
        </Button>
        <Button {...props} color="default">
          Default
        </Button>
      </Preview>
      <Preview>
        <Button {...props} color="primary" variant="contained">
          Primary
        </Button>
        <Button {...props} color="secondary" variant="contained">
          Secondary
        </Button>
        <Button {...props} color="success" variant="contained">
          Success
        </Button>
        <Button {...props} color="error" variant="contained">
          Error
        </Button>
        <Button {...props} color="info" variant="contained">
          Info
        </Button>
        <Button {...props} color="warning" variant="contained">
          Warning
        </Button>
        <Button {...props} color="inherit" variant="contained">
          Inherit
        </Button>
        <Button {...props} color="default" variant="contained">
          Default
        </Button>
      </Preview>
      <Preview>
        <Button {...props} color="primary" variant="outlined">
          Primary
        </Button>
        <Button {...props} color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button {...props} color="success" variant="outlined">
          Success
        </Button>
        <Button {...props} color="error" variant="outlined">
          Error
        </Button>
        <Button {...props} color="info" variant="outlined">
          Info
        </Button>
        <Button {...props} color="warning" variant="outlined">
          Warning
        </Button>
        <Button {...props} color="inherit" variant="outlined">
          Inherit
        </Button>
        <Button {...props} color="default" variant="outlined">
          Default
        </Button>
      </Preview>
    </Preview>
  )
};

export const Sizes: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Button {...props} size="small">
          Small
        </Button>
        <Button {...props} size="medium">
          Medium
        </Button>
        <Button {...props} size="large">
          Large
        </Button>
      </Preview>
      <Preview>
        <Button {...props} size="small" variant="contained">
          Small
        </Button>
        <Button {...props} size="medium" variant="contained">
          Medium
        </Button>
        <Button {...props} size="large" variant="contained">
          Large
        </Button>
      </Preview>
      <Preview>
        <Button {...props} size="small" variant="outlined">
          Small
        </Button>
        <Button {...props} size="medium" variant="outlined">
          Medium
        </Button>
        <Button {...props} size="large" variant="outlined">
          Large
        </Button>
      </Preview>
    </Preview>
  )
};

export const Icons: StoryObj<ButtonProps> = {
  render: (props) => (
    <Preview>
      <Button
        {...props}
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
      >
        Delete
      </Button>
      <Button
        {...props}
        variant="contained"
        endIcon={<SendIcon />}
        size="small"
      >
        Send
      </Button>
      <Button {...props} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button {...props} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button
        {...props}
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="large"
      >
        Delete
      </Button>
      <Button
        {...props}
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
      >
        Send
      </Button>
    </Preview>
  )
};

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true,
    variant: "contained",
    children: "Full width"
  }
};
