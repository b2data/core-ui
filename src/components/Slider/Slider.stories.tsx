import { Slider, SliderProps } from "./Slider";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SliderProps> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<SliderProps> = {
  args: {},
};
