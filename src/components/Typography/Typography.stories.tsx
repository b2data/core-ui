import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<TypographyProps> = {
  render: (props) => <Typography {...props}>Text</Typography>,
};

export const Variant: StoryObj<TypographyProps> = {
  args: { gutterBottom: true, sx: { display: "block" } },
  render: (props) => (
    <div>
      <Typography {...props} variant="h1">
        h1. Heading
      </Typography>
      <Typography {...props} variant="h2">
        h2. Heading
      </Typography>
      <Typography {...props} variant="h3">
        h3. Heading
      </Typography>
      <Typography {...props} variant="h4">
        h4. Heading
      </Typography>
      <Typography {...props} variant="h5">
        h5. Heading
      </Typography>
      <Typography {...props} variant="h6">
        h6. Heading
      </Typography>
      <Typography {...props} variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography {...props} variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography {...props} variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography {...props} variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography {...props} variant="button">
        button text
      </Typography>
      <Typography {...props} variant="caption">
        caption text
      </Typography>
      <Typography {...props} variant="overline">
        overline text
      </Typography>
    </div>
  ),
};

export const Align: StoryObj<TypographyProps> = {
  render: (props) => (
    <div>
      <Typography {...props} align="left">
        Align Left
      </Typography>
      <Typography {...props} align="center">
        Align Center
      </Typography>
      <Typography {...props} align="right">
        Align Right
      </Typography>
      <Typography {...props} align="inherit">
        Align Inherit
      </Typography>
      <Typography {...props} align="justify">
        Align Justify
      </Typography>
    </div>
  ),
};

export const Margin: StoryObj<TypographyProps> = {
  args: {
    sx: { bgcolor: "success.main" },
  },
  render: (props) => (
    <div style={{ background: "red" }}>
      <Typography {...props} paragraph>
        Paragraph
      </Typography>
      <Typography {...props} paragraph>
        Paragraph
      </Typography>
      <Typography {...props} gutterBottom>
        gutterBottom
      </Typography>
      <Typography {...props} gutterBottom>
        gutterBottom
      </Typography>
      <Typography {...props} gutterBottom>
        gutterBottom
      </Typography>
    </div>
  ),
};

export const Wrap: StoryObj<TypographyProps> = {
  args: { noWrap: true, gutterBottom: true },
  render: (props) => (
    <div>
      <Typography {...props}>
        noWrap: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography {...props} wrapLines={2}>
        noWrap + wrapLines = 2: Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
        rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
  ),
};
