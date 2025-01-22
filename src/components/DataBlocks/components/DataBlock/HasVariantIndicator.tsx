import React from "react";
import { Chip, SxProps } from "@mui/material";

import { ReadMoreIcon } from "../../../../icons";
import { DataBlockTranslations } from "../../model";
import { IconButton } from "../../../IconButton";
import { Tooltip } from "../../../Tooltip";
import { Box } from "../../../Box";

export type HasVariantIndicatorProps = {
  i18n: DataBlockTranslations;
  forceShown: boolean;
  count: number;
  isOpened?: boolean;
  onOpen: () => void;
  onClose: () => void;
  sx?: SxProps;
};

export const HasVariantIndicator: React.FC<HasVariantIndicatorProps> = ({
  i18n,
  forceShown,
  count,
  isOpened,
  onOpen,
  onClose,
  sx,
}) => {
  return (
    <Tooltip
      text={forceShown ? i18n.closeVariantsTooltip : i18n.showVariantsTooltip}
    >
      <Box
        sx={{
          position: "absolute",
          top: `calc(50% - ${forceShown ? 32 : 16}px)`,
          right: "-32px",
          cursor: "pointer",
          ...sx,
        }}
      >
        {isOpened ? (
          <IconButton onClick={onClose}>
            <ReadMoreIcon sx={{ transform: `rotate(180deg)` }} />
          </IconButton>
        ) : (
          <Chip
            size="small"
            variant="outlined"
            label={`+${count}`}
            onClick={onOpen}
          />
        )}
      </Box>
    </Tooltip>
  );
};
