import { SxProps } from "@mui/material";
import React, { UIEventHandler, useContext } from "react";

import { Box } from "../../Box";
import { DataBlockEditorContext } from "../store";

import { DataBlock } from "./DataBlock";

export const DataBlockEditorRenderer: React.FC<{
  sx?: SxProps;
  onScroll?: UIEventHandler<HTMLDivElement>;
}> = ({ sx, onScroll }) => {
  const { state } = useContext(DataBlockEditorContext);

  const blocks = state.blocks || [];

  return (
    <Box sx={{ width: 1, height: 1, overflowY: "auto" }} onScroll={onScroll}>
      <Box sx={sx}>
        {blocks.map((data, index) => (
          <DataBlock
            key={data.id}
            index={index}
            data={data}
            maxOffset={
              !blocks[index - 1] ? 0 : (blocks[index - 1]?.offset || 0) + 1
            }
          />
        ))}
      </Box>
    </Box>
  );
};
