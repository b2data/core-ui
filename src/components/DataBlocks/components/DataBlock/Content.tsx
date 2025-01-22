import React from "react";

import { HeadingBlock, ParagraphBlock } from "../../blocks";
import { DataBlockModel, DataBlockType, DataBlockVariant } from "../../model";

export type BlockContentProps = {
  index: number;
  block: Omit<DataBlockModel, "variants">;
  variant: DataBlockVariant;
  maxOffset?: number;
  editable?: boolean;
};

export const Content: React.FC<BlockContentProps> = ({
  index,
  block,
  variant,
  maxOffset,
  editable,
}) => {
  switch (block.type) {
    case DataBlockType.Header:
      return (
        <HeadingBlock
          index={index}
          block={block}
          variant={variant}
          editable={editable}
          maxOffset={maxOffset}
        />
      );
    case DataBlockType.Paragraph:
      return (
        <ParagraphBlock
          index={index}
          block={block}
          variant={variant}
          editable={editable}
          maxOffset={maxOffset}
        />
      );

    default:
      return null;
  }
};
