import { cloneElement, forwardRef, useCallback } from "react";
import { CustomContentProps, SnackbarContent, useSnackbar } from "notistack";

import { Alert, AlertProps } from "../Alert";

export interface SnackbarMessageProps
  extends Omit<
    CustomContentProps,
    | "className"
    | "style"
    | "anchorOrigin"
    | "action"
    | "hideIconVariant"
    | "iconVariant"
  > {
  title?: AlertProps["title"];
  actions?: AlertProps["actions"];
  closeText?: AlertProps["closeText"];
  displayVariant?: AlertProps["variant"];
  /**
   * @default null
   */
  autoHideDuration?: CustomContentProps["autoHideDuration"];
}

declare module "notistack" {
  interface OptionsObject {
    title?: AlertProps["title"];
    actions?: AlertProps["actions"];
    closeText?: AlertProps["closeText"];
    displayVariant?: AlertProps["variant"];
  }
}

export const SnackbarMessage = forwardRef<HTMLDivElement, SnackbarMessageProps>(
  (
    {
      id,
      variant = "default",
      title,
      message,
      actions,
      closeText,
      displayVariant,
      ...props
    },
    ref
  ) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref} {...props}>
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
  }
);
