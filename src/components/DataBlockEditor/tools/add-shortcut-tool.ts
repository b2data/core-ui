import { KeyboardEvent } from "react";

export const addShortcutEvent = (
  e: KeyboardEvent<HTMLElement>,
  onHandle: () => void,
) => {
  if (e.metaKey && e.key === "Enter") {
    onHandle();
  }
};
