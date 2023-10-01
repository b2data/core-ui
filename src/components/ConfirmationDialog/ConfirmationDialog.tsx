import React, { useEffect, useState } from "react";
import { CopyAll as CopyIcon } from "@mui/icons-material";

import { ButtonProps } from "../Button";
import { TextField } from "../TextField";
import { Dialog, DialogProps } from "../Dialog";
import { DialogAction } from "../DialogActions";
import { IconButton } from "../IconButton";

export interface ConfirmationDialogProps
  extends Pick<
    DialogProps,
    "onClose" | "sx" | "open" | "children" | "maxWidth"
  > {
  /**
   * Title of the Dialog, will be wrapped by `DialogTitle`
   */
  title: string;
  /**
   * Use `content` or `children` to privide dialog content
   */
  content?: string | React.ReactElement;
  /**
   * Accept button props inherit `ButtonProps`.<br>
   * The properties `disabled` will be overriden.
   * Specify text content by `label` property.
   */
  acceptBtn: ButtonProps & { label: string };
  /**
   * Accept button props inherit `ButtonProps`.<br>
   * The property `onClick` will be overriden by `onClose`.
   * Specify text content by `label` property.
   */
  declineBtn: ButtonProps & { label: string };
  /**
   * Include confirmation TextField for checking some text before submition.<br>
   * `value` - The text that should be entered for submition.<br>
   * `helperText` - Helper text message under text field.<br>
   * `placeholder` - The placeholder for `name` textfield
   */
  confirmProps?: {
    value: string;
    helperText?: string;
    placeholder?: string;
  };
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  acceptBtn,
  declineBtn,
  confirmProps,
  onClose,
  content,
  children,
  open,
  ...props
}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("");
  }, [open]);

  const onCopy = () => {
    navigator.clipboard.writeText(confirmProps?.value || "");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      actions={[
        ...(declineBtn
          ? [
              {
                variant: "outlined",
                color: "default",
                ...declineBtn,
                children: declineBtn.label || declineBtn.children,
                onClick: onClose,
              } as DialogAction,
            ]
          : []),
        ...(acceptBtn
          ? [
              {
                variant: "contained",
                color: "primary",
                ...acceptBtn,
                children: acceptBtn.label || acceptBtn.children,
                disabled: confirmProps && name !== confirmProps.value,
              } as DialogAction,
            ]
          : []),
      ]}
    >
      {content || children}
      {confirmProps && (
        <>
          <TextField
            readOnly
            variant="outlined"
            margin="normal"
            value={confirmProps.value}
            endAdornment={
              <IconButton size="small" onClick={onCopy}>
                <CopyIcon />
              </IconButton>
            }
            sx={{ mt: 4 }}
          />
          <TextField
            variant="outlined"
            placeholder={confirmProps.placeholder}
            helperText={confirmProps.helperText}
            onChange={(e) => setName(e.target.value)}
            inputProps={{
              onKeyDown: (e) => {
                if (e.code === "Enter") {
                  acceptBtn?.onClick?.(null as any);
                }
              },
            }}
            value={name}
            autoComplete="off"
            autoFocus
          />
        </>
      )}
    </Dialog>
  );
};
