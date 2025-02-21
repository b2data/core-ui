import { SxProps } from "@mui/material";
import { FC, UIEventHandler, useContext } from "react";

import { Box } from "../../Box";
import { DataBlockEditorContext } from "../store";

import { DataBlockWrapper } from "./DataBlockWrapper";

export const DataBlockEditorRenderer: FC<{
  sx?: SxProps;
  onScroll?: UIEventHandler<HTMLDivElement>;
  editable?: boolean;
}> = ({ sx, onScroll }) => {
  const { state } = useContext(DataBlockEditorContext);

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        pt: "20mm",
        pl: "calc(30mm - 60px)",
        pr: "calc(10mm - 40px)",
        pb: "500px",
        ...sx,
      }}
      onScroll={onScroll}
    >
      {state.blocks.map((data, index) => (
        <DataBlockWrapper key={data.id} index={index} data={data} />
      ))}
    </Box>
  );
};
