import React, { useMemo, useState } from "react";
import { SxProps } from "@mui/material";

import { Box } from "../../Box";
import { List } from "../../List";
import { ListItem } from "../../ListItem";
import { Popover } from "../../Popover";
import { FormulaOperator, FormulaRow, FormulaTranslation } from "../model";

import { useFormulaOperators } from "./use-formula-operators";

export type FormulaOperatorSelectorProps = {
  operators?: FormulaOperator[];
  i18n?: FormulaTranslation["operators"];
  type: FormulaRow["type"];
  isEditable?: boolean;
  value?: FormulaOperator;
  onChange?: (value?: FormulaOperator) => void;
  sx?: SxProps;
};

export const FormulaOperatorSelector: React.FC<
  FormulaOperatorSelectorProps
> = ({
  operators = Object.values(FormulaOperator),
  i18n,
  type,
  isEditable,
  value = FormulaOperator.Equal,
  onChange,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const operatorsMap = useFormulaOperators(i18n);

  const availableOptions = useMemo(() => {
    const map: Record<FormulaRow["type"], FormulaOperator[]> = {
      boolean: [FormulaOperator.Equal],
      text: [
        FormulaOperator.Equal,
        FormulaOperator.NotEqual,
        FormulaOperator.Exist,
      ],
      number: [
        FormulaOperator.Equal,
        FormulaOperator.NotEqual,
        FormulaOperator.Less,
        FormulaOperator.LessEqual,
        FormulaOperator.More,
        FormulaOperator.MoreEqual,
        FormulaOperator.Exist,
      ],
      date: [
        FormulaOperator.Equal,
        FormulaOperator.NotEqual,
        FormulaOperator.Less,
        FormulaOperator.LessEqual,
        FormulaOperator.More,
        FormulaOperator.MoreEqual,
        FormulaOperator.Exist,
      ],
    };
    return map[type];
  }, [type]);

  const options = useMemo(
    () =>
      operators
        .filter((id) => availableOptions.includes(id))
        .map((id) => ({ ...operatorsMap[id], id })),
    [operators, availableOptions],
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
        {operatorsMap[value as FormulaOperator].label}
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
                textProps={{
                  withTooltip: true,
                  tooltipProps: { text: opt.tooltip },
                }}
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
