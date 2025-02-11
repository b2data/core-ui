import { FC, useContext } from "react";
import { Chip, SxProps } from "@mui/material";

import { ReadMoreIcon } from "../../../icons";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";
import { Box } from "../../Box";
import { DataBlockEditorContext } from "../store";

export type DataBlockHasVariantIndicatorProps = {
  forceShown: boolean;
  count: number;
  onOpen: () => void;
  onClose: () => void;
  sx?: SxProps;
};

export const DataBlockHasVariantIndicator: FC<
  DataBlockHasVariantIndicatorProps
> = ({ forceShown, count, onOpen, onClose, sx }) => {
  const {
    state: { showVariants, i18n },
  } = useContext(DataBlockEditorContext);

  return (
    <Tooltip
      text={forceShown ? i18n.closeVariantsTooltip : i18n.showVariantsTooltip}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: 32,
          width: 32,
          ...sx,
        }}
      >
        {forceShown || showVariants ? (
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
