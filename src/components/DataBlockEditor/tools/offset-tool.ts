import { KeyboardEvent } from "react";

export const listenOffsetEvent = (
  e: KeyboardEvent<HTMLElement>,
  setOffset: (offset: number) => void,
) => {
  if (e.code === "Tab") {
    e.stopPropagation();
    e.preventDefault();
    setOffset(e.shiftKey ? -1 : 1);
  }
};
