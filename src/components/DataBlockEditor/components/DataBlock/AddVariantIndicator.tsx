import React from "react";
import { SxProps } from "@mui/material";

import { PostAddIcon } from "../../../../icons";
import { DataBlockEditorTranslations } from "../../model";
import { IconButton } from "../../../IconButton";
import { Tooltip } from "../../../Tooltip";

export type AddVariantIndicatorProps = {
  i18n: DataBlockEditorTranslations;
  onAdd: () => void;
  sx?: SxProps;
};

export const AddVariantIndicator: React.FC<AddVariantIndicatorProps> = ({
  i18n,
  onAdd,
  sx,
}) => {
  return (
    <Tooltip text={i18n.addVariantTooltip}>
      <IconButton
        className="data-block__variant-indicator"
        sx={{
          position: "absolute",
          top: `calc(50% - 16px)`,
          right: "-32px",
          cursor: "pointer",
          opacity: 0,
          ...sx,
        }}
        onClick={onAdd}
      >
        <PostAddIcon />
      </IconButton>
    </Tooltip>
  );
};
