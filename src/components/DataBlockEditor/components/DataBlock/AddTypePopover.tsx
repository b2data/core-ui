import React, { useEffect, useMemo, useRef, useState } from "react";

import { Popover } from "../../../Popover";
import { List } from "../../../List";
import { ListItem } from "../../../ListItem";
import { Box } from "../../../Box";
import { TextField } from "../../../TextField";
import { DataBlockEditorTranslations, DataBlockType } from "../../model";
import { SearchIcon } from "../../../../icons";

import { useBlocksOptions } from "./use-blocks-options";

export const AddTypePopover: React.FC<{
  onAdd: (type: DataBlockType) => void;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
  options: DataBlockType[];
  i18n: DataBlockEditorTranslations;
}> = ({ anchorEl, options, onAdd, onClose, i18n }) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [focused, setFocused] = useState<number>(0);

  const typeOptions = useBlocksOptions();
  const [val, setVal] = useState<string>("");

  const shownOptions = useMemo(
    () =>
      options.filter((t) =>
        typeOptions[t].label.toLowerCase().includes(val.toLowerCase()),
      ),
    [options, val],
  );

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.code === "ArrowDown") {
      setFocused(Math.min(shownOptions.length, focused + 1));
    }
    if (e.code === "ArrowUp") {
      setFocused(Math.max(1, focused - 1));
    }
  };

  useEffect(() => {
    (
      (
        listRef.current?.childNodes?.[focused - 1] as HTMLLIElement
      )?.querySelector(".MuiButtonBase-root") as HTMLDivElement
    )?.focus?.();
  }, [focused]);

  useEffect(() => {
    if (anchorEl) {
      window.addEventListener("keydown", handleKeyEvent);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [anchorEl, focused, shownOptions.length]);

  useEffect(() => () => setFocused(0));

  return (
    <Popover anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <TextField
        autoFocus
        autoComplete="off"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        variant="outlined"
        placeholder={i18n.filterPlaceholder}
        startAdornment={<SearchIcon />}
        sx={{
          px: 2,
          pt: 2,
          "& .MuiInputBase-root": { height: 30 },
          "& .MuiOutlinedInput-root .MuiInputAdornment-root.MuiInputAdornment-positionStart":
            { pl: 1 },
          "& .MuiInputBase-input": { p: 1 },
        }}
      />
      <List ref={listRef}>
        {shownOptions.map((type) => (
          <ListItem
            key={type}
            asButton
            onClick={() => onAdd(type)}
            onKeyDown={(e) => (e.code === "Enter" ? onAdd(type) : null)}
            text={typeOptions[type].label}
            icon={typeOptions[type].icon}
            action={
              typeOptions[type].action ? (
                <Box sx={{ cursor: "pointer", fontSize: 10 }}>
                  {typeOptions[type].action}
                </Box>
              ) : undefined
            }
          />
        ))}
      </List>
    </Popover>
  );
};
