import { KeyboardEvent } from "react";

export const addShortcutEvent = (
  e: KeyboardEvent<HTMLElement>,
  onHandle: () => void,
  {
    key,
    metaKey,
    ctrlKey,
    shiftKey,
  }: { key: string; metaKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean },
) => {
  if (
    (metaKey ? e.metaKey : true) &&
    (ctrlKey ? e.ctrlKey : true) &&
    (shiftKey ? e.shiftKey : true) &&
    e.key === key
  ) {
    onHandle();
  }
};
