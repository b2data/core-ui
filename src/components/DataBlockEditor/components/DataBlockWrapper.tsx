import { SxProps } from "@mui/material";
import { FC, useContext, useMemo, useState } from "react";
import { useDrag } from "react-dnd";
import { omit } from "ramda";

import { Box } from "../../Box";
import { Typography } from "../../Typography";
import { useDeepEqualMemo, useToggleable, uuid } from "../../../hooks";
import { DataBlockBase, DataBlockEditorPublicAction } from "../models";
import { DropLine } from "../../DropLine";
import { useBlockDrop } from "../hooks/use-block-drop";
import { DataBlockEditorContext } from "../store";

import { DataBlockActions } from "./DataBlockActions";
import { DataBlockContent } from "./DataBlockContent";
import { DataBlockVariants } from "./DataBlockVariants";
import { DataBlockHasVariantIndicator } from "./DataBlockHasVariantIndicator";
import { DataBlockAddVariantIndicator } from "./DataBlockAddVariantIndicator";
import { DataBlockSwapVariantIndicator } from "./DataBlockSwapVariantIndicator";
import { DataBlockVariantAuthor } from "./DataBlockVariantAuthor";
import { DataBlockVariantLikes } from "./DataBlockVariantLikes";

export type DataBlockWrapperProps = {
  index: number;
  data: DataBlockBase;
  sx?: SxProps;
};

export const DataBlockWrapper: FC<DataBlockWrapperProps> = ({
  index,
  data,
  sx,
}) => {
  const {
    state: {
      editable,
      focused,
      canChangeVariants,
      showVariants,
      currentUserId,
      showPrefix,
      maxPrefixLength,
      prefixes,
    },
    dispatch,
  } = useContext(DataBlockEditorContext);

  const {
    isOpen: forceShowVariants,
    open: openShowVariants,
    close: closeShowVariants,
  } = useToggleable();

  const displayVariants = showVariants || forceShowVariants;

  const canAddVariant = useMemo(
    () =>
      editable && !data.variants?.find((v) => v.createdBy === currentUserId),
    [editable, currentUserId, useDeepEqualMemo(data.variants)],
  );

  const blockData = useMemo(
    () => omit(["variants"], data),
    [useDeepEqualMemo(data)],
  );

  const currentVariant = useMemo(
    () => data.variants.find((v) => v.isCurrent) || data.variants[0],
    [useDeepEqualMemo(data.variants)],
  );

  const currentVariantVoted = useMemo(
    () =>
      Boolean(
        currentVariant?.votes?.find((v) => v.createdBy === currentUserId),
      ),
    [useDeepEqualMemo(currentVariant), currentUserId],
  );

  const otherVariants = useMemo(
    () => data.variants.filter((v) => !v.isCurrent),
    [useDeepEqualMemo(data.variants)],
  );

  const [shownIndex, setShownIndex] = useState<number>(0);

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    type: "DATA_BLOCK",
    item: { ...data, index },
    canDrag: editable,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const {
    isOverBefore,
    canDropBefore,
    dropBeforeRef,
    isOverAfter,
    canDropAfter,
    dropAfterRef,
  } = useBlockDrop(index, ({ id }, oldIndex, targetIndex) =>
    dispatch({
      action: DataBlockEditorPublicAction.MoveBlock,
      data: {
        blockId: id,
        oldIndex,
        targetIndex,
      },
    }),
  );

  const handleAddVariant = () => {
    dispatch({
      action: DataBlockEditorPublicAction.AddVariant,
      data: {
        blockId: blockData.id,
        variant: {
          id: uuid(),
          data: {},
          isCurrent: false,
          createdBy: currentUserId,
        },
      },
    });
    openShowVariants();
    setShownIndex(otherVariants.length);
  };

  const handleChangeCurrentVariant = () => {
    if (otherVariants[shownIndex]) {
      dispatch({
        action: DataBlockEditorPublicAction.EditVariant,
        data: {
          blockId: blockData.id,
          variant: {
            ...otherVariants[shownIndex],
            isCurrent: true,
          },
        },
      });
    }
  };

  return (
    <Box
      className="data-block"
      sx={{
        position: "relative",
        my: 1,
        "&:hover .data-block__actions, &:focus-within .data-block__actions": {
          opacity: 1,
        },
        "&:hover .data-block__variant-indicator, &:focus-within .data-block__variant-indicator":
          { opacity: 1 },
        ...sx,
      }}
    >
      {editable && (
        <>
          <Box
            ref={dropBeforeRef}
            sx={{
              height: 6,
              top: 0,
              width: 1,
              position: "absolute",
              zIndex: 1,
            }}
          />
          <DropLine shown={isOverBefore && canDropBefore} />
          <Box
            ref={dropAfterRef}
            sx={{
              height: 6,
              bottom: 0,
              width: 1,
              position: "absolute",
              zIndex: 1,
            }}
          />
          <DropLine
            sx={{ bottom: -2, top: "auto" }}
            shown={isOverAfter && canDropAfter}
          />
          <DataBlockActions
            blockData={blockData}
            currentVariant={currentVariant}
            index={index}
            dragRef={dragRef}
            isDragging={isDragging}
          />
        </>
      )}
      <Box
        ref={previewRef}
        className="data-block__content"
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        gap={8}
        pl={editable ? "60px" : undefined}
        pr="40px"
      >
        {showPrefix && (
          <Typography
            variant="body1"
            component="div"
            sx={{
              minWidth: Math.max((maxPrefixLength + 1) * 9, 16),
              mr: -6,
              lineHeight: "1.5",
              userSelect: "none",
            }}
          >
            {prefixes[blockData.id]}
          </Typography>
        )}
        <Box width={1} display="flex" flexDirection="column" gap={2}>
          <DataBlockContent
            index={index}
            isFocused={index === focused}
            block={blockData}
            variant={currentVariant}
          />
          {displayVariants && (
            <>
              <DataBlockVariantAuthor
                blockId={blockData.id}
                variant={currentVariant}
              />
              <DataBlockVariantLikes
                blockId={blockData.id}
                isVoted={currentVariantVoted}
                variant={currentVariant}
              />
            </>
          )}
        </Box>

        {displayVariants && otherVariants.length > 0 && editable && (
          <DataBlockVariants
            index={index}
            block={blockData}
            variants={otherVariants}
            shownIndex={shownIndex}
            setShownIndex={setShownIndex}
            onAddVariant={handleAddVariant}
            canAddVariant={canAddVariant}
          />
        )}
      </Box>
      {editable && (
        <>
          {otherVariants.length > 0 && (
            <DataBlockHasVariantIndicator
              forceShown={forceShowVariants}
              onOpen={openShowVariants}
              onClose={closeShowVariants}
              count={otherVariants.length}
            />
          )}
          {otherVariants.length === 0 && canAddVariant && (
            <DataBlockAddVariantIndicator onAddVariant={handleAddVariant} />
          )}
          {canChangeVariants && displayVariants && otherVariants.length > 0 && (
            <DataBlockSwapVariantIndicator
              onSwap={handleChangeCurrentVariant}
            />
          )}
        </>
      )}
    </Box>
  );
};
