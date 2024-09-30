import { FC, useContext, useState } from "react";

import { ButtonGroup } from "../../../ButtonGroup";
import { Button } from "../../../Button";
import { Popover } from "../../../Popover";
import { List } from "../../../List";
import { ListItem } from "../../../ListItem";
import { Avatar } from "../../../Avatar";
import { ExpandMoreIcon, ThumbUpIcon } from "../../../../icons";
import { DataBlockEditorContext } from "../../store";
import { formatUserName } from "../../utils";
import { DataBlockEditorAction, DataBlockVariant } from "../../model";

export type VariantLikesProps = {
  blockId: string;
  isVoted: boolean;
  variant: DataBlockVariant;
};

export const VariantLikes: FC<VariantLikesProps> = ({
  blockId,
  isVoted,
  variant,
}) => {
  const { state, dispatch } = useContext(DataBlockEditorContext);

  const [popoverEl, setPopoverEl] = useState<HTMLButtonElement | null>(null);

  const handleToggleVariant = () => {
    if (state.currentUserId) {
      dispatch({
        action: isVoted
          ? DataBlockEditorAction.UnVoteVariant
          : DataBlockEditorAction.VoteVariant,
        id: blockId,
        variantId: variant.id,
        createdBy: state.currentUserId,
      });
    }
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
          disabled={!state.currentUserId}
          onClick={handleToggleVariant}
        >
          {variant?.votes?.length || 0}
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
            {!variant?.votes?.length && (
              <ListItem text={state.i18n.noResults} />
            )}
            {variant?.votes?.map((v) => (
              <ListItem
                key={v.createdBy}
                avatar={
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    src={v.createdByData?.avatar}
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
