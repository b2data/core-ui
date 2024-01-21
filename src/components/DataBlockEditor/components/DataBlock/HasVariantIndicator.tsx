import React from "react";
import { SxProps } from "@mui/material";

import { ReadMoreIcon } from "../../../../icons";
import { DataBlockEditorTranslations } from "../../model";
import { IconButton } from "../../../IconButton";
import { Tooltip } from "../../../Tooltip";

export type HasVariantIndicatorProps = {
  i18n: DataBlockEditorTranslations;
  forceShown: boolean;
  onOpen: () => void;
  onClose: () => void;
  sx?: SxProps;
};

export const HasVariantIndicator: React.FC<HasVariantIndicatorProps> = ({
  i18n,
  forceShown,
  onOpen,
  onClose,
  sx,
}) => {
  return (
    <Tooltip
      text={forceShown ? i18n.closeVariantsTooltip : i18n.showVariantsTooltip}
    >
      <IconButton
        className="data-block__variant-indicator"
        sx={{
          position: "absolute",
          top: `calc(50% - ${forceShown ? 32 : 16}px)`,
          right: "-32px",
          cursor: "pointer",
          opacity: 0,
          ...sx,
        }}
        onClick={forceShown ? onClose : onOpen}
      >
        <ReadMoreIcon
          sx={{ transform: `rotate(${forceShown ? 180 : 0}deg)` }}
        />
      </IconButton>
    </Tooltip>
  );
};
