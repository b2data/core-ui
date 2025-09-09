import { useEffect } from "react";

import { useDevice } from "./use-device";

const { Symbols } = useDevice();

// HINT: To disable DataGrid default space key handling: search `goToCell` in useGridKeyboardNavigation

export const useWindowKeydown = (
  keys: string[],
  callback: (e: KeyboardEvent) => void,
) => {
  const handleKeydown = (e: KeyboardEvent) => {
    const prefix = `${e.metaKey ? Symbols.CMD : ""}${e.ctrlKey ? Symbols.CTRL : ""}${e.shiftKey ? Symbols.SHIFT : ""}`;
    const key = `${prefix ? `${prefix}+` : ""}${e.key}`;

    if (
      keys.includes(" ") &&
      keys.length === 1 &&
      (e.target as HTMLElement).tagName === "INPUT"
    ) {
      // ignore callback on inputs if only space is a key
      return;
    }

    if (keys.includes(key)) {
      callback(e);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [keys, callback]);
};
