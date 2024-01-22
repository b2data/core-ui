import { KeyboardEvent } from "react";

import { getCaretPosition } from "../utils";

export const listenOffsetEvent = (
  e: KeyboardEvent<HTMLElement>,
  setOffset: (offset: number) => void,
) => {
  if (e.code === "Tab") {
    e.stopPropagation();
    e.preventDefault();
    if (getCaretPosition() === 0) {
      setOffset(e.shiftKey ? -1 : 1);
    }
  }
};
