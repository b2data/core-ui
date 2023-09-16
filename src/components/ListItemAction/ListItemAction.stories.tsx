import { SaveIcon } from "src/icons";

import { IconButton } from "../IconButton";

import { ListItemAction, ListItemActionProps } from "./ListItemAction";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemActionProps> = {
  title: "Components/List/ListItemAction",
  component: ListItemAction,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ListItemActionProps> = {
  render: (props) => (
    <div style={{ height: 200 }}>
      <ListItemAction {...props}>
        <IconButton edge="end">
          <SaveIcon />
        </IconButton>
      </ListItemAction>
    </div>
  ),
};
