import { FC, useContext } from "react";
import { SxProps } from "@mui/material";

import { PostAddIcon } from "../../../icons";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";
import { DataBlockEditorContext } from "../store";

export type DataBlockAddVariantIndicatorProps = {
  onAddVariant: () => void;
  sx?: SxProps;
};

export const DataBlockAddVariantIndicator: FC<
  DataBlockAddVariantIndicatorProps
> = ({ onAddVariant, sx }) => {
  const {
    state: { i18n },
  } = useContext(DataBlockEditorContext);

  return (
    <Tooltip text={i18n.addVariantTooltip}>
      <IconButton
        className="data-block__variant-indicator"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: 32,
          width: 32,
          cursor: "pointer",
          opacity: 0,
          ...sx,
        }}
        onClick={onAddVariant}
      >
        <PostAddIcon />
      </IconButton>
    </Tooltip>
  );
};
