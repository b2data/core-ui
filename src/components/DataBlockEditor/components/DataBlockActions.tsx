import { FC, useContext, useState } from "react";
import AddIcon from "@mui/icons-material/AddOutlined";
import DragIcon from "@mui/icons-material/DragIndicatorOutlined";
import { ConnectDragSource } from "react-dnd";

import { Box } from "../../Box";
import { Tooltip } from "../../Tooltip";
import { IconButton } from "../../IconButton";
import { DataBlockEditorContext } from "../store";
import { DataBlockBase, DataBlockVariant } from "../models";

import { DataBlockAddTypePopover } from "./DataBlockAddTypePopover";
import { DataBlockMenuPopover } from "./DataBlockMenuPopover";

export type DataBlockActionsProps = {
  blockData: Omit<DataBlockBase, "variants">;
  currentVariant: DataBlockVariant;
  index: number;
  dragRef: ConnectDragSource;
  isDragging: boolean;
};

export const DataBlockActions: FC<DataBlockActionsProps> = ({
  blockData,
  currentVariant,
  index,
  dragRef,
  isDragging,
}) => {
  const {
    state: { i18n },
  } = useContext(DataBlockEditorContext);

  const [addAnchorEl, setAddAnchorEl] = useState<HTMLButtonElement | null>(
    null,
  );

  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLButtonElement | null>(
    null,
  );

  return (
    <Box
      className="data-block__actions"
      sx={(theme) => ({
        position: "absolute",
        opacity: Boolean(addAnchorEl) || Boolean(menuAnchorEl) ? 1 : 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        transition: theme.transitions.create("opacity", {
          duration: 200,
        }),
      })}
    >
      <Tooltip
        enterDelay={1000}
        text={isDragging ? undefined : i18n.addBtnTooltip}
      >
        <IconButton
          size="small"
          tabIndex={-1}
          onClick={(e) => setAddAnchorEl(e.currentTarget)}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        enterDelay={1000}
        sx={isDragging ? { display: "none" } : {}}
        text={isDragging ? undefined : i18n.moreBtnTooltip}
      >
        <IconButton
          ref={(node) => {
            if (node) {
              dragRef(node);
            }
          }}
          size="small"
          tabIndex={-1}
          sx={{ cursor: isDragging ? "grabbing" : "grab" }}
          onClick={(e) => setMenuAnchorEl(e.currentTarget)}
        >
          <DragIcon />
        </IconButton>
      </Tooltip>
      <DataBlockAddTypePopover
        offset={blockData.offset}
        index={index}
        anchorEl={addAnchorEl}
        onClose={() => setAddAnchorEl(null)}
      />
      <DataBlockMenuPopover
        currentVariant={currentVariant}
        blockData={blockData}
        anchorEl={menuAnchorEl}
        onClose={() => setMenuAnchorEl(null)}
      />
    </Box>
  );
};
