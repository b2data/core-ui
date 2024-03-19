import React from "react";

import { Box } from "../../Box";
import { Typography } from "../../Typography";
import { FormulaTranslation } from "../model";

export type AddFormulaRowProps = {
  index: number;
  onClick: () => void;
  i18n?: FormulaTranslation;
};

export const AddFormulaRow: React.FC<AddFormulaRowProps> = ({
  index,
  onClick,
  i18n,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateAreas: "'number field'",
        gridTemplateColumns: "30px 1fr",
        minHeight: 20,
      }}
    >
      <Typography sx={{ gridArea: "number" }} variant="caption">
        {index}
      </Typography>
      <Typography
        sx={{ gridArea: "field", cursor: "pointer" }}
        variant="caption"
        color="primary.main"
        onClick={onClick}
      >
        {i18n?.addFilter || "Add filter"}
      </Typography>
    </Box>
  );
};
