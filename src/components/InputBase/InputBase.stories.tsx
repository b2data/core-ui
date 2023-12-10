import { InputBase, InputBaseProps } from "./InputBase";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<InputBaseProps> = {
  title: "Components/Inputs/Input Base",
  component: InputBase,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<InputBaseProps> = {
  args: {},
  render: (props) => <InputBase {...props} />,
};
