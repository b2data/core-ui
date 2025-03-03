import { SaveIcon } from "src/icons";

import { Breadcrumbs } from "../Breadcrumbs";

import { SectionTitle, SectionTitleProps } from "./SectionTitle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SectionTitleProps> = {
  title: "Components/Section/Section Title",
  component: SectionTitle,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
  },
};

export const WithButton: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    actions: [
      { label: "Cancel", color: "default", variant: "outlined" },
      { label: "Save" },
    ],
  },
};

export const WithIcon: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    icon: <SaveIcon />,
  },
};

export const WithIconButton: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    actions: [{ icon: <SaveIcon /> }],
  },
};

export const WithMenu: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    actions: [
      { menuActions: [{ children: "Save", startAdornment: <SaveIcon /> }] },
    ],
  },
};
export const WithMenuAndCustomIcon: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    actions: [
      {
        icon: <SaveIcon />,
        menuActions: [{ children: "Save", startAdornment: <SaveIcon /> }],
      },
    ],
  },
};

export const WithBorder: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    withBorder: true,
  },
};

export const WithSubtitle: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    subtitle: <Breadcrumbs items={[{ label: "Home" }, { label: "Items" }]} />,
  },
};

export const WithHelpText: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    helperText: "1 / 3",
  },
};

export const WithTooltip: StoryObj<SectionTitleProps> = {
  args: {
    title: "Header",
    tooltip: "Tooltip text",
  },
};
