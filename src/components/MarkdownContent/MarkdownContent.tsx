import { SxProps } from "@mui/material";
import { FC } from "react";

import { DataBlock } from "../DataBlock";

export interface MarkdownContentProps {
  /**
   * Placeholder to be shown on empty field
   */
  placeholder?: string;
  /**
   * The Markdown value to be shown
   */
  value?: string;
  /** */
  sx?: SxProps;
}

export const MarkdownContent: FC<MarkdownContentProps> = ({
  placeholder,
  value,
  sx,
}) => {
  return <DataBlock placeholderText={placeholder} content={value} sx={sx} />;
};
