import React, { useContext, useEffect, useMemo, useState } from "react";

import {
  AddIcon,
  DeleteIcon,
  ExpandMoreIcon,
  ThumbUpIcon,
} from "../../../../icons";
import { DataBlockModel } from "../../model";
import { Box } from "../../../Box";
import { IconButton } from "../../../IconButton";
import { List } from "../../../List";
import { ListItem } from "../../../ListItem";
import { Popover } from "../../../Popover";
import { Button } from "../../../Button";
import { ButtonGroup } from "../../../ButtonGroup";
import { Avatar } from "../../../Avatar";
import { Tooltip } from "../../../Tooltip";
import { DataBlockEditorAction, DataBlockEditorContext } from "../../store";
import { formatUserName } from "../../utils";

import { Content } from "./Content";

export type VariantsProps = {
  index: number;
  block: Omit<DataBlockModel, "variants">;
  variants: DataBlockModel["variants"];
  shownIndex: number;
  setShownIndex: (index: number) => void;
  onClose: () => void;
  onAddVariant: () => void;
  canAddVariant: boolean;
};

export const Variants: React.FC<VariantsProps> = ({
  index,
  block,
  variants,
  shownIndex,
  setShownIndex,
  onClose,
  onAddVariant,
  canAddVariant,
}) => {
  const { state, dispatch } = useContext(DataBlockEditorContext);

  const [popoverEl, setPopoverEl] = useState<HTMLButtonElement | null>(null);

  const shownVariant = useMemo(
    () => variants[shownIndex],
    [shownIndex, variants],
  );

  const editable =
    state.editable && shownVariant?.createdBy === state.currentUserId;

  const isVoted = useMemo(
    () =>
      Boolean(
        shownVariant?.votes?.find((v) => v.createdBy === state.currentUserId),
      ),
    [shownVariant, state.currentUserId],
  );

  useEffect(() => () => setShownIndex(0), []);

  const slider = useMemo(() => {
    if (variants.length > 7) {
      if (shownIndex < 4) {
        return [0, 1, 2, 3, 4, "...", variants.length - 1];
      }

      if (shownIndex + 4 > variants.length - 1) {
        return [
          0,
          "...",
          variants.length - 5,
          variants.length - 4,
          variants.length - 3,
          variants.length - 2,
          variants.length - 1,
        ];
      }

      return [
        0,
        "...",
        shownIndex - 1,
        shownIndex,
        shownIndex + 1,
        "...",
        variants.length - 1,
      ];
    } else {
      return variants.map((_, ind) => ind);
    }
  }, [shownIndex, variants]);

  const handleToggleVariant = () => {
    if (state.currentUserId) {
      dispatch({
        action: isVoted
          ? DataBlockEditorAction.UnVoteVariant
          : DataBlockEditorAction.VoteVariant,
        id: block.id,
        variantId: shownVariant.id,
        createdBy: state.currentUserId,
      });
    }
  };

  const handleDeleteVariant = () => {
    dispatch({
      action: DataBlockEditorAction.DeleteVariant,
      id: block.id,
      variantId: shownVariant.id,
    });
    if (variants.length <= 1) {
      onClose();
    }
    setShownIndex(0);
  };

  return (
    <Box
      className="data-block__variants"
      width={1}
      display="flex"
      flexDirection="column"
      minHeight="inherit"
      gap={1}
      mb="20px"
    >
      {shownVariant && (
        <>
          <Content
            key={shownVariant.id}
            index={index}
            block={block}
            variant={shownVariant}
            editable={editable}
          />
          <ListItem
            sx={{ p: 0, minHeight: "auto" }}
            text={formatUserName(shownVariant.createdByData)}
            avatar={
              <Avatar
                sx={{ width: 20, height: 20 }}
                src={shownVariant.createdByData?.avatar}
              >
                {formatUserName(shownVariant.createdByData, { short: true })}
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
        </>
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
      >
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
            {shownVariant?.votes?.length || 0}
          </Button>
          <Button
            onClick={(e) => setPopoverEl(e.currentTarget)}
            sx={{ minWidth: "10px !important", py: 0.5, px: 1, height: 20 }}
          >
            <ExpandMoreIcon sx={{ width: 16, height: 16 }} />
          </Button>
        </ButtonGroup>
        <Box display="flex" alignItems="center" gap={1}>
          {slider.map((ind, i) => (
            <IconButton
              key={`${ind}-${i}`}
              size="small"
              onClick={() =>
                typeof ind === "number" ? setShownIndex(ind) : {}
              }
              sx={{
                fontSize: 12,
                width: 20,
                height: 20,
                border:
                  typeof ind === "number" &&
                  variants[ind]?.id === shownVariant?.id
                    ? "1px solid"
                    : undefined,
              }}
            >
              {typeof ind === "number" ? ind + 1 : ind}
            </IconButton>
          ))}
          {canAddVariant && (
            <Tooltip text={state.i18n.addVariantTooltip}>
              <IconButton size="small" onClick={onAddVariant}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      <Popover
        anchorEl={popoverEl}
        open={Boolean(popoverEl)}
        onClose={() => setPopoverEl(null)}
      >
        <List sx={{ maxHeight: 300 }}>
          {!shownVariant?.votes?.length && (
            <ListItem text={state.i18n.noResults} />
          )}
          {shownVariant?.votes?.map((v) => (
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
    </Box>
  );
};
