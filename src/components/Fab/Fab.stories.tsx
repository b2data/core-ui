import { SendIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { Fab, FabProps } from "./Fab";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FabProps> = {
  title: "Components/Buttons/Fab",
  component: Fab,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<FabProps> = {
  args: { children: <SendIcon /> },
  render: (props) => <Fab {...props} />
};

export const SizesAndVariants: StoryObj<FabProps> = {
  args: { children: <SendIcon /> },
  render: (props) => (
    <Preview style={{ flexDirection: "column", alignItems: "start" }}>
      <Preview>
        <Fab {...props} size="small" />
        <Fab {...props} size="medium" />
        <Fab {...props} size="large" />
      </Preview>
      <Preview>
        <Fab {...props} size="small" variant="extended">
          Text content
        </Fab>
        <Fab {...props} size="medium" variant="extended">
          Text content
        </Fab>
        <Fab {...props} size="large" variant="extended">
          Text content
        </Fab>
      </Preview>
    </Preview>
  )
};

export const Colors: StoryObj<FabProps> = {
  args: { children: <SendIcon /> },
  render: (props) => (
    <Preview>
      <Fab {...props} color="inherit" />
      <Fab {...props} color="primary" />
      <Fab {...props} color="secondary" />
      <Fab {...props} color="default" />
      <Fab {...props} color="success" />
      <Fab {...props} color="error" />
      <Fab {...props} color="info" />
      <Fab {...props} color="warning" />
    </Preview>
  )
};
