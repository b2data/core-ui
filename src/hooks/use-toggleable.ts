import { useState } from "react";

export type Toggleable = ReturnType<typeof useToggleable>;

export const useToggleable = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((o) => !o),
  };
};
