import React from "react";
import AddIcon from "@mui/icons-material/AddOutlined";
import DragIcon from "@mui/icons-material/DragIndicatorOutlined";
import { ConnectDragSource } from "react-dnd";

import { uuid } from "../../../../hooks";
import { Box } from "../../../Box";
import { Tooltip } from "../../../Tooltip";
import { IconButton } from "../../../IconButton";
import { DataBlockAction, DataBlockContext } from "../../store";
import { DataBlockModel, DataBlockType, DataBlockVariant } from "../../model";

import { AddTypePopover } from "./AddTypePopover";
import { MenuPopover } from "./MenuPopover";

export const Actions: React.FC<{
  blockData: Omit<DataBlockModel, "variants">;
  currentVariant: DataBlockVariant;
  index: number;
  dragRef: ConnectDragSource;
  isDragging: boolean;
  maxOffset: number;
}> = ({ blockData, currentVariant, index, dragRef, isDragging, maxOffset }) => {
  const { state, dispatch } = React.useContext(DataBlockContext);

  const [addAnchorEl, setAddAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const [menuAnchorEl, setMenuAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleAdd = (type: DataBlockType) => {
    dispatch({
      action: DataBlockAction.AddBlock,
      block: {
        id: uuid(),
        type,
        number: index + 2,
        offset: blockData.offset,
        createdBy: state.currentUserId,
      },
      variant: {
        id: uuid(),
        data: {},
        isCurrent: true,
        createdBy: state.currentUserId,
      },
      index: index + 1,
    });
    setAddAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch({
      action: DataBlockAction.DeleteBlock,
      id: blockData.id,
    });
    setMenuAnchorEl(null);
  };

  const handleEdit = (
    blockChanges: Partial<DataBlockModel>,
    variantChanges: Partial<DataBlockVariant["data"]>,
  ) => {
    dispatch({
      action: DataBlockAction.EditBlock,
      block: { ...blockData, ...blockChanges },
      variant: {
        ...currentVariant,
        data: { ...currentVariant.data, ...variantChanges },
      },
    });
    setMenuAnchorEl(null);
  };

  return (
    <Box
      className="data-block__actions"
      sx={(theme) => ({
        position: "absolute",
        opacity: Boolean(addAnchorEl) || Boolean(menuAnchorEl) ? 1 : 0,
        top: 2,
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
      <Tooltip enterDelay={3000} text={state.i18n.addBtnTooltip}>
        <IconButton
          size="small"
          tabIndex={-1}
          onClick={(e) => setAddAnchorEl(e.currentTarget)}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        enterDelay={3000}
        sx={isDragging ? { display: "none" } : {}}
        text={state.i18n.moreBtnTooltip}
      >
        <IconButton
          ref={dragRef}
          size="small"
          tabIndex={-1}
          sx={{ cursor: isDragging ? "grabbing" : "grab" }}
          onClick={(e) => setMenuAnchorEl(e.currentTarget)}
        >
          <DragIcon />
        </IconButton>
      </Tooltip>
      <AddTypePopover
        anchorEl={addAnchorEl}
        options={state.types}
        i18n={state.i18n}
        onAdd={handleAdd}
        onClose={() => setAddAnchorEl(null)}
      />
      <MenuPopover
        data={currentVariant.data}
        offset={blockData.offset}
        type={blockData.type as DataBlockType}
        i18n={state.i18n}
        anchorEl={menuAnchorEl}
        maxOffset={maxOffset}
        onClose={() => setMenuAnchorEl(null)}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
};
