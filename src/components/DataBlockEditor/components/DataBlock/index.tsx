import { SxProps } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import { useDrag } from "react-dnd";
import { omit } from "ramda";

import { Box } from "../../../Box";
import { useToggleable, uuid } from "../../../../hooks";
import { DataBlockModel } from "../../model";
import { DropLine } from "../../../DropLine";
import { useBlockDrop } from "../../hooks/use-block-drop";
import { DataBlockEditorAction, DataBlockEditorContext } from "../../store";

import { Actions } from "./Actions";
import { Content } from "./Content";
import { Variants } from "./Variants";
import { HasVariantIndicator } from "./HasVariantIndicator";
import { AddVariantIndicator } from "./AddVariantIndicator";
import { SwapVariantIndicator } from "./SwapVariantIndicator";

export type DataBlockProps = {
  index: number;
  data: DataBlockModel;
  maxOffset: number;
  sx?: SxProps;
};

export const DataBlock: React.FC<DataBlockProps> = ({
  index,
  data,
  maxOffset,
  sx,
}) => {
  const { state, dispatch } = useContext(DataBlockEditorContext);

  const {
    isOpen: forceShowVariants,
    open: openShowVariants,
    close: closeShowVariants,
  } = useToggleable();

  const displayVariants = useMemo(
    () => state.showVariants || forceShowVariants,
    [state.showVariants, forceShowVariants],
  );

  const canAddVariant = useMemo(
    () =>
      state.editable &&
      !data.variants?.find((v) => v.createdBy === state.currentUserId),
    [state.editable, state.currentUserId, data.variants],
  );

  const blockData = omit(["variants"], data);

  const currentVariant = useMemo(
    () => data.variants.find((v) => v.isCurrent) || data.variants[0],
    [data.variants],
  );

  const otherVariants = useMemo(
    () => data.variants.filter((v) => !v.isCurrent),
    [data.variants],
  );

  const [shownIndex, setShownIndex] = useState<number>(0);

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    type: "DATA_BLOCK",
    item: { ...data, index },
    canDrag: Boolean(state.editable),
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
      action: DataBlockEditorAction.MoveBlock,
      id,
      oldIndex,
      targetIndex,
    }),
  );

  const handleAddVariant = () => {
    dispatch({
      action: DataBlockEditorAction.AddVariant,
      id: blockData.id,
      variant: {
        id: uuid(),
        data: {},
        isCurrent: false,
        createdBy: state.currentUserId,
      },
    });
    openShowVariants();
    setShownIndex(otherVariants.length);
  };

  const handleChangeCurrentVariant = () => {
    if (otherVariants[shownIndex]) {
      dispatch({
        action: DataBlockEditorAction.EditVariant,
        id: blockData.id,
        variant: {
          ...otherVariants[shownIndex],
          isCurrent: true,
        },
      });
    }
  };

  return (
    <Box
      className="data-block"
      sx={{
        position: "relative",
        minHeight: 30,
        my: 1,
        "&:hover .data-block__actions": { opacity: 1 },
        "&:hover .data-block__variant-indicator": { opacity: 1 },
        ...sx,
      }}
    >
      {state.editable && (
        <>
          <Box
            ref={dropBeforeRef}
            sx={{
              height: 10,
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
              height: 10,
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
          <Actions
            blockData={blockData}
            currentVariant={currentVariant}
            index={index}
            dragRef={dragRef}
            isDragging={isDragging}
            maxOffset={maxOffset}
          />
        </>
      )}
      <Box
        ref={previewRef}
        className="data-block__content"
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        gap={5}
        minHeight="inherit"
        pl="60px"
      >
        <Content
          index={index}
          block={blockData}
          variant={currentVariant}
          showPrefix={state.showPrefix}
          editable={
            state.editable && currentVariant.createdBy === state.currentUserId
          }
          maxOffset={maxOffset}
        />
        {displayVariants && otherVariants.length > 0 && (
          <Variants
            index={index}
            block={blockData}
            variants={otherVariants}
            shownIndex={shownIndex}
            setShownIndex={setShownIndex}
            onAddVariant={handleAddVariant}
            canAddVariant={canAddVariant}
            onClose={closeShowVariants}
          />
        )}
      </Box>
      {!state.showVariants && otherVariants.length > 0 && (
        <HasVariantIndicator
          i18n={state.i18n}
          forceShown={forceShowVariants}
          onOpen={openShowVariants}
          onClose={closeShowVariants}
          sx={{
            top: `calc(50% - ${forceShowVariants ? 32 : 16}px)`,
          }}
        />
      )}
      {!displayVariants && canAddVariant && (
        <AddVariantIndicator
          i18n={state.i18n}
          onAdd={handleAddVariant}
          sx={{
            right: otherVariants.length > 0 ? "-66px" : "-32px",
          }}
        />
      )}
      {state.canChangeVariants && displayVariants && (
        <SwapVariantIndicator
          i18n={state.i18n}
          onSwap={handleChangeCurrentVariant}
        />
      )}
    </Box>
  );
};
