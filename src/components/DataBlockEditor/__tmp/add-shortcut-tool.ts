import { KeyboardEvent } from "react";

export const addShortcutEvent = (
  e: KeyboardEvent<HTMLElement>,
  onHandle: (e: KeyboardEvent) => void,
  {
    key,
    code,
    metaKey,
    ctrlKey,
    shiftKey,
    isEmpty,
    hasSelection,
  }: {
    key?: string;
    code?: string;
    metaKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    isEmpty?: boolean;
    hasSelection?: boolean;
  },
) => {
  if (
    (typeof code !== "undefined" ? e.code === code : true) &&
    (typeof key !== "undefined" ? e.key === key : true) &&
    (typeof metaKey !== "undefined" ? e.metaKey === metaKey : true) &&
    (typeof ctrlKey !== "undefined" ? e.ctrlKey === ctrlKey : true) &&
    (typeof shiftKey !== "undefined" ? e.shiftKey === shiftKey : true) &&
    (isEmpty === true
      ? e.currentTarget.innerHTML === "" || e.currentTarget.innerHTML === "<br>"
      : true) &&
    (isEmpty === false
      ? !(
          e.currentTarget.innerHTML === "" ||
          e.currentTarget.innerHTML === "<br>"
        )
      : true) &&
    (hasSelection === true ? window.getSelection()?.toString() !== "" : true) &&
    (hasSelection === false ? window.getSelection()?.toString() === "" : true)
  ) {
    onHandle(e);
  }
};
