import { FC, useContext } from "react";

import { ListItem } from "../../ListItem";
import { Avatar } from "../../Avatar";
import { IconButton } from "../../IconButton";
import { DeleteIcon } from "../../../icons";
import { Tooltip } from "../../Tooltip";
import { formatUserName } from "../utils";
import { DataBlockEditorPublicAction, DataBlockVariant } from "../models";
import { DataBlockEditorContext } from "../store";

export type DataBlockVariantAuthorProps = {
  blockId: string;
  variant: DataBlockVariant;
  editable?: boolean;
  setShownIndex?: (index: number) => void;
};

export const DataBlockVariantAuthor: FC<DataBlockVariantAuthorProps> = ({
  blockId,
  variant: { id: variantId, createdByData },
  editable,
  setShownIndex,
}) => {
  const {
    state: { i18n, getFilesUrl },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const handleDeleteVariant = () => {
    dispatch({
      action: DataBlockEditorPublicAction.DeleteVariant,
      data: {
        blockId,
        variantId: variantId,
      },
    });
    setShownIndex?.(0);
  };

  return (
    <ListItem
      sx={{ p: 0, minHeight: "auto" }}
      text={formatUserName(createdByData)}
      avatar={
        <Avatar
          sx={{ width: 20, height: 20 }}
          src={
            createdByData?.avatar
              ? `${getFilesUrl(createdByData?.avatar)}`
              : undefined
          }
        >
          {formatUserName(createdByData, { short: true })}
        </Avatar>
      }
      action={
        editable ? (
          <Tooltip text={i18n.deleteVariantTooltip}>
            <IconButton size="small" onClick={handleDeleteVariant}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : undefined
      }
    />
  );
};
