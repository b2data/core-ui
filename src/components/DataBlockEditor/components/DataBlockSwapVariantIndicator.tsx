import { FC, useContext } from "react";
import { SxProps } from "@mui/material";

import { SwapHorizIcon } from "../../../icons";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";
import { DataBlockEditorContext } from "../store";

export type DataBlockSwapVariantIndicatorProps = {
  onSwap: () => void;
  sx?: SxProps;
};

export const DataBlockSwapVariantIndicator: FC<
  DataBlockSwapVariantIndicatorProps
> = ({ onSwap, sx }) => {
  const {
    state: { i18n },
  } = useContext(DataBlockEditorContext);

  return (
    <Tooltip text={i18n.swapCurrentVariantTooltip}>
      <IconButton
        className="data-block__variant-indicator"
        sx={{
          position: "absolute",
          top: 0,
          left: `calc(50% - 4px)`,
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
