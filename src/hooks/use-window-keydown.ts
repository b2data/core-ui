import { useEffect } from "react";

export const useWindowKeydown = (
  keys: string[],
  callback: (e: KeyboardEvent) => void,
) => {
  const handleKeydown = (e: KeyboardEvent) => {
    const prefix = `${e.metaKey ? "⌘" : ""}${e.ctrlKey ? "⌃" : ""}${e.shiftKey ? "→" : ""}`;
    const key = `${prefix ? `${prefix}+` : ""}${e.key}`;

    if (keys.includes(key)) {
      callback(e);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [keys, callback]);
};
