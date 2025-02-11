import { FC, useContext, useEffect, useState } from "react";

import { Popover } from "../../Popover";
import { List } from "../../List";
import { ListItem } from "../../ListItem";
import { Box } from "../../Box";
import { DataBlockBase, DataBlockVariant } from "../models";
import {
  DeleteIcon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
} from "../../../icons";
import { useDevice } from "../../../hooks";
import { DataBlockEditorAction, DataBlockEditorContext } from "../store";

export type DataBlockMenuPopoverProps = {
  currentVariant: DataBlockVariant;
  blockData: Omit<DataBlockBase, "variants">;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
};

export const DataBlockMenuPopover: FC<DataBlockMenuPopoverProps> = ({
  currentVariant,
  blockData,
  anchorEl,
  onClose,
}) => {
  const {
    state: { i18n, tools },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const { Symbols } = useDevice();

  const currentTool = tools[blockData.type];

  const handleDelete = () => {
    dispatch({
      action: DataBlockEditorAction.DeleteBlock,
      data: {
        id: blockData.id,
      },
    });
    onClose();
  };

  const handleEdit = (
    blockChanges?: Partial<DataBlockBase>,
    variantChanges?: Partial<DataBlockVariant["data"]>,
  ) => {
    dispatch({
      action: DataBlockEditorAction.EditBlock,
      data: {
        block: { ...blockData, ...blockChanges },
        variant: {
          ...currentVariant,
          data: { ...currentVariant.data, ...variantChanges },
        },
      },
    });
    onClose();
  };

  const handleChangeOffset = (num: number) => {
    handleEdit({
      offset: Math.max(0, Math.min((blockData.offset || 0) + num)),
    });
  };

  useEffect(() => () => setIsDeleting(false), [anchorEl]);

  return (
    <>
      <Popover anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <List>
          {currentTool?.renderMenu?.(currentVariant, handleEdit)}
          <ListItem
            asButton
            icon={<IndentIncreaseIcon />}
            text={i18n.indent.increase}
            onClick={() => handleChangeOffset(1)}
            action={
              <Box sx={{ cursor: "pointer", fontSize: 10 }}>{Symbols.TAB}</Box>
            }
          />
          <ListItem
            asButton
            icon={<IndentDecreaseIcon />}
            text={<Box sx={{ pr: 5 }}>{i18n.indent.decrease}</Box>}
            onClick={() => handleChangeOffset(-1)}
            action={
              <Box sx={{ cursor: "pointer", fontSize: 10 }}>
                {`${Symbols.SHIFT} + ${Symbols.TAB}`}
              </Box>
            }
          />
          <ListItem
            asButton
            icon={
              <DeleteIcon sx={{ color: isDeleting ? "white" : undefined }} />
            }
            text={
              isDeleting
                ? i18n.deleteBlock.clickToDelete
                : i18n.deleteBlock.default
            }
            sx={{
              bgcolor: isDeleting ? "error.main" : undefined,
              color: isDeleting ? "white" : undefined,
            }}
            onClick={() => (isDeleting ? handleDelete() : setIsDeleting(true))}
            action={
              <Box sx={{ cursor: "pointer", fontSize: 10 }}>
                {`${Symbols.CMD} + ${Symbols.SHIFT} + ${Symbols.BACKSPACE}`}
              </Box>
            }
          />
        </List>
      </Popover>
    </>
  );
};
