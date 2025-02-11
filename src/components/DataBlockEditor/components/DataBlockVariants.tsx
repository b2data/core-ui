import { FC, useContext, useEffect, useMemo } from "react";

import { AddIcon } from "../../../icons";
import { DataBlockBase } from "../models";
import { Box } from "../../Box";
import { IconButton } from "../../IconButton";
import { Tooltip } from "../../Tooltip";
import { DataBlockEditorContext } from "../store";

import { DataBlockContent } from "./DataBlockContent";
import { DataBlockVariantLikes } from "./DataBlockVariantLikes";
import { DataBlockVariantAuthor } from "./DataBlockVariantAuthor";

export type DataBlockVariantsProps = {
  index: number;
  block: Omit<DataBlockBase, "variants">;
  variants: DataBlockBase["variants"];
  shownIndex: number;
  setShownIndex: (index: number) => void;
  onAddVariant: () => void;
  canAddVariant: boolean;
};

export const DataBlockVariants: FC<DataBlockVariantsProps> = ({
  index,
  block,
  variants,
  shownIndex,
  setShownIndex,
  onAddVariant,
  canAddVariant,
}) => {
  const {
    state: { editable, i18n, currentUserId },
  } = useContext(DataBlockEditorContext);

  const shownVariant = useMemo(
    () => variants[shownIndex],
    [shownIndex, variants],
  );

  const isEditable = editable && shownVariant?.createdBy === currentUserId;

  const isVoted = useMemo(
    () =>
      Boolean(shownVariant?.votes?.find((v) => v.createdBy === currentUserId)),
    [shownVariant, currentUserId],
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

  return (
    <Box
      className="data-block__variants"
      width={1}
      display="flex"
      flexDirection="column"
      minHeight="inherit"
      gap={2}
      mb="20px"
    >
      {shownVariant && (
        <>
          <DataBlockContent
            key={shownVariant.id}
            index={index}
            block={block}
            variant={shownVariant}
          />
          <DataBlockVariantAuthor
            blockId={block.id}
            variant={shownVariant}
            editable={isEditable}
            setShownIndex={setShownIndex}
          />
        </>
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
      >
        <DataBlockVariantLikes
          blockId={block.id}
          isVoted={isVoted}
          variant={shownVariant}
        />
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
            <Tooltip text={i18n.addVariantTooltip}>
              <IconButton size="small" onClick={onAddVariant}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Box>
  );
};
