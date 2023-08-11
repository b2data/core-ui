import { useState } from "react";

import { FavoriteIcon } from "src/icons";

import { Tab } from "../Tab";

import { Tabs, TabsProps } from "./Tabs";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TabsProps> = {
  title: "Components/Tabs/Tabs",
  component: Tabs,
  tags: ["autodocs"]
};

export default meta;

const content = [
  <Tab label="Item One" />,
  <Tab label="Item Two" />,
  <Tab label="Item Three" disabled />
];

export const Base: StoryObj<TabsProps> = {
  args: { children: content, value: 1 }
};

export const Variants: StoryObj<TabsProps> = {
  args: { children: content },
  render: (props) => {
    const [value, setValue] = useState(0);
    const handleChange = (e: React.SyntheticEvent, v: number) => setValue(v);
    return (
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard"
          {...props}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard"
          centered
          {...props}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          {...props}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          {...props}
          children={content.concat(content).concat(content).concat(content)}
        />
      </div>
    );
  }
};

export const Vertical: StoryObj<TabsProps> = {
  args: {
    children: content.concat(content),
    orientation: "vertical",
    variant: "scrollable",
    value: 1
  },
  render: (props) => {
    return (
      <div style={{ height: 200, display: "flex" }}>
        <Tabs {...props} />
        <div style={{ flex: 1 }}>Content</div>
      </div>
    );
  }
};

export const WithIcon: StoryObj<TabsProps> = {
  args: { value: 1 },
  render: (props) => (
    <Tabs {...props}>
      <Tab label="Item One" icon={<FavoriteIcon />} />
      <Tab label="Item Two" iconPosition="end" icon={<FavoriteIcon />} />
      <Tab label="Item Three" disabled />
    </Tabs>
  )
};
