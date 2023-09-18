import { useState } from "react";

import { Button } from "../Button";

import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from "./ConfirmationDialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ConfirmationDialogProps> = {
  title: "Components/Dialogs/Confirmation Dialog",
  component: ConfirmationDialog,
  tags: ["autodocs"],
};

export default meta;

export const Base: StoryObj<ConfirmationDialogProps> = {
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.log("subbmitted"),
    },
    declineBtn: {
      label: "Отмена",
    },
    content: "Внимание! После удаления все данные будут удалены",
  },
  render: (props) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

export const WithInput: StoryObj<ConfirmationDialogProps> = {
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.log("subbmitted"),
    },
    declineBtn: {
      label: "Отмена",
    },
    content:
      "Вы действительно хотите удалить данные? Для подтверждения удаления введите:",
    confirmProps: {
      value: "Николай Туров",
      placeholder: "Ведите имя",
      helperText: "Для подтверждения вставьте название в это поле",
    },
  },
  render: (props) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};
