import { Preview } from ".storybook/components";

import { Chip } from "../Chip";

import { Divider, DividerProps } from "./Divider";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DividerProps> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"]
};

export default meta;

const content = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Phasellus id dignissim justo. Nulla ut facilisis ligula. 
  Interdum et malesuada fames ac ante ipsum primis in faucibus. 
  Sed malesuada lobortis pretium.
`;

export const Base: StoryObj<DividerProps> = {};

export const Aligns: StoryObj<DividerProps> = {
  args: { sx: { my: 2 } },
  render: (props) => (
    <div>
      {content}
      <Divider {...props}>CENTER</Divider>
      {content}
      <Divider {...props} textAlign="left">
        LEFT
      </Divider>
      {content}
      <Divider {...props} textAlign="right">
        RIGHT
      </Divider>
      {content}
      <Divider {...props}>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </div>
  )
};

export const Variants: StoryObj<DividerProps> = {
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          border: "1px solid",
          alignItems: "center"
        }}
      >
        <div>{content}</div>
        <Divider
          {...props}
          flexItem
          orientation="vertical"
          variant="fullWidth"
        />
        <div>{content}</div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          border: "1px solid",
          alignItems: "center"
        }}
      >
        <div>{content}</div>
        <Divider {...props} flexItem orientation="vertical" variant="inset" />
        <div>{content}</div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          border: "1px solid",
          alignItems: "center"
        }}
      >
        <div>{content}</div>
        <Divider {...props} flexItem orientation="vertical" variant="middle" />
        <div>{content}</div>
      </div>
    </Preview>
  )
};
