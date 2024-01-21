import React, { useEffect, useState } from "react";

import { Popover } from "../../../Popover";
import { List } from "../../../List";
import { ListItem } from "../../../ListItem";
import { Box } from "../../../Box";
import {
  DataBlockAlign,
  DataBlockEditorTranslations,
  DataBlockType,
  DataBlockVariant,
} from "../../model";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DeleteIcon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
} from "../../../../icons";
import { useDevice, useWindowKeydown } from "../../../../hooks";

export const MenuPopover: React.FC<{
  data: DataBlockVariant["data"];
  offset: number;
  type: DataBlockType;
  i18n: DataBlockEditorTranslations;
  anchorEl: HTMLButtonElement | null;
  maxOffset: number;
  onClose: () => void;
  onDelete: () => void;
  onEdit: (offset: number, data: DataBlockVariant["data"]) => void;
}> = ({
  data,
  offset,
  type,
  anchorEl,
  i18n,
  maxOffset,
  onClose,
  onDelete,
  onEdit,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [alignEl, setAlignEl] = useState<HTMLLIElement | null>(null);
  const { Symbols } = useDevice();

  const handleChangeAlign = (align: DataBlockAlign) => {
    onEdit(offset, { ...data, align });
    setAlignEl(null);
  };

  const handleChangeOffset = (num: number) => {
    onEdit(
      Math.max(
        0,
        Math.min(maxOffset ?? Number.MAX_VALUE, (data.offset || 0) + num),
      ),
      data,
    );
  };

  useEffect(() => () => setIsDeleting(false), [anchorEl]);

  return (
    <>
      <Popover anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <List>
          {[DataBlockType.Header, DataBlockType.Paragraph].includes(type) && (
            <ListItem
              asButton
              icon={
                "align" in data && data.align === DataBlockAlign.Right ? (
                  <AlignRightIcon />
                ) : "align" in data && data.align === DataBlockAlign.Center ? (
                  <AlignCenterIcon />
                ) : "align" in data && data.align === DataBlockAlign.Justify ? (
                  <AlignJustifyIcon />
                ) : (
                  <AlignLeftIcon />
                )
              }
              onClick={(e) => setAlignEl(e.currentTarget)}
              text={i18n.align.title}
              divider
            />
          )}
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
            onClick={() => (isDeleting ? onDelete() : setIsDeleting(true))}
          />
        </List>
      </Popover>
      <Popover
        anchorEl={alignEl}
        open={Boolean(alignEl)}
        onClose={() => setAlignEl(null)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List>
          <ListItem
            asButton
            text={i18n.align.left}
            icon={<AlignLeftIcon />}
            onClick={() => handleChangeAlign(DataBlockAlign.Left)}
          />
          <ListItem
            asButton
            text={i18n.align.center}
            icon={<AlignCenterIcon />}
            onClick={() => handleChangeAlign(DataBlockAlign.Center)}
          />
          <ListItem
            asButton
            text={i18n.align.right}
            icon={<AlignRightIcon />}
            onClick={() => handleChangeAlign(DataBlockAlign.Right)}
          />
          <ListItem
            asButton
            text={i18n.align.justify}
            icon={<AlignJustifyIcon />}
            onClick={() => handleChangeAlign(DataBlockAlign.Justify)}
          />
        </List>
      </Popover>
    </>
  );
};
