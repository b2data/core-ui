import { useEffect, useState } from "react";

import { Preview } from ".storybook/components";

import { Typography } from "../Typography";

import { CircularProgress, CircularProgressProps } from "./CircularProgress";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CircularProgressProps> = {
  title: "Components/Progress/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<CircularProgressProps> = {};

export const Sizes: StoryObj<CircularProgressProps> = {
  render: (props) => (
    <Preview>
      <CircularProgress {...props} size={24} />
      <CircularProgress {...props} size={32} />
      <CircularProgress {...props} size={32} thickness={1} />
      <CircularProgress {...props} size={40} />
      <CircularProgress {...props} size={40} thickness={10} />
    </Preview>
  )
};

export const Colors: StoryObj<CircularProgressProps> = {
  render: (props) => (
    <Preview>
      <CircularProgress {...props} color="inherit" />
      <CircularProgress {...props} color="primary" />
      <CircularProgress {...props} color="secondary" />
      <CircularProgress {...props} color="error" />
      <CircularProgress {...props} color="info" />
      <CircularProgress {...props} color="success" />
      <CircularProgress {...props} color="warning" />
    </Preview>
  )
};

export const Determinate: StoryObj<CircularProgressProps> = {
  render: (props) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10
        );
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
      <Preview>
        <CircularProgress {...props} variant="determinate" value={0} />
        <CircularProgress {...props} variant="determinate" value={25} />
        <CircularProgress
          {...props}
          variant="determinate"
          value={50}
          label={50}
        />
        <CircularProgress
          {...props}
          variant="determinate"
          value={75}
          label="75%"
        />
        <CircularProgress {...props} variant="determinate" value={100} />
        <CircularProgress
          {...props}
          variant="determinate"
          value={progress}
          label={
            <Typography color="primary.main" variant="caption">
              {progress}
            </Typography>
          }
        />
      </Preview>
    );
  }
};
