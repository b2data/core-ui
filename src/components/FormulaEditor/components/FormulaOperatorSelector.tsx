import React, { useMemo, useState } from "react";
import { SxProps } from "@mui/material";

import { Box } from "../../Box";
import { List } from "../../List";
import { ListItem } from "../../ListItem";
import { Popover } from "../../Popover";
import { FormulaOperator } from "../model";

import { useFormulaOperators } from "./use-formula-operators";

export type FormulaOperatorSelectorProps = {
  operators?: FormulaOperator[];
  isEditable?: boolean;
  value?: FormulaOperator;
  onChange?: (value?: FormulaOperator) => void;
  sx?: SxProps;
};

export const FormulaOperatorSelector: React.FC<
  FormulaOperatorSelectorProps
> = ({
  operators = Object.values(FormulaOperator),
  isEditable,
  value = FormulaOperator.Equal,
  onChange,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const operatorsMap = useFormulaOperators();

  const options = useMemo(
    () => operators.map((id) => ({ label: operatorsMap[id], id })),
    [operators],
  );

  const canChange = isEditable && options.length > 1;

  const handleOpenSelector = (e: React.MouseEvent<HTMLDivElement>) =>
    canChange ? setAnchorEl(e.currentTarget) : {};

  const handleChange = (id: FormulaOperator) => () => {
    onChange?.(id);
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onClick={handleOpenSelector}
        sx={{
          ...sx,
          cursor: canChange ? "pointer" : "default",
          textAlign: "center",
        }}
      >
        {operatorsMap[value as FormulaOperator]}
      </Box>
      {isEditable && (
        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <List>
            {options.map((opt) => (
              <ListItem
                key={opt.id}
                text={opt.label}
                asButton
                onClick={handleChange(opt.id)}
              />
            ))}
          </List>
        </Popover>
      )}
    </>
  );
};
