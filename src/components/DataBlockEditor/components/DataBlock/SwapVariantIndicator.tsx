import React from "react";
import { SxProps } from "@mui/material";

import { SwapHorizIcon } from "../../../../icons";
import { DataBlockEditorTranslations } from "../../model";
import { IconButton } from "../../../IconButton";
import { Tooltip } from "../../../Tooltip";

export type SwapVariantIndicatorProps = {
  i18n: DataBlockEditorTranslations;
  onSwap: () => void;
  sx?: SxProps;
};

export const SwapVariantIndicator: React.FC<SwapVariantIndicatorProps> = ({
  i18n,
  onSwap,
  sx,
}) => {
  return (
    <Tooltip text={i18n.swapCurrentVariantTooltip}>
      <IconButton
        className="data-block__variant-indicator"
        sx={{
          position: "absolute",
          top: 0,
          left: `calc(50% + 16px)`,
          cursor: "pointer",
          opacity: 0,
          ...sx,
        }}
        onClick={onSwap}
      >
        <SwapHorizIcon />
      </IconButton>
    </Tooltip>
  );
};
