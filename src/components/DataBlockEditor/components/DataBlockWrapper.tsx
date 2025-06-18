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
      currentUser,
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
      editable && !data.variants?.find((v) => v.createdBy === currentUser.id),
    [editable, currentUser.id, useDeepEqualMemo(data.variants)],
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
        currentVariant?.votes?.find((v) => v.createdBy === currentUser.id),
      ),
    [useDeepEqualMemo(currentVariant), currentUser.id],
  );

  const otherVariants = useMemo(
    () => data.variants.filter((v) => !v.isCurrent),
    [useDeepEqualMemo(data.variants)],
  );

  const [shownId, setShownId] = useState<string>();

  const prefixVariant = useMemo(() => {
    if (currentVariant?.data?.text?.startsWith("# ")) return "h1";
    if (currentVariant?.data?.text?.startsWith("## ")) return "h2";
    if (currentVariant?.data?.text?.startsWith("### ")) return "h3";
    if (currentVariant?.data?.text?.startsWith("#### ")) return "h4";
    if (currentVariant?.data?.text?.startsWith("##### ")) return "h5";
    if (currentVariant?.data?.text?.startsWith("###### ")) return "h6";

    return "body1";
  }, [currentVariant?.data?.text]);

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
    const varId = uuid();
    dispatch({
      action: DataBlockEditorPublicAction.AddVariant,
      data: {
        blockId: blockData.id,
        variant: {
          id: varId,
          data: { text: "" },
          isCurrent: false,
          createdByData: currentUser,
          createdBy: currentUser.id,
        },
      },
    });
    openShowVariants();
    setShownId(varId);
  };

  const handleChangeCurrentVariant = () => {
    const toVar = otherVariants.find((v) => v.id === shownId);
    if (toVar) {
      setShownId(currentVariant?.id);
      dispatch({
        action: DataBlockEditorPublicAction.EditVariant,
        data: {
          blockId: blockData.id,
          variant: {
            ...toVar,
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
        ...(index === focused
          ? {
              // "&:focus-within .data-block__actions": { opacity: 1 },
              "&:focus-within .data-block__variant-indicator": { opacity: 1 },
            }
          : {}),
        "&:hover .data-block__actions": { opacity: 1 },
        "&:hover .data-block__variant-indicator": { opacity: 1 },
        mb: 1,
        mt: prefixVariant.includes("h") ? "1.5rem" : 1,
        ...sx,
      }}
    >
      {editable && (
        <>
          <Box
            ref={(node) => {
              if (node) {
                dropBeforeRef(node as HTMLElement);
              }
            }}
            sx={{
              height: 6,
              top: 0,
              width: 1,
              position: "absolute",
              zIndex: 1,
            }}
          />
          <DropLine sx={{ top: -5 }} shown={isOverBefore && canDropBefore} />
          <Box
            ref={(node) => {
              if (node) {
                dropAfterRef(node as HTMLElement);
              }
            }}
            sx={{
              height: 6,
              bottom: 0,
              width: 1,
              position: "absolute",
              zIndex: 1,
            }}
          />
          <DropLine
            sx={{ bottom: -5, top: "auto" }}
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
        ref={(node) => {
          if (node) {
            previewRef(node as HTMLElement);
          }
        }}
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
            variant={prefixVariant}
            component="div"
            sx={{
              minWidth: Math.max(maxPrefixLength * 9, 16),
              mr: -6,
              ...(prefixVariant.includes("h")
                ? {}
                : {
                    lineHeight: 1.5,
                  }),
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
            shownId={shownId}
            setShownId={setShownId}
            onAddVariant={handleAddVariant}
            canAddVariant={canAddVariant}
            canSwapVariants={
              canChangeVariants && displayVariants && otherVariants.length > 0
            }
            onSwap={handleChangeCurrentVariant}
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
        </>
      )}
    </Box>
  );
};
