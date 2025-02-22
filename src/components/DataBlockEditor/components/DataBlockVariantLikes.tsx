import { FC, useContext, useState } from "react";

import { ButtonGroup } from "../../ButtonGroup";
import { Button } from "../../Button";
import { Popover } from "../../Popover";
import { List } from "../../List";
import { ListItem } from "../../ListItem";
import { Avatar } from "../../Avatar";
import { ExpandMoreIcon, ThumbUpIcon } from "../../../icons";
import { DataBlockEditorContext } from "../store";
import { formatUserName } from "../utils";
import { DataBlockEditorPublicAction, DataBlockVariant } from "../models";

export type DataBlockVariantLikesProps = {
  blockId: string;
  isVoted: boolean;
  variant: DataBlockVariant;
};

export const DataBlockVariantLikes: FC<DataBlockVariantLikesProps> = ({
  blockId,
  isVoted,
  variant: { id: variantId, votes = [] },
}) => {
  const {
    state: { i18n, currentUser, getFilesUrl },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const [popoverEl, setPopoverEl] = useState<HTMLButtonElement | null>(null);

  const handleToggleVariant = () => {
    dispatch({
      action: isVoted
        ? DataBlockEditorPublicAction.UnVoteVariant
        : DataBlockEditorPublicAction.VoteVariant,
      data: {
        blockId,
        variantId: variantId,
        createdByData: currentUser,
      },
    });
  };

  return (
    <>
      <ButtonGroup variant={isVoted ? "contained" : "outlined"} size="small">
        <Button
          startIcon={<ThumbUpIcon />}
          sx={{
            px: 2,
            py: 1,
            fontSize: 12,
            height: 20,
          }}
          onClick={handleToggleVariant}
        >
          {votes?.length || 0}
        </Button>
        <Button
          onClick={(e) => setPopoverEl(e.currentTarget)}
          sx={{ minWidth: "10px !important", py: 0.5, px: 1, height: 20 }}
        >
          <ExpandMoreIcon sx={{ width: 16, height: 16 }} />
        </Button>
      </ButtonGroup>
      {popoverEl && (
        <Popover
          anchorEl={popoverEl}
          open={Boolean(popoverEl)}
          onClose={() => setPopoverEl(null)}
        >
          <List sx={{ maxHeight: 300 }}>
            {!votes?.length && <ListItem text={i18n.noResults} />}
            {votes?.map((v) => (
              <ListItem
                key={v.createdBy}
                avatar={
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    src={
                      v.createdByData?.avatar
                        ? `${getFilesUrl(v.createdByData?.avatar)}`
                        : undefined
                    }
                  >
                    {formatUserName(v.createdByData, { short: true })}
                  </Avatar>
                }
                text={formatUserName(v.createdByData)}
              />
            ))}
          </List>
        </Popover>
      )}
    </>
  );
};
