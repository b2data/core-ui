import { ListItem } from "../ListItem";

import { List, ListProps } from "./List";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListProps> = {
  title: "Components/List/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;

const content = [
  <ListItem asButton text="List item 1" key={1} />,
  <ListItem asButton text="List item 2" key={2} />,
  <ListItem asButton text="List item 3" key={3} />,
];

export const Base: StoryObj<ListProps> = {
  render: (props) => <List {...props}>{content}</List>,
};

export const StickySubheader: StoryObj<ListProps> = {
  render: (props) => (
    <div style={{ height: 200, overflowY: "auto" }}>
      <List {...props}>
        {[0, 1, 2, 3, 4, 5].map((ind) => (
          <List key={ind} subheader={`Sticky header ${ind}`}>
            {content}
          </List>
        ))}
      </List>
    </div>
  ),
};
