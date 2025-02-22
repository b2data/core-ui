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
    okText,
    cancelText,
  }: {
    title: string;
    content: string;
    okText: string;
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
        acceptBtn: { label: okText, onClick: onConfirm, color: "primary" },
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
