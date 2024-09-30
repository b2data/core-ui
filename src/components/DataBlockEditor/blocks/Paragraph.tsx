import React, { useContext, useEffect, useRef } from "react";

import { CircularProgress } from "../../CircularProgress";
import { Typography } from "../../Typography";
import { Box } from "../../Box";
import { DataBlockEditorAction, DataBlockEditorContext } from "../store";
import { DataBlockParagraph, DataBlockVariant } from "../model";
import { useBlockListener } from "../hooks";
import { setCaretPosition } from "../utils";

import { getCommonStyles } from "./styles";

export type ParagraphBlockProps = {
  index: number;
  block: Omit<DataBlockParagraph, "variants">;
  variant: DataBlockVariant;
  maxOffset?: number;
  editable?: boolean;
};

export const ParagraphBlock: React.FC<ParagraphBlockProps> = ({
  index,
  block,
  variant,
  maxOffset,
  editable,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { state, dispatch } = useContext(DataBlockEditorContext);

  const { text = "", align = "left" } = variant.data || {};

  const listeners = useBlockListener(dispatch, {
    block,
    variant,
    index,
    editable,
    maxOffset,
  });

  useEffect(() => {
    if (state.focused === index && ref.current) {
      setCaretPosition(ref.current);
      dispatch({ action: DataBlockEditorAction.SetFocused, index: undefined });
    }
  }, [state.focused, index]);

  const onDataChange = (e: React.FocusEvent<HTMLElement>) => {
    dispatch({
      action: DataBlockEditorAction.EditBlock,
      block,
      variant: {
        ...variant,
        data: { ...variant.data, text: e.target.innerHTML },
      },
    });
  };

  return (
    <Typography
      ref={ref}
      tabIndex={editable ? index : -1}
      variant="body1"
      align={align}
      onBlur={onDataChange}
      suppressContentEditableWarning={editable}
      contentEditable={editable}
      sx={getCommonStyles(state.i18n.emptyPlaceholder)}
      dangerouslySetInnerHTML={{ __html: text }}
      {...listeners}
    />
  );
};
