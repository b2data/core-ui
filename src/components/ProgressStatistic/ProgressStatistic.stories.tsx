import { ProgressStatistic, ProgressStatisticProps } from "./ProgressStatistic";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ProgressStatisticProps> = {
  title: "Components/Progress/Progress Statistic",
  component: ProgressStatistic,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<ProgressStatisticProps> = {
  args: {
    data: [
      { color: "primary.main", value: 200 },
      { color: "error.main", value: 400 },
      { color: "success.main", value: 100 }
    ]
  }
};
