import React, { ReactElement, useEffect, useMemo, useState } from "react";

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
  H1Icon,
  H2Icon,
  H3Icon,
  H4Icon,
  H5Icon,
  H6Icon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
} from "../../../../icons";
import { useDevice } from "../../../../hooks";

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
  const [headerEl, setHeaderEl] = useState<HTMLLIElement | null>(null);
  const { Symbols } = useDevice();

  const handleChangeAlign = (align: DataBlockAlign) => {
    onEdit(offset, { ...data, align });
    setAlignEl(null);
  };

  const handleChangeHeader = (tag: string) => {
    onEdit(offset, { ...data, tag });
    setHeaderEl(null);
  };

  const HeadingIcons = useMemo<Record<string, ReactElement>>(
    () => ({
      h1: <H1Icon />,
      h2: <H2Icon />,
      h3: <H3Icon />,
      h4: <H4Icon />,
      h5: <H5Icon />,
      h6: <H6Icon />,
    }),
    [],
  );

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
          {DataBlockType.Header === type && (
            <ListItem
              asButton
              icon={HeadingIcons[data.tag]}
              onClick={(e) => setHeaderEl(e.currentTarget)}
              text={i18n.blocks.header}
            />
          )}
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
            action={
              <Box sx={{ cursor: "pointer", fontSize: 10 }}>
                {`${Symbols.CMD} + ${Symbols.SHIFT} + ${Symbols.BACKSPACE}`}
              </Box>
            }
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
      <Popover
        anchorEl={headerEl}
        open={Boolean(headerEl)}
        onClose={() => setHeaderEl(null)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List>
          {Object.keys(HeadingIcons).map((k, ind) => (
            <ListItem
              key={k}
              asButton
              text={`${i18n.blocks.header} ${ind + 1}`}
              icon={HeadingIcons[k]}
              onClick={() => handleChangeHeader(k)}
            />
          ))}
        </List>
      </Popover>
    </>
  );
};
