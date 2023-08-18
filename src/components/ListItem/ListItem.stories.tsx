import { SaveIcon } from "src/icons";
import Avatar1 from "src/assets/images/avatar/1.jpg";

import { IconButton } from "../IconButton";
import { Checkbox } from "../Checkbox";
import { Avatar } from "../Avatar";

import { ListItem, ListItemProps } from "./ListItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ListItemProps> = {
  title: "Components/List/ListItem",
  component: ListItem,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<ListItemProps> = {
  args: {
    text: "Primary"
  }
};

export const Variants: StoryObj<ListItemProps> = {
  render: (props) => (
    <div>
      <ListItem text="Primary" {...props} />
      <ListItem text="Primary" secondaryText="Secondary" {...props} />
      <ListItem asButton text="Primary" {...props} />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        divider
        {...props}
      />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        avatar={<Avatar src={Avatar1} />}
        divider
        {...props}
      />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        icon={<SaveIcon />}
        {...props}
      />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        action={
          <IconButton>
            <SaveIcon />
          </IconButton>
        }
        {...props}
      />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        icon={<SaveIcon />}
        action={<Checkbox />}
        {...props}
      />
      <ListItem
        asButton
        text="Primary"
        secondaryText="Secondary"
        icon={<SaveIcon />}
        menuActions={[{ children: "test" }]}
        {...props}
      />
    </div>
  )
};
