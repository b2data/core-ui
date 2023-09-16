import { Preview } from ".storybook/components";
import { SaveIcon } from "src/icons";
import Avatar1 from "src/assets/images/avatar/1.jpg";

import { Avatar } from "../Avatar";

import { Chip, ChipProps } from "./Chip";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ChipProps> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ChipProps> = {
  args: { label: "Chip Component" },
};

export const Variants: StoryObj<ChipProps> = {
  args: { label: "Chip Component" },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Chip {...props} icon={<SaveIcon />} />
        <Chip {...props} avatar={<Avatar>F</Avatar>} />
        <Chip {...props} avatar={<Avatar src={Avatar1} />} />
      </Preview>
      <Preview>
        <Chip {...props} icon={<SaveIcon />} variant="outlined" />
        <Chip {...props} avatar={<Avatar>F</Avatar>} variant="outlined" />
        <Chip {...props} avatar={<Avatar src={Avatar1} />} variant="outlined" />
      </Preview>
      <Preview>
        <Chip {...props} icon={<SaveIcon />} size="small" />
        <Chip {...props} avatar={<Avatar>F</Avatar>} size="small" />
        <Chip {...props} avatar={<Avatar src={Avatar1} />} size="small" />
      </Preview>
      <Preview>
        <Chip {...props} icon={<SaveIcon />} variant="outlined" size="small" />
        <Chip
          {...props}
          avatar={<Avatar>F</Avatar>}
          variant="outlined"
          size="small"
        />
        <Chip
          {...props}
          avatar={<Avatar src={Avatar1} />}
          variant="outlined"
          size="small"
        />
      </Preview>
    </Preview>
  ),
};

export const Delete: StoryObj<ChipProps> = {
  args: { label: "Chip Component" },
  argTypes: { onDelete: { action: "onDelete" } },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Chip {...props} />
        <Chip {...props} deleteIcon={<SaveIcon />} />
        <Chip {...props} variant="outlined" />
        <Chip {...props} deleteIcon={<SaveIcon />} variant="outlined" />
      </Preview>
      <Preview>
        <Chip {...props} size="small" />
        <Chip {...props} deleteIcon={<SaveIcon />} size="small" />
        <Chip {...props} variant="outlined" size="small" />
        <Chip
          {...props}
          deleteIcon={<SaveIcon />}
          variant="outlined"
          size="small"
        />
      </Preview>
    </Preview>
  ),
};

export const Sizes: StoryObj<ChipProps> = {
  args: { label: "Chip Component" },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Chip {...props} size="small" />
        <Chip {...props} size="small" variant="outlined" />
      </Preview>
      <Preview>
        <Chip {...props} size="medium" />
        <Chip {...props} size="medium" variant="outlined" />
      </Preview>
    </Preview>
  ),
};

export const Colors: StoryObj<ChipProps> = {
  args: { label: "Chip" },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Chip {...props} color="primary" />
        <Chip {...props} color="secondary" />
        <Chip {...props} color="default" />
        <Chip {...props} color="error" />
        <Chip {...props} color="info" />
        <Chip {...props} color="success" />
        <Chip {...props} color="warning" />
      </Preview>
      <Preview>
        <Chip {...props} color="primary" variant="outlined" />
        <Chip {...props} color="secondary" variant="outlined" />
        <Chip {...props} color="default" variant="outlined" />
        <Chip {...props} color="error" variant="outlined" />
        <Chip {...props} color="info" variant="outlined" />
        <Chip {...props} color="success" variant="outlined" />
        <Chip {...props} color="warning" variant="outlined" />
      </Preview>
    </Preview>
  ),
};
