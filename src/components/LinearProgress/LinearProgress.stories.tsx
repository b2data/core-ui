import { useEffect, useRef, useState } from "react";

import { Typography } from "../Typography";

import { LinearProgress, LinearProgressProps } from "./LinearProgress";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<LinearProgressProps> = {
  title: "Components/Progress/Linear Progress",
  component: LinearProgress,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<LinearProgressProps> = {};

export const Colors: StoryObj<LinearProgressProps> = {
  args: { wrapSx: { mt: 4 } },
  render: (props) => (
    <div>
      <LinearProgress {...props} color="inherit" />
      <LinearProgress {...props} color="primary" />
      <LinearProgress {...props} color="secondary" />
      <LinearProgress {...props} color="error" />
      <LinearProgress {...props} color="info" />
      <LinearProgress {...props} color="success" />
      <LinearProgress {...props} color="warning" />
    </div>
  ),
};

export const Buffer: StoryObj<LinearProgressProps> = {
  args: { wrapSx: { mt: 4 }, variant: "buffer" },
  render: (props) => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef = useRef(() => {});
    useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });

    useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div>
        <LinearProgress
          {...props}
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
        <LinearProgress
          {...props}
          variant="buffer"
          value={progress}
          label={`${Math.round(progress)}%`}
          valueBuffer={buffer}
        />
      </div>
    );
  },
};

export const Determinate: StoryObj<LinearProgressProps> = {
  args: { wrapSx: { mt: 4 }, variant: "determinate" },
  render: (props) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10,
        );
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
      <div>
        <LinearProgress
          {...props}
          variant="determinate"
          value={50}
          label={50}
        />
        <LinearProgress
          {...props}
          variant="determinate"
          value={75}
          label="75%"
        />
        <LinearProgress
          {...props}
          variant="determinate"
          value={progress}
          label={
            <Typography
              color="primary.main"
              variant="body2"
              sx={{ minWidth: 35 }}
            >
              {progress}
            </Typography>
          }
        />
      </div>
    );
  },
};
