import { useState } from "react";
import { createPortal } from "react-dom";

import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from "./ConfirmationDialog";

export const useConfirmationDialog = () => {
  const [dialogProps, setDialogProps] =
    useState<ConfirmationDialogProps | null>(null);

  const handleOpenDialog = ({
    title,
    content,
    acceptBtn,
    cancelText,
  }: {
    title: string;
    content: string;
    acceptBtn: Omit<ConfirmationDialogProps["acceptBtn"], "onClick">;
    cancelText: string;
  }) => {
    return new Promise((resolve) => {
      const onCancel = () => {
        setDialogProps(null);
        resolve(false);
      };
      const onConfirm = () => {
        setDialogProps(null);
        resolve(true);
      };

      setDialogProps({
        title,
        content,
        acceptBtn: { color: "primary", ...acceptBtn, onClick: onConfirm },
        declineBtn: { label: cancelText, onClick: onCancel },
        onClose: onCancel,
        open: true,
        maxWidth: "mobile",
      });
    });
  };

  const portal = createPortal(
    <>{dialogProps ? <ConfirmationDialog {...dialogProps} /> : null}</>,
    document.body,
  );

  return { onOpen: handleOpenDialog, portal };
};
