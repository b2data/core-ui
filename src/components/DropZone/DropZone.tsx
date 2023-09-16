import React from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";

import { Typography } from "../Typography";
import { Box, BoxProps } from "../Box";

import { validateFilesType } from "./utils";

export interface DropZoneProps {
  /**
   * Callback fired on drop files to drop zone.
   */
  onDrop?: (files: File[]) => void;
  /**
   * Callback fired on select files.
   */
  onSelect?: (files: File[]) => void;
  /**
   * `input` tag [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute.
   * If not specified, accept all files.
   */
  accept?: string;
  /**
   * Text showed to user on drop zone area.
   */
  hintText?: string | React.ReactElement;
  /**
   * Text showed to user if dragging file above drop zone area.
   */
  canDropText?: string | React.ReactElement;
  /**
   * `input` tag [multiple](https://www.w3schools.com/tags/att_input_multiple.asp) attribute.
   */
  multiple?: boolean;
  /**
   * If `true`, the input is disabled.
   */
  disabled?: boolean;
  /**
   * Callback fired after not valid with `accept` string files dropped or selected.
   * Returns array of not valid files.
   */
  onTypeError?: (invalidFiles: File[]) => void;
  /**
   * Box `sx` styles
   */
  sx?: BoxProps["sx"];
}

export const DropZone: React.FC<DropZoneProps> = ({
  onDrop,
  onSelect,
  accept,
  multiple,
  disabled,
  hintText,
  canDropText,
  onTypeError,
  ...props
}) => {
  const inputRefInner = React.useRef<HTMLInputElement | null>(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (_, monitor) => {
      if (onDrop) {
        const item = (monitor.getItem() || {}) as { files: FileList | null };
        const { isValid, files } = validateFilesType(item.files, accept);
        if (!disabled) {
          if (isValid) {
            onDrop?.(files);
          } else {
            onTypeError?.(files);
          }
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const TextContent = React.isValidElement(canDropText || hintText) ? (
    canDropText || hintText
  ) : (
    <Typography variant="caption">{canDropText || hintText}</Typography>
  );

  return (
    <Box
      ref={drop}
      onClick={() => inputRefInner.current?.click()}
      bgcolor="#fafbfc"
      border={({ palette }) =>
        `1px dashed ${
          Boolean(onDrop) && canDrop && isOver
            ? palette.primary.main
            : palette.grey[400]
        }`
      }
      position="relative"
      borderRadius={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      style={{
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0 : 1,
      }}
      {...props}
    >
      <input
        type="file"
        multiple={multiple}
        disabled={disabled}
        accept={accept}
        ref={inputRefInner}
        style={{ display: "none" }}
        onChange={(e) => {
          const currFiles = e.target.files;
          const { isValid, files: valFiles } = validateFilesType(
            currFiles,
            accept,
          );
          if (!disabled) {
            if (isValid) {
              onSelect?.(valFiles);
            } else {
              onTypeError?.(valFiles);
            }
          }
          e.target.files;
        }}
      />
      {!disabled ? TextContent : null}
    </Box>
  );
};
