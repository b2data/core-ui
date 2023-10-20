import { SaveIcon } from "src/icons";

import {
  SectionTitleAction,
  SectionTitleActionProps,
} from "./SectionTitleAction";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SectionTitleActionProps> = {
  title: "Components/SectionTitle/SectionTitleAction",
  component: SectionTitleAction,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<SectionTitleActionProps> = {
  args: {
    label: "Cancel",
    tooltip: "Tooltip",
  },
};

export const AsIconButton: StoryObj<SectionTitleActionProps> = {
  args: {
    icon: <SaveIcon />,
    tooltip: "Tooltip",
  },
};

export const AsMenu: StoryObj<SectionTitleActionProps> = {
  args: {
    menuActions: [{ children: "Save", startAdornment: <SaveIcon /> }],
  },
};

export const AsSplitButton: StoryObj<SectionTitleActionProps> = {
  args: {
    label: "Split button",
    actions: [{ children: "Save", startAdornment: <SaveIcon /> }],
  },
};
