import React, { cloneElement, useCallback } from "react";
import { CustomContentProps, SnackbarContent, useSnackbar } from "notistack";

import { Alert, AlertProps } from "../Alert";

export interface SnackbarMessageProps extends CustomContentProps {
  title?: AlertProps["title"];
  actions?: AlertProps["actions"];
  closeText?: AlertProps["closeText"];
  /**
   * @default outlined
   */
  displayVariant?: AlertProps["variant"];
  /**
   * @default null
   */
  autoHideDuration?: CustomContentProps["autoHideDuration"];
}

export const SnackbarMessage = React.forwardRef<HTMLDivElement, SnackbarMessageProps>(
  (
    {
      id,
      variant = "default",
      title,
      message,
      actions,
      closeText,
      displayVariant = "outlined",
      style,
    },
    ref,
  ) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref} role="alert" style={style}>
        <Alert
          variant={displayVariant}
          severity={variant === "default" ? undefined : variant}
          title={title}
          children={message}
          closeText={closeText}
          actions={
            actions
              ? cloneElement(actions, { onClose: handleDismiss })
              : undefined
          }
          onClose={actions ? undefined : handleDismiss}
          sx={{ width: 400 }}
        />
      </SnackbarContent>
    );
  },
);
