import { FC, useContext } from "react";

import { ListItem } from "../../../ListItem";
import { Avatar } from "../../../Avatar";
import { IconButton } from "../../../IconButton";
import { DeleteIcon } from "../../../../icons";
import { Tooltip } from "../../../Tooltip";
import { formatUserName } from "../../utils";
import { DataBlockEditorAction, DataBlockVariant } from "../../model";
import { DataBlockEditorContext } from "../../store";

export type VariantAuthorProps = {
  blockId: string;
  variant: DataBlockVariant;
  editable?: boolean;
  setShownIndex?: (index: number) => void;
};

export const VariantAuthor: FC<VariantAuthorProps> = ({
  blockId,
  variant,
  editable,
  setShownIndex,
}) => {
  const { state, dispatch } = useContext(DataBlockEditorContext);

  const handleDeleteVariant = () => {
    dispatch({
      action: DataBlockEditorAction.DeleteVariant,
      id: blockId,
      variantId: variant.id,
    });
    setShownIndex?.(0);
  };

  return (
    <ListItem
      sx={{ p: 0, minHeight: "auto" }}
      text={formatUserName(variant.createdByData)}
      avatar={
        <Avatar
          sx={{ width: 20, height: 20 }}
          src={variant.createdByData?.avatar}
        >
          {formatUserName(variant.createdByData, { short: true })}
        </Avatar>
      }
      action={
        editable ? (
          <Tooltip text={state.i18n.deleteVariantTooltip}>
            <IconButton size="small" onClick={handleDeleteVariant}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : undefined
      }
    />
  );
};
