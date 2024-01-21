import { KeyboardEvent } from "react";

import { getCaretPosition } from "../utils";

export const navigationEvent = (
  e: KeyboardEvent<HTMLElement>,
  onChange: (dir: "up" | "down") => void,
) => {
  if (e.code === "ArrowDown") {
    if (
      getCaretPosition(e.currentTarget) === e.currentTarget.innerHTML.length
    ) {
      onChange("down");
    }
  }

  if (e.code === "ArrowUp") {
    if (getCaretPosition(e.currentTarget) === 0) {
      onChange("up");
    }
  }
};
