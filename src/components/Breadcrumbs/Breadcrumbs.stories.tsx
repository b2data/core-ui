import { BrowserRouter, Link } from "react-router-dom";

import { SaveIcon } from "src/icons";

import { Typography } from "../Typography";

import { Breadcrumb, Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BreadcrumbsProps> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};

export default meta;

const items: Breadcrumb[] = [
  { label: "Root", link: "/" },
  { label: "Level 1", disabled: true },
  { label: "Level 2", disabled: true, onClick: () => alert("Level 2") },
  { label: "Level 3", onClick: () => alert("Level 3") },
  { label: "Breadcrumbs", icon: <SaveIcon /> },
];

export const Base: StoryObj<BreadcrumbsProps> = {
  args: { items },
  render: (props) => (
    <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
  ),
};

export const Separator: StoryObj<BreadcrumbsProps> = {
  args: { items, separator: "›" },
  render: (props) => (
    <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
  ),
};

export const Collapsed: StoryObj<BreadcrumbsProps> = {
  args: { items, maxItems: 2 },
  render: (props) => (
    <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
  ),
};

export const WithChildren: StoryObj<BreadcrumbsProps> = {
  args: {
    children: [
      <Link to="/" color="inherit" key={1}>
        Root
      </Link>,
      <Link to="/" color="inherit" key={2}>
        Level 1
      </Link>,
      <Typography color="text.disabled" key={3}>
        Breadcrumbs
      </Typography>,
    ],
  },
};
