import { SxProps } from "@mui/material";
import React, { useContext } from "react";

import { Box } from "../../Box";
import { DataBlockEditorContext } from "../store";

import { DataBlock } from "./DataBlock";

export const DataBlockEditorRenderer: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  const { state } = useContext(DataBlockEditorContext);

  const blocks = state.blocks || [];

  return (
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
  );
};
