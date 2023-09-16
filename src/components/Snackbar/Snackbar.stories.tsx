import { Preview } from ".storybook/components";

import { Button } from "../Button";

import {
  SnackbarProvider,
  SnackbarProviderProps,
  useSnackbar,
} from "./SnackbarProvider";
import { SnackbarMessageProps } from "./SnackbarMessage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SnackbarProviderProps> = {
  title: "Components/Alert/Snackbar Provider",
  component: SnackbarProvider,
  tags: ["autodocs"],
};

export default meta;

const Content = () => {
  const { enqueueSnackbar } = useSnackbar();

  const variants: Pick<SnackbarMessageProps, "variant" | "displayVariant">[] = [
    { variant: "default", displayVariant: "standard" },
    { variant: "error", displayVariant: "standard" },
    { variant: "warning", displayVariant: "standard" },
    { variant: "info", displayVariant: "standard" },
    { variant: "success", displayVariant: "standard" },
    { variant: "default", displayVariant: "outlined" },
    { variant: "error", displayVariant: "outlined" },
    { variant: "warning", displayVariant: "outlined" },
    { variant: "info", displayVariant: "outlined" },
    { variant: "success", displayVariant: "outlined" },
  ];

  return (
    <Preview>
      {variants.map((v) => (
        <Button
          key={v.variant + v.displayVariant}
          onClick={() =>
            enqueueSnackbar(
              `Variant: ${v.variant}. Display variant: ${v.displayVariant}`,
              {
                autoHideDuration: 2000,
                title: v.variant.toUpperCase(),
                ...v,
              },
            )
          }
        >
          {`${v.variant} - ${v.displayVariant}`}
        </Button>
      ))}
    </Preview>
  );
};

export const Base: StoryObj<SnackbarProviderProps> = {
  args: {},
  render: (props) => {
    return (
      <div style={{ height: 500 }}>
        <SnackbarProvider {...props}>
          <Content />
        </SnackbarProvider>
      </div>
    );
  },
};
