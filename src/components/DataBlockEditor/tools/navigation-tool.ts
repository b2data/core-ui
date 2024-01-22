import { KeyboardEvent } from "react";

import { getCaretPosition } from "../utils";

export const navigationEvent = (
  e: KeyboardEvent<HTMLElement>,
  onChange: (dir: "up" | "down") => void,
) => {
  if (e.code === "ArrowDown") {
    if (getCaretPosition() === e.currentTarget.innerHTML.length) {
      onChange("down");
    }
  }

  if (e.code === "ArrowUp") {
    if (getCaretPosition() === 0) {
      onChange("up");
    }
  }
};
