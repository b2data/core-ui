import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import { Popover } from "../../Popover";
import { List } from "../../List";
import { ListItem } from "../../ListItem";
import { Box } from "../../Box";
import { TextField } from "../../TextField";
import { SearchIcon } from "../../../icons";
import { useDeepEqualMemo, useDevice, uuid } from "../../../hooks";
import { DataBlockEditorContext } from "../store";
import { DataBlockEditorPublicAction } from "../models";

export type DataBlockAddTypePopoverProps = {
  offset: number;
  index: number;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
};

export const DataBlockAddTypePopover: FC<DataBlockAddTypePopoverProps> = ({
  offset,
  index,
  anchorEl,
  onClose,
}) => {
  const {
    state: { i18n, tools, currentUser },
    dispatch,
  } = useContext(DataBlockEditorContext);
  const { Symbols } = useDevice();

  const listRef = useRef<HTMLUListElement | null>(null);
  const [focused, setFocused] = useState<number>(0);

  const [val, setVal] = useState<string>("");

  const options = useMemo(
    () =>
      Object.keys(tools).map((type) => {
        const { title, icon: Icon, defaultValue, shortcut = [] } = tools[type];
        return {
          id: type,
          title,
          icon: Icon && <Icon />,
          defaultValue,
          shortcut: shortcut.map((s) => Symbols[s]),
        };
      }),
    [useDeepEqualMemo(tools)],
  );

  const shownOptions = useMemo(
    () =>
      options.filter((t) => t.title.toLowerCase().includes(val.toLowerCase())),
    [options, val],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.code) {
        case "Enter":
          e.preventDefault();
          handleAdd(shownOptions[focused - 1]);
          break;
        case "ArrowDown":
          e.preventDefault();
          setFocused(Math.min(shownOptions.length, focused + 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocused(Math.max(0, focused - 1));
          break;
        default:
          break;
      }
    },
    [shownOptions.length, focused],
  );

  const handleAdd = (option: { id: string; defaultValue?: string }) => {
    dispatch({
      action: DataBlockEditorPublicAction.AddBlock,
      data: {
        block: {
          id: uuid(),
          type: option.id,
          offset,
          createdBy: currentUser.id,
        },
        variant: {
          id: uuid(),
          data: { text: option.defaultValue || "" },
          isCurrent: true,
          createdBy: currentUser.id,
        },
        index: index + 1,
      },
    });
    onClose();
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
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [anchorEl, handleKeyDown]);

  useEffect(() => () => setFocused(0), [anchorEl]);

  return (
    <Popover anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <TextField
        autoFocus
        autoComplete="off"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        variant="outlined"
        placeholder={i18n.addBtnFilter}
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
        {shownOptions.map((opt) => {
          const matches = match(opt.title, val, {
            insideWords: true,
            findAllOccurrences: true,
          });
          const parts = parse(opt.title, matches);
          return (
            <ListItem
              key={opt.id}
              asButton
              onClick={() => handleAdd(opt)}
              text={
                <>
                  {parts.map((part, index) =>
                    part.highlight ? (
                      <mark key={index}>{part.text}</mark>
                    ) : (
                      <span key={index}>{part.text}</span>
                    ),
                  )}
                </>
              }
              icon={opt.icon}
              action={
                opt.shortcut ? (
                  <Box sx={{ cursor: "pointer", fontSize: 10 }}>
                    {opt.shortcut.join(" + ")}
                  </Box>
                ) : undefined
              }
            />
          );
        })}
      </List>
    </Popover>
  );
};
